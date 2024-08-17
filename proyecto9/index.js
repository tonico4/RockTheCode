const puppeteer = require("puppeteer");
const fs = require("fs");

const scrapper = async (url) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.setViewport({ width: 1080, height: 1024 });
  await page.goto(url);

  // Cookies
  const cookiesButtons = await page.$$(".ui-button");
  const rejectCookies = cookiesButtons[1];
  await rejectCookies.click();

  // Search
  await page.type("input[type='text']", "03410");
  await page.keyboard.press("Enter");
  await page.waitForNavigation({waitUntil: "networkidle2"});

  await page.type("#search", "café");

  // Scrap products
  await page.waitForSelector(".product-cell");
  const productsScrapped = await page.$$(".product-cell.product-cell--actionable");

  let products = []; 

  for (const product of productsScrapped) {
    let image = await product.$eval(".product-cell img", el => el.src);

    let title = await product.$eval("h4", el => el.textContent);

    let price = await product.$eval(".product-price > p.product-price__unit-price", el => el.textContent);

    let productData = { image, title, price };

    products.push(productData);
  }

  // Guardar en JSON
  fs.writeFileSync("products.json", JSON.stringify(products));

  await browser.close();
};

scrapper("https://www.mercadona.es/");
