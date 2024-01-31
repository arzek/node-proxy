// const express = require('request');
// const puppeteer = require('puppeteer');
//
// const app = express();
//
// app.use('/', async (req, res) => {
//     const url = 'https://elegant-entremet-d3497c.netlify.app/';
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto(url);
//     const content = await page.content();
//     res.send(content);
//     await browser.close();
// });
//
// app.listen(3000, () => { console.log('App is running on port 3000') });
const puppeteer = require('puppeteer');
const express = require('express')
const app = express()
const port = 3000
let browser;

app.get('/', async (req, res) => {
    try {
        const url = req.query.url;
        const page = await browser.newPage();
        await page.goto(url);
        const content = await page.content();
        res.send(content);
    } catch (e) {
        res.send({ status: 'Error' });
    }
})

app.listen(port, async () => {
    browser = await puppeteer.launch();
    console.log(`Example app listening on port ${port}`)
})