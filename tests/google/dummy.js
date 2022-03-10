module.exports = {
    'Google' : function(browser) {

      browser
      .windowMaximize()
      .url('https://www.google.com/')
      .waitForElementVisible('body')

      browser.end();
    }
}