pipeline {
    agent {
        kubernetes {
            yaml """
apiVersion: v1
kind: Pod
spec:
  containers:
  - name: kaniko
    image: gcr.io/kaniko-project/executor:debug
    command: ["/busybox/cat"]
    tty: true
    volumeMounts:
    - name: kaniko-secret
      mountPath: /kaniko/.docker
  - name: tools
    image: alpine:3.18
    command: ["/bin/sh", "-c"]
    args: ["cat"]
    tty: true
  volumes:
  - name: kaniko-secret
    secret:
      secretName: dockerhub-secret
      items:
      - key: .dockerconfigjson
        path: config.json
"""
        }
    }

    stages {
        stage('Build and Push') {
            steps {
                container('kaniko') {
                    sh """
                        /kaniko/executor \\
                        --context \$(pwd) \\
                        --dockerfile deploy/build_img/Dockerfile \\
                        --destination gaabriel05/portfolio:${env.GIT_COMMIT} \\
                        --destination gaabriel05/portfolio:latest \\
                        --snapshot-mode=redo \\
                        --single-snapshot
                    """
                }
            }
        }

        stage('Actualizar GitHub para ArgoCD') {
            steps {
                container('tools') {
                    withCredentials([usernamePassword(credentialsId: 'github-credentials', passwordVariable: 'GIT_PASS', usernameVariable: 'GIT_USER')]) {
                        sh '''
                            # 0. Instalar git y arreglar el problema de seguridad de carpetas
                            apk add --no-cache git
                            git config --global --add safe.directory '*'

                            # 1. Configurar quién hace el commit
                            git config user.email "jenkins@gabrielmq.com"
                            git config user.name "Jenkins CI"

                            # 2. Obtener el código único de esta versión (Hash del commit)
                            COMMIT_HASH=$(git rev-parse HEAD)

                            # 3. Buscar la palabra 'tag:' en values.yaml y cambiarla por el nuevo código
                            sed -i "s/tag: .*/tag: \\"${COMMIT_HASH}\\"/g" deploy/miportfolio/values.yaml

                            # 4. Subir el cambio de vuelta a tu GitHub
                            git add deploy/miportfolio/values.yaml
                            git commit -m "Jenkins: Actualiza imagen a la version ${COMMIT_HASH} [skip ci]"
                            git push https://${GIT_USER}:${GIT_PASS}@github.com/gabriel72188/portfoliodespliegue.git HEAD:main
                        '''
                    }
                }
            }
        }
    }
}