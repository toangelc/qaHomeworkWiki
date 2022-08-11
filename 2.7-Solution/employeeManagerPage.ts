import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
  } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build()

  export class employeePO {
      driver: WebDriver;
      url: string = 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html'
      header: By = By.css('.titleText')
      addEmployee: By = By.css('[name="addEmployee"]')
      newEmployee: By = By.css('[name="employee11"]')
      nameField: By = By.css('[name="nameEntry"]')
      phoneField: By = By.css('[name="phoneEntry"]')
      titleField: By = By.css('[name="titleEntry"]')
      saveBtn: By = By.xpath('//button[@id="saveBtn"]')
      constructor(driver: WebDriver){
          this.driver = driver
      }
      async navigate() {
          await this.driver.get(this.url)
          await this.driver.wait(until.elementLocated(this.header))
          await this.driver.wait(until.elementLocated(elementBy))
      }
test("adding Employees", async () => {

    await emPage.click(emPage.addEmployee)
    await emPage.click(emPage.newEmployee)
    await emPage.click(emPage.nameInput)
    await emPage.click
})
