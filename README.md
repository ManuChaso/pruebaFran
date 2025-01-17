Cat Gallery 🐱
Este proyecto es una página web interactiva que muestra imágenes de gatos obtenidas de la API pública de The Cat API. Los usuarios pueden cargar imágenes de gatos, marcarlas como favoritas y alternar entre la visualización de 10 o 20 gatos mediante botones.

Índice
Características del Proyecto
Tecnologías Utilizadas
Estructura del Proyecto
Descripción de Componentes
Instalación y Ejecución
Uso de la API
Hooks Personalizados
Estilos
Mejoras Futuras
Autor
Características del Proyecto
Carga dinámica de imágenes de gatos mediante la API de The Cat API.
Permite alternar entre cargar 10 o 20 gatos mediante dos botones.
Los usuarios pueden marcar gatos como favoritos y desmarcarlos con un clic.
Indicador de carga mientras se esperan los resultados de la API.
Gestión del estado con hooks de React.
Diseño responsivo y limpio.
Tecnologías Utilizadas
El proyecto ha sido desarrollado utilizando las siguientes tecnologías:

React.js: Biblioteca de JavaScript para construir interfaces de usuario.
Hooks de React:
useState: Para gestionar el estado de los gatos y la carga.
useEffect: Para cargar los gatos al montar el componente.
Hook personalizado useFavorites para gestionar favoritos.
CSS: Para los estilos y el diseño de la aplicación.
Fetch API: Para realizar peticiones a The Cat API.
Vite: Herramienta de desarrollo rápida para construir aplicaciones de React.
Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

proyecto11/
├── public/ # Archivos estáticos
├── src/ # Código fuente
│ ├── components/ # Componentes React
│ │ ├── CatCard/ # Componente para mostrar cada gato
│ │ └── Loader/ # Componente para el indicador de carga
│ ├── hooks/ # Hooks personalizados
│ │ └── useFavorites.js
│ ├── services/ # Servicios para peticiones a la API
│ │ └── api.js
│ ├── App.jsx # Componente principal de la aplicación
│ ├── main.jsx # Punto de entrada de la aplicación
│ └── styles/ # Estilos CSS
├── package.json # Dependencias y scripts del proyecto
└── README.md # Documentación del proyecto
Descripción de Componentes

1. Home.jsx
   Este es el componente principal que gestiona la visualización de la galería de gatos y la interacción del usuario.

Funcionalidades:
Carga imágenes de gatos al montar el componente.
Muestra dos botones para cargar 10 o 20 gatos.
Muestra un indicador de carga mientras se obtienen las imágenes.
Usa el hook useFavorites para gestionar los favoritos. 2. CatCard.jsx
Componente que representa cada carta de gato individual.

Props:
cat: Objeto que contiene la información del gato.
isFavorite: Booleano que indica si el gato está marcado como favorito.
onFavoriteClick: Función que se ejecuta cuando el usuario marca o desmarca un gato como favorito. 3. Loader.jsx
Componente que muestra un spinner o indicador de carga mientras se esperan los resultados de la API.

Instalación y Ejecución
Sigue estos pasos para clonar y ejecutar el proyecto localmente:

Clonar el repositorio:

bash
Copiar código
git clone https://github.com/FRANCISCOJESUS1980/proyecto11
cd proyecto11
Instalar las dependencias:

bash
Copiar código
npm install
Iniciar la aplicación:

bash
Copiar código
npm run dev
La aplicación se iniciará en http://localhost:3000.

Uso de la API
El proyecto utiliza The Cat API para obtener imágenes de gatos.

Endpoints utilizados:
GET /images/search?limit={limit}
Devuelve un conjunto de imágenes de gatos según el límite proporcionado.

GET /images/{id}
Devuelve los detalles de un gato específico por su ID.

GET /breeds
Devuelve una lista de todas las razas de gatos disponibles en la API.

Hooks Personalizados
useFavorites.js
Este hook personalizado gestiona la lógica de favoritos. Permite agregar y quitar gatos de la lista de favoritos.

Funciones disponibles:
isFavorite(catId): Retorna true si el gato está en favoritos, de lo contrario false.
addFavorite(catId): Añade un gato a la lista de favoritos.
removeFavorite(catId): Elimina un gato de la lista de favoritos.
Estilos
El proyecto utiliza CSS puro para los estilos. Los archivos CSS están ubicados en la carpeta src/styles/.

home.css: Contiene los estilos de la página principal.
cat-card.css: Contiene los estilos para el componente CatCard.
Mejoras Futuras
Algunas ideas para mejorar el proyecto en el futuro:

Filtrar por razas: Permitir al usuario filtrar gatos según su raza.
Paginación: Implementar paginación para cargar más gatos de manera progresiva.
Mejorar la gestión de favoritos: Guardar los favoritos en localStorage para que persistan al recargar la página.
Diseño mejorado: Añadir animaciones y mejorar la UI/UX.
Soporte offline: Implementar un modo offline utilizando Service Workers.
Autor
Desarrollado con ❤️ por Francisco Jesus.
Si tienes preguntas o sugerencias, no dudes en contactarme.
