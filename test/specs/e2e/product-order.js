describe('Order:', () => {
  before(async () => {
    browser.url('https://dev-gvm.nng.bz')
    await browser.setWindowSize(1650, 1050)
    await browser.loginFirst()
  })
  after(async () => {
    await browser.logout()
  })
  it('Complete product order', async () => {
    // Add product into shopping cart
    await $(
      '[class="d-flex flex-column align-items-center justify-content-between product-item shadow-custom"]'
    ).waitForDisplayed()
    await $(
      '[class="mat-focus-indicator w-100 text-uppercase font-weight-bold shopping-btn mt-2 mat-raised-button mat-button-base"]'
    ).click()
    await browser.waitAndClick('//button[@routerlink="/cart"]')
    //Assert shopping cart
    const listItems = $('app-product-in-cart')
    await expect(listItems).toBeDisplayed()
    await browser.waitAndClick('//button[contains(.," Đặt hàng ")]')

    // Fill in info to proceed checkout
    let receiver = 'Mr.Jay'
    let phone = '0909115566'
    let street = '55/11 Lê Văn Sỹ'
    await expect(
      $('[class="bottom-line font-TUV-Montserrat text-center order-title"]')
    ).toHaveTextContaining('Thông tin nhận hàng')

    await $('//mat-select[@formcontrolname="title"]').click()
    await $('//span[contains(.,"+ Thêm địa chỉ mới")]').click()
    await $('//input[@formcontrolname="receiver"]').setValue(receiver)
    await $('//input[@formcontrolname="phone"]').setValue(phone)
    


    await browser.waitAndClick('//mat-select[@formcontrolname="province"]') //Select city
    await $('//mat-option[contains(.,"Hồ Chí Minh")]').click()

    await browser.waitAndClick('//mat-select[@formcontrolname="district"]') // Select district
    await $('//mat-option[contains(.,"Quận 3")]').click()

    await browser.waitAndClick('//mat-select[@formcontrolname="ward"]') // Select ward
    await $('//mat-option[contains(.,"Phường 4")]').click()

    await $('//input[@formcontrolname="street"]').setValue(street)
    await browser.waitAndClick('//button[@type="submit"]')


  })
})
