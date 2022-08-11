import {Builder, By, Capabilities, WebDriver, until} from 'selenium-webdriver';
const chromedriver = require('chromedriver')
const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

test('promise chaining', () => {
    return driver.get('https://www.google.com')
.then() => {
return driver.wait(until.elementLocated(By.name('q')))}
.then(( ) => {
    return driver.findElements(By.name('q')).sendKeys("Puppies\n")
})
.then(()
)
})   