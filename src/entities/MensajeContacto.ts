import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity("mensajes_contacto")
export class MensajeContacto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    email: string;

    @Column("text")
    mensaje: string;

    @CreateDateColumn()
    fecha_envio: Date;
}