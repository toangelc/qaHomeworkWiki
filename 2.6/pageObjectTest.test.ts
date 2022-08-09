import {googlePage} from './pageObjectPractice'

import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement
} from "selenium-webdriver";

const chromedriver = require('chronedriver');
const driver: WebDriver = new Builder ()
.withCapabilities.chrome())
.build()

const google - new googlePage(driver, "https://google.com")

test("do a search", async () => {
    await google.nagivate()
    await google.search('star with legos')
    await google.getResults()
    await driver.quit()
})