describe('First test suite', () => {
  var myUrl = 'https://dev.vdp.nng.bz'
  it('Verify Login GUI', async () => {
    let smallPause = 2000
    let bigPause = 5000
    await browser.url(myUrl)
    await browser.pause(smallPause)
    let pageTitle = await browser.getTitle()
    let pageUrl = await browser.getUrl()

    await expect(browser).toHaveTitleContaining('POS Merchandiser')
    await expect(browser).toHaveUrlContaining('dev.vdp.nng.bz')

    let pageElement = await $('//span[@id="m-commerce"]')
    await expect(pageElement).toExist()
    await expect(pageElement).toBeDisplayed()
    await expect(pageElement).toHaveTextContaining('VĂN DUY PHƯƠNG')
  })
  it('Form & Input', async () => {
    await browser.url(myUrl)
    let usernameInput = await $('#input-email')
    let passwordInput = await $('#input-password')
    let loginButton = await $('#btn-login')
    let headerContainer = await $('h1')

    await usernameInput.setValue('admin@gmail.com')
    await passwordInput.setValue('123123')
    await loginButton.click()
    await expect(headerContainer).toBeDisplayed()
    await expect(headerContainer).toHaveTextContaining('TỔNG QUAN')
  })
  //Dropdown & Checkbox
  it('Select Dropdown & CheckBox', async () => {
    await browser.url('https://dev.vdp.nng.bz')
    // Login first
    let usernameInput = await $('#input-email')
    let passwordInput = await $('#input-password')
    let loginButton = await $('#btn-login')
    let headerContainer = await $('h1')

    await usernameInput.setValue('admin@gmail.com')
    await passwordInput.setValue('123123')
    await loginButton.click()
    await browser.pause(5000)

    /// navigate to Customer Detail
    await browser.url(
      'https://dev.vdp.nng.bz/customer-management/customer/1050'
    )
    let selectBox = await $('//div[start-with(@id="mat-select-value-")]/')
    await selectBox.selectByVisibleText('Việt Nam')
    let option = await $('//span[contains(text(),"Uruguay")]')
    await expect(option).toBeSelected()
  })

  //Window size & dynamic watiting
  it('Set Browser window size', async () => {
    await browser.setWindowSize(500, 800)
    await browser.url(myUrl)
    await browser.pause(2000)
  })
  // Device emulation
  it('Set Device emulation', async () => {
    let mobile = [375, 812]
    let tablet = [1024, 768]
    let desktop = [1650, 1050]
    //mobile
    await browser.setWindowSize(mobile[0], mobile[1])
    await browser.url(myUrl)
    await browser.pause(2000)
    //tablet
    await browser.setWindowSize(tablet[0], tablet[1])
    await browser.url(myUrl)
    await browser.pause(2000)
    //desktop
    await browser.setWindowSize(desktop[0], desktop[1])
    await browser.url(myUrl)
    await browser.pause(2000)
  })
  //Screenshot
  it('Take a screenshot', async () => {
    await browser.url(myUrl)
    await browser.saveScreenshot('my-screenshot.png')
    // Capture element
    let title = await $('//span[@id="m-commerce"]')
    await title.saveScreenshot('title-screenshot.png')
  })
})
