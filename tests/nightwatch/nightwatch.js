module.exports = {
    '@tags': ['night'],
    'test pages' : function(browser) {
      var nightwatch = browser.page.landingpage();
  
      nightwatch
      .navigate()
      .assert.title('API Reference | Nightwatch.js')
      .assert.urlEquals('https://nightwatchjs.org/api/')
      .assert.visible('@logoShow')
      .assert.enabled('@editButton')
      .click('@searchButton')
      .setValue('@settingValue', 'install')
  


      .saveScreenshot('tests_output/contactNameLogged.png')

      
  
      browser.end();
    }
}