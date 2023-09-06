const puppeteer = require('puppeteer-extra')
const pluginStealyh = require('puppeteer-extra-plugin-stealth')
const { scrollPageToBottom } = require('puppeteer-autoscroll-down')

puppeteer.use(pluginStealyh())
;(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--window-size=1920,1080'],
    defaultViewport: null,
  })
  const page = await browser.newPage()
  await page.goto(
    'https://shopee.tw/search?keyword=iphone%2014%20pro%20%E6%89%8B%E6%A9%9F%E6%AE%BC',
    {
      waitUntil: 'domcontentloaded',
    }
  )

  await page.addStyleTag({
    content: '#main{width:500px;}',
  })

  await page.waitForSelector('.shopee-search-item-result__item')
  await page.waitForSelector('img')
  await scrollPageToBottom(page, {
    size: 500,
    delay: 150,
  })

  const imgItem = await page.evaluate(() => {
    const item = document.querySelectorAll('.shopee-search-item-result__item')
    let data = []
    item.forEach((v) => {
      let img = v.querySelector('img')
      let a = v.querySelector('a')
      data.push({
        imgSrc: img.src,
        imgAlt: img.alt,
        href: a.href,
      })
    })
    return data
  })
  console.log(imgItem)
  //   await page.screenshot({
  //     path: 'screenshot.jpg',
  //     fullPage: true,
  //   })

  //   await browser.close()
})()
