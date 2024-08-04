# API Reserva de restaurantes

Esta API nos permite gestionar restaurantes, clientes y reservas.

## Uso de la API

Ruta base del servidor: http://localhost:3000

## Usuarios

### Registrar usuario

- Ruta: `/api/v1/users/register`
- Método: `POST`

Body:

```json
{
  username: String,
  email: String,
  password: String,
  role: String ["admin", "client"]
}
```

### Login

- Ruta: `/api/v1/users/login`
- Método: `GET`

Body:

```json
{
  username: String,
  password: String
}
```

Respuesta:

```json
{
  "user": {
    /* user details*/
  },
  "token": "example123.of456.token789"
}
```

### Obtener todos los usuarios (client y admin)

- Ruta: `/api/v1/users/`
- Método: `GET`

Auth:<br>
TOKEN: "your_token"

Respuesta:

```json
{
		"_id": "66a788ecb92ca807179b6ce0",
		"username": "Juan",
		"email": "juan.perez@example.com",
		"password": "$2b$10$ItDDa0B",
		"role": "client",
		"__v": 0,
		"createdAt": "2024-07",
		"updatedAt": "2024-07"
	},
	{
		"_id": "66a788ecb92ca807179b6ce1",
		"username": "María",
		"email": "maria.lopez@example.com",
		"password": "$2b$10$/3py",
		"role": "admin",
		"__v": 0,
		"createdAt": "2024-07",
		"updatedAt": "2024-07"
	}
```

### Obtener un usuario por id (client y admin)

- Ruta: `/api/v1/users/:id`
  - Ejemplo: `/api/v1/users/66a788ecb92ca807179b6ce0`
- Método: `GET`

Auth:<br>
TOKEN: "your_token"

Respuesta:

```json
{
  "_id": "66a788ecb92ca807179b6ce0",
  "username": "Juan",
  "email": "juan.perez@example.com",
  "password": "$2b$10$ItDDa0B",
  "role": "client",
  "__v": 0,
  "createdAt": "2024-07",
  "updatedAt": "2024-07"
}
```

### Obtener un usuario por nombre (client y admin)

- Ruta: `/api/v1/users/:name`
  - Ejemplo: `/api/v1/users/María`
- Método: `GET`

Auth:<br>
TOKEN: "your_token"

Respuesta:

```json
{
  "_id": "66a788ecb92ca807179b6ce1",
  "username": "María",
  "email": "maria.lopez@example.com",
  "password": "$2b$10$/3py",
  "role": "admin",
  "__v": 0,
  "createdAt": "2024-07",
  "updatedAt": "2024-07"
}
```

### Obtener un usuario por rol (client y admin)

- Ruta: `/api/v1/users/:role`
  - Ejemplo: `/api/v1/users/client`
- Método: `GET`

Auth:<br>
TOKEN: "your_token"

Respuesta:

```json
{
		"_id": "66a788ecb92ca807179b6ce0",
		"username": "Juan",
		"email": "juan.perez@example.com",
		"password": "$2b$10$It",
		"role": "client",
		"__v": 0,
		"createdAt": "2024-07",
		"updatedAt": "2024-07"
	},
	{
		"_id": "66a788ecb92ca807179b6ce1",
		"username": "María",
		"email": "maria.lopez@example.com",
		"password": "$2b$10$/3puK",
		"role": "client",
		"__v": 0,
		"createdAt": "2024-07",
		"updatedAt": "2024-07"
	}
```

### Actualizar un usuario (client y admin)

¡¡ El cliente solo puede actualizarse a sí mismo !!

- Ruta: `/api/v1/users/:id`
  - Ejemplo: `/api/v1/users/66a788ecb92ca807179b6ce0`
- Método: `PUT`

Auth:<br>
TOKEN: "your_token"

Body:

```json
{
  username: String,
  email: String,
  password: String,
  role: String ["admin", "client"] // Solo si eres admin
}
```

Respuesta:

```json
{
  "_id": "66a788ecb92ca807179b6ce0",
  "username": "Juan",
  "email": "juan.perez@example.com",
  "password": "$2b$10$It",
  "role": "client",
  "__v": 0,
  "createdAt": "2024-07",
  "updatedAt": "2024-07"
}
```

### Borrar usuario

- Ruta: `/api/v1/users/:id`
  - Ejemplo: `/api/v1/users/66a788ecb92ca807179b6ce0`
- Método: `DELETE`

## Restaurantes

### Crear restaurante (Necesitas ser admin)

- Ruta: `/api/v1/restaurants/`
- Método: `POST`

Body:

```json
{
  name: String,
  address: String,
  phone: Number,
  foodStyle: String ["chino", "español", "tailandés", "americano", "griego"]
}
```

### Obtener todos los restaurantes

- Ruta: `/api/v1/restaurants/`
- Método: `GET`

Respuesta:

// TODO

### Obtener un restaurante por id

- Ruta: `/api/v1/restaurants/:id`
  - Ejemplo: `/api/v1/users/66a788ecb92ca807179b6ce0`
- Método: `GET`

Respuesta:

```json
{
  "_id": "66a788ecb92ca807179b6ce0",
  "name": "Huang",
  "address": "Calle Hola",
  "phone": 6155515664,
  "foodStyle": "chino",
  "__v": 0,
  "createdAt": "2024-07",
  "updatedAt": "2024-07"
}
```

### Obtener restaurantes por nombre

- Ruta: `/api/v1/restaurants/:name`
  - Ejemplo: `/api/v1/restaurants/Huang`
- Método: `GET`

Respuesta:

```json
{
  "_id": "66a788ecb92ca807179b6ce0",
  "name": "Huang",
  "address": "Calle Hola",
  "phone": 6155515664,
  "foodStyle": "chino",
  "__v": 0,
  "createdAt": "2024-07",
  "updatedAt": "2024-07"
}
```

### Obtener restaurantes por dirección

- Ruta: `/api/v1/restaurants/:address`
  - Ejemplo: `/api/v1/restaurants/Calle Hola`
- Método: `GET`

Respuesta:

```json
{
  "_id": "66a788ecb92ca807179b6ce0",
  "name": "Huang",
  "address": "Calle Hola",
  "phone": 6155515664,
  "foodStyle": "chino",
  "__v": 0,
  "createdAt": "2024-07",
  "updatedAt": "2024-07"
}
```

### Obtener restaurantes por estilo de comida

- Ruta: `/api/v1/restaurants/:foodStyle`
  - Ejemplo: `/api/v1/restaurants/chino`
- Método: `GET`

Respuesta:

```json
{
  "_id": "66a788ecb92ca807179b6ce0",
  "name": "Huang",
  "address": "Calle Hola",
  "phone": 6155515664,
  "foodStyle": "chino",
  "__v": 0,
  "createdAt": "2024-07",
  "updatedAt": "2024-07"
}
```

### Actualizar restaurante (Solo admin)

- Ruta: `/api/v1/restaurants/:id`
  - Ejemplo: `/api/v1/restaurants/66a788ecb92ca807179b6ce0`
- Método: `PUT`

Auth:<br>
TOKEN: "your_token"

### Borrar restaurante (Solo admin)

- Ruta: `/api/v1/restaurants/:id`
  - Ejemplo: `/api/v1/restaurants/66a788ecb92ca807179b6ce0`
- Método: `DELETE`

Auth:<br>
TOKEN: "your_token"

## Reservas

### Crear reserva (cliente y admin)

- Ruta: `/api/v1/reservations/`
- Método: `POST`

Body:

```json
{
  restaurantId: String,
  date: String,
  time: String,
  numberOfPeople: Number
}
```

Auth:<br>
TOKEN: "your_token"

### Obtener reservas (admin)

- Ruta: `/api/v1/reservations/`
- Método: `GET`

Auth:<br>
TOKEN: "your_token"

Respuesta:

```json
[
  {
    "_id": "66af48792a59fd3502a305e8",
    "userId": {
      "_id": "66a788ecb92ca807179b6ce5",
      "username": "Juan",
      "email": "juan@email.com"
    },
    "restaurantId": {
      "_id": "66a787c7fb6298113d1d86c1",
      "name": "Restaurante Chino Dragon",
      "address": "Calle Falsa 123, Ciudad, País"
    },
    "date": "06/01/2000",
    "time": "14:00",
    "numberOfPeople": 4,
    "createdAt": "2024-08-04T09:23:05.767Z",
    "updatedAt": "2024-08-04T09:23:05.767Z",
    "__v": 0
  }
]
```

### Obtener reserva de cliente

- Ruta: `/api/v1/reservations/:userId`
  - Ejemplo: `/api/v1/reservations/66a788ecb92ca807179b6ce5`
- Método: `GET`

Auth:<br>
TOKEN: "your_token"

Respuesta:

```json
[
  {
    "_id": "66af48792a59fd3502a305e8",
    "userId": {
      "_id": "66a788ecb92ca807179b6ce5",
      "username": "Juan",
      "email": "juan@email.com"
    },
    "restaurantId": {
      "_id": "66a787c7fb6298113d1d86c1",
      "name": "Restaurante Chino Dragon",
      "address": "Calle Falsa 123, Ciudad, País"
    },
    "date": "06/01/2000",
    "time": "14:00",
    "numberOfPeople": 4,
    "createdAt": "2024-08-04T09:23:05.767Z",
    "updatedAt": "2024-08-04T09:23:05.767Z",
    "__v": 0
  }
]
```

### Obtener reserva por id de ésta

- Ruta: `/api/v1/reservations/:id`
  - Ejemplo: `/api/v1/reservations/66af48792a59fd3502a305e8`
- Método: `GET`

Auth:<br>
TOKEN: "your_token"

Respuesta:

```json
{
  "_id": "66af48792a59fd3502a305e8",
  "userId": {
    "_id": "66a788ecb92ca807179b6ce5",
    "username": "Juan",
    "email": "juan@email.com"
  },
  "restaurantId": {
    "_id": "66a787c7fb6298113d1d86c1",
    "name": "Restaurante Chino Dragon",
    "address": "Calle Falsa 123, Ciudad, País"
  },
  "date": "06/01/2000",
  "time": "14:00",
  "numberOfPeople": 4,
  "createdAt": "2024-08-04T09:23:05.767Z",
  "updatedAt": "2024-08-04T09:23:05.767Z",
  "__v": 0
}
```

### Actualizar reserva

- Ruta: `/api/v1/reservations/:id`
  - Ejemplo: `/api/v1/reservations/66af48792a59fd3502a305e8`
- Método: `PUT`

Auth:<br>
TOKEN: "your_token"

Body:

```json
{
  "date": "06/01/2000",
  "time": "15:00",
  "numberOfPeople": 6
}
```
### Eliminar reserva (cliente y admin)

- Ruta: `/api/v1/reservations/:id`
  - Ejemplo: `/api/v1/reservations/66af48792a59fd3502a305e8`
- Método: `DELETE`

Auth:<br>
TOKEN: "your_token"

### Eliminar todas las reservas (admin)

- Ruta: `/api/v1/reservations/`
  - Ejemplo: `/api/v1/reservations/`
- Método: `DELETE`

Auth:<br>
TOKEN: "your_token"