import * as movies from "./googleSomething.json"

import {
    WebDriver, 
    Builder,
    Capabilities,
    until,
    By


} from 'selenium-webdriver'

const chromedriver = require('chromedriver')
const driver: WebDriver = new Builder()/withCapabilities(Capabilities.chrome()).build()

movies.forEach((movies) => {
    test('searching google for ${movies}', async () => 
    await driver.get('https://google.com'))
    await driver.wait(until.elementIsDisabled
        await driver.findElement(By.name('q')))
})