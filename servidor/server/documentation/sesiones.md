
## Referencia API sesiones

#### Recibir sesion a partir de un token

```http
  GET /sesiones/self
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `x-auth-token` | `header` | **Obligatorio**. Token como header |

#### Crear sesion a partir de 

```http
  POST /sesiones
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ID_Usuario` | `int` | **Obligatorio**. ID del usuario |
| `Dispositivo` | `string` | **Obligatorio**. Dispositivo del usuario |

#### Actualizar sesión a partir de su objeto

```http
  PUT /sesiones 
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `ID_Sesion` | `int` | **Obligatorio**. ID de la sesion |
| `ID_Usuario` | `int` | **Obligatorio**. ID del usuario |
| `Token_Sesion` | `string` | **Obligatorio**. Token de la sesion |
| `Fecha_Inicio` | `int` | **Obligatorio**. Fecha de creación de sesion (epoch)  |
| `Fecha_Expiracion` | `int` | **Obligatorio**. Fecha de expiracion de sesion (epoch) |
| `Estado_Sesion` | `int (0 inactivo, 1 activo)` | **Obligatorio**. Estado de la sesion |
| `Ultima_Actividad` | `int` | **Obligatorio**. Fecha de última sesion (epoch) |
| `Dispositivo` | `string` | **Obligatorio**. Dispositivo de la sesión |

#### Eliminar sesión a partir de token

```http
  DELETE /sesiones/logout
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Token_Sesion` | `string` | **Obligatorio**. Token del usuario |
| `x-auth-token` | `header` | **Obligatorio**. Token como header |

#### Eliminar todas las sesiones a partir de token

```http
  DELETE /sesiones/logoutAll
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Token_Sesion` | `string` | **Obligatorio**. Token del usuario |
| `x-auth-token` | `header` | **Obligatorio**. Token como header |