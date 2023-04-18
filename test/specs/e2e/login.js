describe.skip('Login Flow:', () => {
  before(async () => {
    browser.url('https://dev-gvm.nng.bz')
    await browser.setWindowSize(1650, 1050)
  })
  it('Should not login with invalid username and pwd', async () => {
    await browser.waitAndClick('//button[@class="btn-custom ng-star-inserted"]')
    await $('//input[@type="email"]').waitForDisplayed()
    await await $('//input[@type="email"]').setValue('grynthienthanh@gmail.com')
    await await $('//input[@type="password"]').setValue('321321')
    await $('//button[@type="submit"]').click()
    await browser.pause(2000)
    // Verify error message
    const errorMessage = $(
      '//div[contains(text(),"*Email hoặc mật khẩu không khớp")]'
    )
    await expect(errorMessage).toHaveTextContaining(
      '*Email hoặc mật khẩu không khớp'
    )
  })
  it('Sign in successfully', async () => {
    await browser.waitAndClick('//button[@class="btn-custom ng-star-inserted"]')
    await $('//input[@type="email"]').waitForDisplayed()
    await await $('//input[@type="email"]').setValue('grynthienthanh@gmail.com')
    await await $('//input[@type="password"]').setValue('123123')
    await $('//button[@type="submit"]').click()
    await browser.pause(2000)
    // Verify login successfully
    const nameAccount = $(
      '//body/tdl-root-app[1]/mat-drawer-container[1]/mat-drawer-content[1]/tdl-app-nav-bar[1]/div[1]/div[2]/div[1]/div[4]/div[1]/button[1]'
    )
    await expect(nameAccount).toHaveTextContaining('jerry')
  })
  it.only('Forgort Password', async () => {
    await browser.waitAndClick('//button[@class="btn-custom ng-star-inserted"]')
    await $('//a[contains(text(),"Quên mật khẩu?")]').waitForDisplayed()
    await browser.waitAndClick('//a[contains(text(),"Quên mật khẩu?")]')
    await $('//input[@type="email"]').waitForDisplayed()
    await $('//input[@type="email"]').setValue('grynthienthanh@gmail.com')
    await $('//button[@type="submit"]').click()
    // Verify input valid email
    const validationMessage = $('//div[contains(text(),"Mã xác nhận được gửi qua email của bạn")]')
      await expect(validationMessage).toBeDisplayed()
  })
})
