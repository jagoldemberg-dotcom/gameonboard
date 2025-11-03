# GameOnBoard Juegos

Sitio estático (HTML + CSS) para catálogo de Game On Board PYME de juegos de mesa.

## Requisitos del cliente cubiertos

- Página principal con **nombre de la PYME**, listado de **4 categorías**, imagen y enlace por categoría.
- Cada categoría tiene **hasta 3 juegos** con: **imagen**, **nombre**, **descripción**, **precio** y **indicador de descuento**.
- **Navegación** entre páginas (enlaces en header y botones de volver).
- **CSS avanzado**: variables, **4+ animaciones** (`shimmer`, `pulse`, `fadeIn`, `floaty`, `tilt`) y **media queries** para responsividad.  
- Todo el código está listo para subir a Git y compartir.

## Cómo ejecutar
No requiere instalación: abre `index.html` en tu navegador.

## Semana 2 — Registro + Bootstrap + Validaciones

Esta versión incorpora:

- **Bootstrap 5** (CDN) para responsividad.
- Nueva página **`registro.html`** con formulario: nombre completo, usuario, correo, contraseña + repetir, fecha de nacimiento y dirección (opcional).
- **Validaciones en `js/validaciones.js`**: campos obligatorios (excepto dirección), formato de email, contraseñas iguales, contraseña con una mayúscula y un número, largo 6–18, edad mínima 13 años.
- **Manipulación del DOM**: vista previa dinámica del usuario, estados visuales `is-valid` / `is-invalid`, limpieza de feedback al reset.

### Ejecutar localmente
Solo abre `index.html` o `registro.html` con un servidor estático (o doble clic).

### Navegación
Se agregó un enlace **Registro** al menú principal.
