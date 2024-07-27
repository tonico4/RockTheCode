# Proyecto 6

## Supermarket API
Esta API te permite gestionar productos y supermercados.

## Tabla de contenidos
- [Uso](#uso)
- [Endpoints](#endpoints)
  - [Supermercados](#supermercados)
  - [Productos](#productos)

## Uso
Acceso a la API: `http://localhost:3000/api/v1/`

## Endpoints
### Supermercados
Crear un supermercado

```http
POST /api/v1/supermercados
```

Request body:

```json
{
  "name": "SuperMarket Name",
  "address": "123 Market St",
  "products": [
    "60d21b4667d0d8992e610c85",
    "60d21b4967d0d8992e610c86"
  ]
}
```

Response:

  - 201 Created: "Creado con éxito ✅"
  - 400 Bad Request: "Error al crear Supermercado! ❌"

<hr>

Obtener todos los supermercados

```http
GET /api/v1/supermercados
```
Response:

  - 200 OK: Devuelve una lista de supermercados.
  - 400 Bad Request: "Error al obtener Supermercados! ❌"

<hr>

Obtener supermercado por ID

```http
GET /api/v1/supermercados/:id
```

Response:

  - 200 OK: Devuelve un supermercado.
  - 404 Not Found: "Supermercado no encontrado! ❌"
  - 400 Bad Request: "Error al obtener Supermercado! ❌"

<hr>

Obtener supermercados por nombre

```http
GET /api/v1/supermercados/:name
```

Response:

  - 200 OK: Devuelve una lista de supermercados con el nombre elegido.
  - 400 Bad Request: "Error al obtener Supermercados! ❌"

<hr>

Actualizar supermercado

```http
PUT /api/v1/supermercados/:id
```

Request Body:

```json
{
  "name": "Updated Name",
  "address": "456 New Address",
  "products": ["60d21b4667d0d8992e610c85", "60d21b4967d0d8992e610c86"]
}
```

Response:

  - 200 OK: "El supermercado ha sido actualizado ✅"
  - 404 Not Found: "Supermercado no encontrado! ❌"
  - 400 Bad Request: "Error al actualizar Supermercado! ❌"

<hr>

Eliminar supermercado

```http
DELETE /api/v1/supermercados/:id
```

Response:

  - 200 OK: "Supermercado eliminado con éxito! ✅"
  - 404 Not Found: "Supermercado no encontrado! ❌"
  - 400 Bad Request: "Error al eliminar Supermercado! ❌"

### Productos
Crear producto

```http
POST /api/v1/productos
```

Request Body:

```json

{
  "name": "Product Name",
  "price": 10.99,
  "category": "Droguería"
}
```

Response:

  - 201 Created: "Creado con éxito ✅"
  - 400 Bad Request: "Error al crear producto! ❌"

<hr>

Obtener todos los productos

```http
GET /api/v1/productos
```

Response:

  - 200 OK: Devuelve una lista con todos los productos.
  - 400 Bad Request: "Error al obtener productos! ❌"

<hr>

Obtener producto por ID

```http
GET /api/v1/productos/:id
```

Response:

  - 200 OK: Devuelve los detalles del producto.
  - 404 Not Found: "Producto no encontrado! ❌"
  - 400 Bad Request: "Error al obtener producto! ❌"

<hr>


Obtener productos por su nombre

```http
GET /api/v1/productos/:name
```

Response:

  - 200 OK: Devuelve una lista de productos con el nombre elegido.
  - 400 Bad Request: "Error al obtener productos! ❌"

<hr>

Obtener productos por categoría

```http
GET /api/v1/productos/:category
```

Response:

  - 200 OK: Devuelve una lista de productos con la categoría elegida.
  - 400 Bad Request: "Error al obtener productos! ❌"

<hr>

Actualizar un producto

```http
PUT /api/v1/productos/:id
```

Request Body:

```json
{
  "name": "Updated Product Name",
  "price": 15.99,
  "category": "Charcutería"
}
```

Response:

  - 200 OK: "El producto ha sido actualizado ✅"
  - 404 Not Found: "Producto no encontrado! ❌"
  - 400 Bad Request: "Error al actualizar producto! ❌"

<hr>

Eliminar un producto

```http
DELETE /api/v1/productos/:id
```

Response:

  - 200 OK: "Producto eliminado con éxito! ✅"
  - 404 Not Found: "Producto no encontrado! ❌"
  - 400 Bad Request: "Error al eliminar producto! ❌"

## Autor
Antonio García - @tonicodev