# MasFast Landing Bot 🚀

Landing page y backend automatizado para el registro de prospectos de restaurantes.

## Estructura del Proyecto
- `/landing page`: Archivos HTML, CSS e imágenes del sitio web.
- `/pidata`: Backend en FastAPI para manejar el registro de leads y almacenamiento en SQLite.

## Instalación
1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   pip install -r requirements.txt
   ```

## Ejecución
1. Iniciar el servidor backend:
   ```bash
   cd pidata
   uvicorn main:app --reload
   ```
2. Abrir `landing page/masfast_landing.html` en tu navegador.

## Notas de Despliegue
Asegúrate de cambiar la URL del servidor en el archivo HTML (`handleSubmit`) para que apunte a la IP o dominio de tu servidor en producción.
