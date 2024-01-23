
## Referencia API usuarios

#### Recibir todos los usuarios

```http
  GET /usuarios
```

#### Recibir usuario a partir de su id

```http
  GET /usuarios/id=
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `int` | **Obligatorio**. ID del usuario |

#### Recibir usuario a partir de su nombre

```http
  GET /usuarios/nombre=
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nombre` | `string` | **Obligatorio**. Nombre del usuario |

#### Recibir usuarios a partir de su apellido

```http
  GET /usuarios/apellido=
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `apellido` | `string` | **Obligatorio**. Apellido del usuario |

#### Recibir usuarios a partir de su nick

```http
  GET /usuarios/nick=
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nick` | `string` | **Obligatorio**. Nick del usuario |

#### Recibir usuarios a partir de su correo electrónico

```http
  GET /usuarios/email=
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Obligatorio**. Email del usuario |

#### Recibir usuarios a partir de su fecha de creación de la cuenta

```http
  GET /usuarios/fecha=
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `fecha` | `int (epoch)` | **Obligatorio**. Fecha de creación del usuario |

#### Recibir usuarios a partir de su estado de cuenta

```http
  GET /usuarios/estado=
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `estado` | `int` | **Obligatorio**. Estado del usuario (0 - 1) |

#### Recibir usuarios a partir de su estado de verificacion

```http
  GET /usuarios/verificacion=
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `verificacion` | `int` | **Obligatorio**. Verificacion del usuario (0 - 1) |

#### Crear usuario a partir de un objeto

```http
  POST /usuarios
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `usuario` | `object` | **Obligatorio**. Objeto del usuario |

#### Modificar usuario a partir de su objeto

```http
  PUT /usuarios
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `usuario` | `object` | **Obligatorio**. Objeto del usuario |