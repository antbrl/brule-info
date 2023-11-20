import puppeteer from 'puppeteer';
import express from 'express';

const serverRoot = process.argv[2];
const inputUrl = process.argv[3];
const outputFile = process.argv[4];

const app = express();
app.use(express.static(serverRoot));

async function genPdf(serverUrl) {
  console.log(`Generating PDF (in=${inputUrl}, out=${outputFile})...`);
  return (async () => {
    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--font-render-hinting=none'],
    });

    const page = await browser.newPage();
    await page.goto(`${serverUrl}/${inputUrl}`);
    await page.evaluateHandle('document.fonts.ready');
    await page.pdf({
      path: outputFile,
      format: 'a4',
      printBackground: true,
    });

    await browser.close();

    console.log('Done');
  })();
}

const server = app.listen(0, async () => {
  const port = server.address().port;
  console.log(`Starting express server on port ${port}`);
  await genPdf(`http://127.0.0.1:${port}`);
  server.close();
});
