import { writeFileSync } from "fs";
import { readJSONSync } from "fs-extra";
import { resolve } from "path";
import { generateLinktreat } from "./generate";

const [configPath, outputDirectory] = process.argv.slice(2);

if(!configPath || !outputDirectory){
    console.error('Please enter a config AND output directory');
    process.exit(1);
}

for(const {name, content} of generateLinktreat(readJSONSync(configPath))){
    console.log(`Generating ${name}...`)
    writeFileSync(resolve(process.cwd(), outputDirectory, name), content);
    console.log(`${name} created at ${outputDirectory}/${name}`)
};

console.log('Your linktreat is ready!')
console.log('Try the following:')
console.log(`> cd ${outputDirectory}`)
console.log("> npx serve")