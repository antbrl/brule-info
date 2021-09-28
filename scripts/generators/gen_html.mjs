import { renderFile } from 'pug';
import fs from 'fs';

const inputFile = process.argv[2];
const outputFile = process.argv[3];

async function genHtml() {
  return new Promise((resolve) => {
    console.log(`Generating HTML (in=${inputFile}, out=${outputFile})...`);
    fs.writeFile(
      outputFile,
      renderFile(fs.realpathSync(inputFile), {}),
      () => {
        console.log('Done');
        resolve();
      },
    );
  });
}

await genHtml();
