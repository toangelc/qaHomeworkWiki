import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filling in the blanks", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })

    const hdrInput: By = By.name('hdrInput')
    const mkeInput: By = By.name('mkeHeader')
    const oaiInput: By = By.name('oriHeader')
    const nameInput: By = By.name('namHeader')
    const clrBtn: By = By.id('clearBtn')
    const submitBtn: By = By.id('saveBtn')
    const errorMsg: By = By.id('validHeader')

    test("filling in the blanks for real", async () => {
        await driver.findElement(hdrInput).sendKeys("Wanted")
        await driver.findElement(mkeInput).sendKeys("A220500")
        await driver.findElement(oaiInput).sendKeys("SoJo0808")
        await driver.findElement(nameInput).sendKeys("John Smith")
        await driver.findElement(submitBtn).click()
        let errorsMsg= await driver.findElement(errorMsg).getText()
        expect(errorMsg).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
        
    })
})