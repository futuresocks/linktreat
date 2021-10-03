

type Config = {
    profilePicture: string,
    name: string,
    links: {
        title: string,
        url: string,
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
        ${config.links.map(({title, url}) => `<a class="link" href=${url}>${title}</a>`).join('')}
      </div>
    </div>
  </body>
</html>
`
}, 
{
        name: 'index.css', 
        content: 
`body {
  margin: 0;
}
          
html {
  color: white;
  font-size: 21px;
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
          
.link {
  color: white;
  text-decoration: none;
  display: block;
  text-align: center;
  width: 100%;
  border: 2px solid white;
  margin-bottom: 1rem;
  padding: 0.5rem;
  transition: box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
  color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
  border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
  transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
  background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
}
          
.link:hover {
  background-color: white;
  color: rgb(105, 79, 246);
}
          
.name {
  margin-bottom: 2rem;
}
          
.profile-picture {
  border-radius: 100%;
  width: 5rem;
  margin-bottom: 1rem;
}`
}];
}