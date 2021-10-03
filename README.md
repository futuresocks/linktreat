# Linktreat

I built a command-line tool to generate a sort of "link" "tree" looking static site, leaning heavily on [this](https://www.youtube.com/watch?v=91-MV2m0YlA) tutorial. And now I use it to power [colinbell.dev](https://colinbell.dev)

## Usage

If running for the first time, or if you make any changes to the generate process:

```
> npm run build
```

This will generate a linktreat file that you can then run, by executing `npm run linktreat` with the location of a config file and your desired output directory:

```
> npm run linktreat config.json dist

Generating index.html...
index.html created at dist/index.html

Generating index.css...
index.css created at dist/index.css

```

## Configuration

```json
{
  "profilePicture": "./assets/pic.png",
  "name": "Futuresocks",
  "links": [
    { "title": "Github", "url": "https://github.com/futuresocks" },
    { "title": "Github", "url": "https://github.com/futuresocks" }
  ]
}
```
