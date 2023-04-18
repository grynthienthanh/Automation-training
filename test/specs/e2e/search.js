describe.skip('Search Feature:', () => {
    before(async () => {
      browser.url('https://dev-gvm.nng.bz')
      await browser.setWindowSize(1650, 1050)
    })
    it('Search for value using keyboard press', async()=>{
        await (await $('#example-search-input')).waitForDisplayed()
        await (await $('#example-search-input')).setValue('vitamin')
        await browser.keys('Enter')
        await $('//span[contains(text(),"Tìm kiếm")]').waitForDisplayed()
        const result= $('//body/tdl-root-app[1]/mat-drawer-container[1]/mat-drawer-content[1]/tdl-app-category[1]/div[1]/div[2]/div[1]/div[1]')
        await expect(result).toHaveTextContaining('Có 5 sản phẩm cho tìm kiếm "vitamin"')
    })
})