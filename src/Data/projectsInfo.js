import project10 from '../Data/img/project10.jpg'
import project2 from '../Data/img/project2.jpg'
import project3 from '../Data/img/project3.jpg'
import project5 from '../Data/img/project5.jpg'
import project6 from '../Data/img/project6.png'
import project7 from '../Data/img/project7.jpg'
import project8 from '../Data/img/project8.jpg'
import project4 from '../Data/img/project4.png'

const projects = [
    {
        name: 'Toyota APP',
        image: project4,
        descriptionES: [
            'Maquetación y funcionalidad similar a Toyota Argentina',
            'Filtrar y ordenar autos por precio, antigüedad y tipo de vehículo',
            'Utiliza el hook useContext para transferir datos por la aplicación'
        ],
        descriptionEN: [
            "Layout and functionality similar to Toyota Argentina",
            "Filter and sort cars by price, age, and vehicle type",
            "Use the useContext hook to transfer data throughout the application"
        ],
        stack: ['HTML', 'JavaScript', 'CSS', 'React'],
        sourceCode: 'https://github.com/SebastianDelescabe/ToyotaAPP',
        livePreview: 'https://toyota-app-delescabe.netlify.app/',
    },
    {
        name: 'Futbol APP',
        image: project3,
        descriptionES: [
            'Creado con NextJS y Redux para el manejo de estados globales.',
            'Se puede buscar por equipos y mostrar el rendimiento del mismo dentro de las distintas competiciones y torneos en los cuales participa.',
            'Consumo de una API de fútbol para generar consultas de datos de los equipos',
        ],
        descriptionEN: [
            "Personal project created with NextJS and Redux for managing global states within the application.",
            "You can search for teams and display their performance across various competitions and tournaments in which they are participating.",
            "Consumption of a football API to generate data queries for teams."

        ],
        stack: ['HTML', 'JavaScript', 'CSS','Next JS','Redux'],
        sourceCode: '',
        livePreview: 'https://futbol-app-delescabe.vercel.app/',
    },
    {
        name: 'DeleFlix',
        image: project5,
        descriptionES: [
            'Desarrollo de una página web de películas con sistema de inicio de sesión, utilizando React y Context para mostrar, añadir a favoritos, buscar y visualizar próximos estrenos.',
            'Se utilizó las librerías animate.css y sweetAlert para dar estilos generales a las alertas y transiciones.',
            'La página consume datos de la API de themoviedb.'
        ],
        descriptionEN: [
            'Development of a movie web page with a logging system, using React and context to show, add to favorites, search and view upcoming releases.',
            'Used libraries animate.css and sweetAlert to give general styles to alerts and transitions.',
            'The page consumes data from themoviedb API'
        ],
        stack: ['React', 'JavaScript', 'Bootstrap', 'CSS', 'HTML'],
        sourceCode: 'https://github.com/SebastianDelescabe/InfoPeliculas',
        livePreview: 'https://deleflix.netlify.app/',
    },
    {
        name: 'Musica APP',
        image: project7,
        descriptionES: [
            'Music APP es una web para buscar y guardar tus álbumes favoritos.',
            'Se consume información de la API de Spotify, ya sea para el inicio de sesión del usuario o para el manejo de la información.',
            'Proyecto de maquetación frontend con almacenamiento de datos en el almacenamiento del navegador.'
        ],
        descriptionEN: [
            'Music APP is a website to search and save your favorite albums!',
            'Information from the Spotify API is consumed, either for the user login or for the management of information',
            'Frontend layout project with data saved in browser storage'
        ],
        stack: ['React', 'JavaScript', 'CSS', 'HTML'],
        sourceCode: 'https://github.com/SebastianDelescabe/Musica_APP',
        livePreview: 'https://music-app-delescabe.netlify.app/',
    },
    {
        name: 'Scout Electronica',
        image: project6,
        descriptionES: [
            'Scout Electrónica es una web donde se muestra información sobre la empresa, los productos que venden y un formulario de contacto.',
            'Proyecto realizado de manera freelance.',
            'Contacto con el cliente: utilizando plantillas, fui creando el diseño y la estructura del proyecto.'
        ],
        descriptionEN: [
            'Scout Electronic is a website that shows information about the company, the products they sell and a contact form',
            'Project made in a freelance way',
            'Contact with the client, having templates I was creating the design and structure of the project'
        ],
        stack: ['React', 'JavaScript', 'CSS'],
        sourceCode: 'https://github.com/SebastianDelescabe/scout-electronica',
        livePreview: 'http://scout-e.com.ar/',
    },
    {
        name: 'Restaurant APP',
        image: project8,
        descriptionES: [
            'Landing de práctica CSS para restaurante',
            'Estilos para videos y creación de carrusel de imágenes',
            'Secciones y estilos globales con la metodología de nomenclatura BEM para CSS'
        ],
        descriptionEN: [
            'CSS practice landing page for a restaurant',
            'Styles for videos and creation of an image carousel',
            'Sections and global styles using the BEM naming methodology for CSS'
        ],
        stack: ['HTML', 'JavaScript', 'CSS', 'React', 'BEM'],
        sourceCode: 'https://github.com/SebastianDelescabe/Landing-Restaurant',
        livePreview: 'https://landing-resto-delescabe.netlify.app/',
    },
    {
        name: 'Sleep Box Argentina',
        image: project10,
        descriptionES: [
            'Shop para ventas de colchones en MercadoShops',
            'Menú maquetado con CSS y HTML y creado con JavaScript',
            'Sistema de comparación de colchones mobile y desktop, desarrollado con JavaScript a la medida del cliente'
        ],
        descriptionEN: [
            'Shop for mattress sales on MercadoShops, styled with CSS and HTML',
            'Menu designed and created with JavaScript',
            'Customized mattress comparison system for both mobile and desktop, developed with client-specific JavaScript'
        ],
        stack: ['HTML', 'JavaScript', 'CSS'],
        sourceCode: '',
        livePreview: 'https://www.sleepbox.com.ar/compara',
    },
    {
        name: 'Henropoly Game',
        image: project2,
        descriptionES: [
            'Henropoly es un juego de 1 a 4 jugadores, con temática financiera, en el cual se debe arruinar financieramente a tus amigos.',
            'Este trabajo fue realizado en conjunto con seis compañeros, bajo la metodología ágil Scrum.'
        ],
        descriptionEN: [
            'Henropoly is a game for 1-4 players, with a financial theme, in which you have to ruin your friends financially.',
            'This work was carried out together with six colleagues, under the agile Scrum methodology.'
        ],
        stack: ['React', 'JavaScript', 'CSS', 'Redux', 'Node', 'PostgreSQL', 'Express', 'Sequelize', 'Redis'],
        sourceCode: 'https://github.com/matiasgarrid0/Henropoly',
        livePreview: 'https://henropoly.vercel.app/',
    },
]

export { projects }
