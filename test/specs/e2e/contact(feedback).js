describe.skip('Search Feature:', () => {
  before(async () => {
    browser.url('https://dev-gvm.nng.bz')
    await browser.setWindowSize(1650, 1050)
  })
  it('Send a contact form', async () => {
    let name = 'jerry pham'
    let phone = '0909123456'
    let email = 'grynthienthanh@gmail.com'
    let title = 'Test Question'
    let content = 'this is a test script'
    await browser.waitAndClick('//button[@routerlink="/contact"]')
    const contact = await $('h2')
    await expect(contact).toBeExisting()
    await expect(contact).toHaveText('LIÊN HỆ')
    await $('//input[@formcontrolname="firstName"]').setValue(name)
    await $('//input[@formcontrolname="phone"]').setValue(phone)
    await $('//input[@formcontrolname="email"]').setValue(email)
    await $('//input[@formcontrolname="subject"]').setValue(title)
    await $('//input[@formcontrolname="message"]').setValue(content)
    await browser.pause(2000)
    await $('//button[@type="submit"]').click()
  })
})
