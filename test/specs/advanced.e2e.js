describe('Advanced Testing', () => {
  // beforeEach(async () => {
  //   await browser.url('https://the-internet.herokuapp.com/upload')
  // })
  beforeEach(async () => {
    await loadWebsite()
  })

  it('File upload 1', async () => {
    const filePath = './title-screenshot.png'
    await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
    await browser.pause(5000)
  })
  it('File upload 2', async () => {
    const filePath = './title-screenshot.png'
    await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
    await browser.pause(5000)
  })
  it('File upload 3', async () => {
    const filePath = './title-screenshot.png'
    // const remoteFilePath = await browser.uploadFile(filePath)

    // await $('#file-upload').setValue(remoteFilePath)
    // await $('#file-submit').click()
    await browser.customFileUpload(filePath, '#file-upload', '#file-submit')
    await browser.pause(5000)
  })
  it('Display Title and Url', async () => {
    const results = await browser.getTitleAndUrl()
    console.log('TITLE =' + results.title)
    console.log('URL =' + results.url)

    await browser.waitAndClick('#file-submit')
    await browser.pause(5000)
  })
  it('Change Browser Session', async () => {
    console.log('SESSION BEFORE RELOAD' + browser.sessionId)
    await browser.reloadSession()
    // After reload session
    console.log('SESSION AFTER RELOAD' + browser.sessionId)
  })
  it('Create and switch new window', async () => {
    await browser.url('https://google.com')
    await browser.newWindow('https://tiki.vn')
    await browser.pause(3000)
    await browser.switchWindow('google.com')
    await browser.pause(3000)
  })
  it('Network Throttling', async () => {
    // await browser.throttle('Regular4G')
    // await browser.url('https://tiki.vn')

    await browser.throttle('Regular2G')
    await browser.url('https://tiki.vn')

    // await browser.throttle('offline')
    // await browser.url('https://tiki.vn')
  })
  it('Execute Java Code', async () => {
    const results = await browser.execute(
      (a, b) => {
        return a + b
      },
      6,
      14
    )
    await expect(results).toBe(20)
  })
  it.only('Execute Async Java Code', async () => {
    const results = await browser.executeAsync(
      (a, b, done) => {
        setTimeout(() => {
          done(a + b), 3000
        })
      },
      6,
      14
    )
    await expect(results).toBe(20)
  })
  async function loadWebsite() {
    await browser.url('https://the-internet.herokuapp.com/upload')
  }
})
