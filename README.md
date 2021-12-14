# Reddit Opdracht

Je gaat een kleine applicatie bouwen die de populairste 15 posts op Reddit ophaalt via hun
API en deze op een webpagina laat zien. De gebruiker kan op de subreddit-titel klikken om
hier meer informatie over te bekijken, of op de post zelf (om doorgelinkt te worden naar de
post op Reddit.com). Je maakt gebruikt van dynamic routing voor de subreddit-detailpagina, communiceert het laden van de posts met de gebruiker en bedenkt jouw eigen
styling en/of layout voor dit project.

#Informatie op de homepagina

##### Hottest 15 posts on Reddit

###### Men of reddit, what have you done in 2021 and it made you freaking proud of yourself?
r/AskMen | 8.003 comments - 10.033 ups

###### Getting vaccinated today?
r/TooAfraidToAsk | 14.003 comments - 10.033 ups

[... + nog 13 andere posts hier]

#Informatie op de subreddit specificatie pagina

r/TooAfraidToAsk
###### Subreddit specifications
[banner-afbeelding-van-subreddit]
###### Title
##### Everything & Anything You Were Too Afraid To Ask
###### Description
##### there is a holup inside all of us
###### Number of subscribers
##### 1.401.136
<[svg] Back to overview

# Randvoorwaarden
Jouw applicatie voldoet aan de volgende voorwaarden:
1. Je zet het project zelf op, from scratch.
- git initialiseer je zelf. 
- main branch direct naar GitHub pushen
- een nieuwe branch aanmaken en dan daarop verder werken
2. De applicatie bevat slechts twee pagina's: 
   - één home-pagina en
   - één herbruikbaar subredditspecificatie-pagina
   - Hier gebruik je dynamic routing en dynamic params voor
3. Om de top 15 hottest posts op te halen, gebruik je het volgende endpoint: 
   - GET https://www.reddit.com/hot.json?limit=15
     Om de informatie over de subreddit r/tumblr op te halen, gebruik je:
   - GET https://www.reddit.com/r/tumblr/about.json . 
4. Door op de naam van de subreddit te klikken, wordt de gebruiker doorgelinkt naar de
subreddit-specificatie-pagina;
5. Door op de titel van de post te klikken, wordt de gebruiker doorgelinkt naar de echte
post op Reddit.com;
6. Zorg dat je (kleine!) componenten maakt van elementen die vaak terugkomen in jouw
applicatie. Als je componenten maken nog lastig vindt, doe je dit pas aan het einde.
7. Iedere pagina en ieder component krijgen hun eigen CSS bestand:

src
└── components
| └── button
| ├── Button.js
| └── Button.css
| └── header
| ├── Header.js
| └── Header.css
└── pages
└── homepage
├── Home.js
└── Home.css

8. Alle aantallen (ups, comments, subscribers) geef je weer in een punt-notatie:
   10000 wordt 10.000
   8005 wordt 8.005
   1456734 wordt 14.567.34
   450 wordt 450

9. Tijdens het ophalen van de data laat je de gebruiker duidelijk zien dat dat er
   informatie geladen wordt.
    
10. Als er iets mis gaat bij het ophalen van de data, geef je een foutmelding weer op de pagina;

11. Op de subreddit-specificatie pagina gebruik je het bijgevoegde SVG-icoon voor de <
Back to overview -link
    
12. In het tabblad wordt een eigen icoontje en titel weergegeven (bijvoorbeeld het logo
    van Reddit)
13. Bedenk je eigen styling en layout voor deze opdracht
14. Schrijf een duidelijke README.md , waarin je in jouw eigen woorden beschrijft:
    Wat dit project doet
    Welke technieken je hebt gebruikt
    Hoe een developer zonder verstand van frontend, dit project zelfstandig kan
    installeren en starten;

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
"# Reddit" 
