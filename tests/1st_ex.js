module.exports = {
    '@tags':['first'], 
    '1st Exercise' : function(browser) {

      browser
      .windowMaximize()
      .url('https://nightwatchjs.org/')
      .waitForElementVisible('#navigation')
      .assert.titleContains('Nightwatch')
      .assert.not.cssProperty("li a[href = 'https://nightwatchjs.org/guide/getting-started/']", 'font-size', '14px')
      .assert.not.attributeEquals("li a[href = 'https://nightwatchjs.org/guide/getting-started/']", 'class', "Developer Guide")
      .assert.not.urlContains('getting-started')
      
      browser.end();
    }
  };