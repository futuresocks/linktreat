type Config = {
    profilePicture: string,
    name: string,
    description: string,
    sections: {
        heading: string,
        links: {
            title: string,
            url: string}[]
        }[]
    }

type FileData = {
    name: string,
    content: string
}

export const generateLinktreat = (config: Config): FileData[] => {
    return [{
        name: 'index.html',
        content: `
<html>
  <head>
    <title>${config.name}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <div class="background">
      <div class="container">
        <img class="profile-picture" src="${config.profilePicture}"/>
        <div class="name">${config.name}</div>
        <span class="description">${config.description}</span>
        ${config.sections.map((section) => {
            return [
            `<div class="section">
              <p class="section-heading">${section.heading}</p>`,
            `${section.links.map(({title, url}) => `<a class="link" href=${url}>${title}</a>`).join('\n')}`,
            `</div>`].join('\n')}).join('\n')
        }
      </div>
    </div>
  </body>
</html>
`
}, 
{
    name: 'index.css', 
    content: `
@import url('https://fonts.googleapis.com/css2?family=Contrail+One&family=Open+Sans&display=swap');

body {
  margin: 0;
}
          
html {
  color: white;
  font-size: 21px;
  font-family: 'Contrail One', cursive;
}

html, body {
    overscroll-behavior: none;
}
          
.background {
  background: linear-gradient(0deg, rgb(255, 184, 198), rgb(104, 79, 246));
  margin: 0;
  min-width: 100vw;
  min-height: 100vh;
}
          
.container {
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 32rem;
  margin: 0 auto;
  padding: 2rem;
}

.description {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
}
          
.link {
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.8rem;
  text-decoration: none;
  display: block;
  text-align: center;
  border: 2px solid white;
  border-radius: 2rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  transition: box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
  color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
  border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
  transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
  background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
}

@media screen and (min-width: 480px) {
    .link {
      font-size: 1rem;
    }
  }
          
.link:hover {
  background-color: white;
  color: rgb(105, 79, 246);
}
          
.name {
  text-transform: uppercase;
  font-size: 2.5rem;
}
          
.profile-picture {
  border-radius: 100%;
  width: 5rem;
  margin-bottom: 1rem;
}

.section {
  width: 100%;
}

.section-heading {
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
`
}];
}