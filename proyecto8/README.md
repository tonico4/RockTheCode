# API Videojuegos

Esta API gestiona videojuegos y plataformas de consolas.

## Plataformas

### Crear plataforma
- Método: `POST`
- Ruta: `/api/v1/platforms/`

Body:

```json
{
  "name": "String",
  "image": "String"
}
```

Multipart Form:

| variable | tipo |
|:-----|:-------|
| name | nombre_de_la_plataforma |
| image | archivo.jpg |

### Obtener todas las plataformas

- Método: `GET`
- Ruta: `/api/v1/platforms/`

Respuesta:

```json
[
  {
    "_id": "String",
    "name": "String",
    "image": "String"
  }
]
```

### Obtener plataforma por nombre

- Método: `GET`
- Ruta: `/api/v1/platforms/:name`

Respuesta:

```json
{
  "_id": "String",
  "name": "String",
  "image": "String"
}
```

### Actualizar plataforma

- Método: `PUT`
- Ruta: `/api/v1/platforms/:id`

Body:

```json
{
  "name": "String",
  "image": "String"
}
```

### Eliminar plataforma

- Método: `DELETE`
- Ruta: `/api/v1/platforms/:id`

### Eliminar todas las plataformas

- Método: `DELETE`
- Ruta: `/api/v1/platforms/`

## Videojuegos

### Crear videojuego

- Método: `POST`
- Ruta: `/api/v1/videogames/`

Body:

```json
{
  "title": "String",
  "platform": "String",
  "console": "String",
  "multiplayer": "Boolean",
  "image": "String"
}
```

Multipart Form:

| variable | tipo |
|:-----|:-------|
| title | título_del_videojuego |
| platform | nombre_de_la_plataforma |
| console | nombre_de_la_consola |
| multiplayer | true/false |
| image | archivo.jpg |

### Obtener todos los videjuegos

- Método: `GET`
- Ruta: `/api/v1/videogames/`

Respuesta:

```json
[
  {
    "_id": "String",
    "title": "String",
    "platform": "String",
    "console": "String",
    "multiplayer": "Boolean",
    "image": "String"
  }
]
```

### Obtener vidoejuego por id

- Método: `GET`
- Ruta: `/api/v1/videogames/:id`

Respuesta:

```json
{
  "_id": "String",
  "title": "String",
  "platform": "String",
  "console": "String",
  "multiplayer": "Boolean",
  "image": "String"
}
```

### Obtener vidoejuegos por plataforma

- Método: `GET`
- Ruta: `/api/v1/videogames/:platform`

Respuesta:

```json
[
  {
    "_id": "String",
    "title": "String",
    "platform": "String",
    "console": "String",
    "multiplayer": "Boolean",
    "image": "String"
  }
]
```

### Actualizar videojuego

- Método: `PUT`
- Ruta: `/api/v1/videogames/:id`

Body:

```json
{
  "title": "String",
  "platform": "String",
  "console": "String",
  "multiplayer": "Boolean",
  "image": "String"
}
```

### Eliminar videojuego

- Método: `DELETE`
- Ruta: `/api/v1/videogames/:id`

### Eliminar todos los videojuegos

- Método: `DELETE`
- Ruta: `/api/v1/videogames/`