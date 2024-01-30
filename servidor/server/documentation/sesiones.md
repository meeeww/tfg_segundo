
## Referencia API sesiones

#### Recibir sesion a partir de un token

```http
  GET /sesiones/self
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `x-auth-token` | `header` | **Obligatorio**. Token |

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
| `sesion` | `objeto` | **Obligatorio**. Objeto de la sesion |

#### Eliminar sesión a partir de token

```http
  DELETE /sesiones/logout
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `x-auth-token` | `header` | **Obligatorio**. Token |

#### Eliminar todas las sesiones a partir de token

```http
  DELETE /sesiones/logoutAll
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `x-auth-token` | `header` | **Obligatorio**. Token |