export default interface registerParams {
    Nombre_Usuario: string;
    Apellido_Usuario: string;
    Descripcion_Usuario: string;
    Nick_Usuario: string;
    Email_Usuario: string;
    Fecha_Creacion: number;
    Estado_Cuenta: 0 | 1 | 2;
    Verificacion_Cuenta: 0 | 1;
}