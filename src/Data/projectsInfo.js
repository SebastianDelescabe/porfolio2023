import project1 from '../Data/img/project.jpg'
import project2 from '../Data/img/project2.jpg'
import project3 from '../Data/img/project3.jpg'
import project5 from '../Data/img/project5.jpg'
import project6 from '../Data/img/project6.png'
import project7 from '../Data/img/project7.jpg'
import project8 from '../Data/img/project8.jpg'



const projects = [
    {
        name: 'Henropoly Game',
        image: project2,
        descriptionES: [
            'Henropoly es un juego de 1-4 jugadores, con temática financiera, en el cual se debe arruinar financieramente a tus amigos.',
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
    {
        name: 'Tienda Fishop',
        image: project3,
        descriptionES: [
            'Tienda de motos en mercadolibre maquetado con CSS y HTML',
            'Productos personalizados en Home, consumiendo datos de la vip de cada producto',
        ],
        descriptionEN: [   
            "MercadoLibre shop designed with CSS and HTML",
            "Customized products on Home, fetching data from each product's VIP"
        ],
        stack: ['HTML', 'JavaScript', 'CSS'],
        sourceCode: '',
        livePreview: 'https://www.fishop.com.ar/',
    },
    {
        name: 'DeleFlix',
        image: project5,
        descriptionES: [
            'Desarrollo de una pagina web de peliculas con sistema de logeo, utilizando React y context para mostrar, añadir a favoritos, buscar y visualizar proximos estrenos.',
            'Se utlizó de librerias animate.css y sweetAlert para dar estilos genereales a las alertas y transiciones.',
            'La pagina consume datos de la API themoviedb'
        ],
        descriptionEN: [
            'Development of a movie web page with a logging system, using React and context to show, add to favorites, search and view upcoming releases.',
            'Used libraries animate.css and sweetAlert to give general styles to alerts and transitions.',
            'The page consumes data from themoviedb API'
        ],
        stack: ['React', 'JavaScript', 'Bootstrap', 'CSS'],
        sourceCode: 'https://github.com/SebastianDelescabe/InfoPeliculas',
        livePreview: 'https://deleflix.netlify.app/',
    },
    {
        name: 'Musica APP',
        image: project7,
        descriptionES: [
            'Musica APP es una web para buscar y guardar tus albumes favoritos!',
            'Se consume información de la API de Spotify, ya sea para el login de usario como para el manejo de la informacion',
            'Proyecto de maquetacion frontend con guardado de datos en storage del navegador'
        ],
        descriptionEN: [
            'Music APP is a website to search and save your favorite albums!',
            'Information from the Spotify API is consumed, either for the user login or for the management of information',
            'Frontend layout project with data saved in browser storage'
        ],
        stack: ['React', 'JavaScript', 'CSS'],
        sourceCode: 'https://github.com/SebastianDelescabe/Musica_APP',
        livePreview: 'https://music-app-delescabe.netlify.app/',
    },
    {
        name: 'Scout Electronica',
        image: project6,
        descriptionES: [
            'Scout Electronic es una Web donde se muestra informacion sobre la empresa, los productos que venden y un formulario de contacto',
            'Proyecto hecho de manera freelance',
            'Contacto con el cliente, teniendo templates fui creando el diseño y estructura del proyecto'
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
        name: 'Creciendo',
        image: project8,
        descriptionES: [
            'Tienda de articulos para bebé de mercadolibre maquetado con CSS y HTML',
            'Productos personalizados en Home, consumiendo datos de la vip de cada producto',
            'Sistema de colores para el search de cada producto'
        ],
        descriptionEN: [   
            "MercadoLibre shop designed with CSS and HTML",
            "Color system for the search of each product"
        ],
        stack: ['HTML', 'JavaScript', 'CSS'],
        sourceCode: '',
        livePreview: 'https://www.creciendo.com/',
    },
    {
        name: 'Moto Mercado',
        image: project1,
        descriptionES: [
            'Shop de mercadolibre maquetado con CSS y HTML',
            'Buscador de neumáticos y menu personalizados',
            'Sistema de ahora 12 consumiendo api de mercadolibre para obtener datos de los productos calificados'
        ],
        descriptionEN: [
            "MercadoLibre shop designed with CSS and HTML",
            "Custom tire search and menu",
            "Now 12 system consuming MercadoLibre API to fetch data from qualified products"
        ],
        stack: ['HTML', 'JavaScript', 'CSS'],
        sourceCode: '',
        livePreview: 'https://www.motomercado.com.ar/',
    },
]

export { projects }
