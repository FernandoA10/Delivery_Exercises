module.exports = {
  '@tags': ['uno'],
  'test pages validation' : function(browser) {
    const unosquare = browser.page.mainpage();

    unosquare
    .navigate()
    .waitForElementVisible('@contactusMenu')
    .click('@contactusMenu')
    .setValue('@contacName' , 'FERNANDO')
    .saveScreenshot('tests_output/contactNameLogged.png')

    .click('@industriesMenu')
    .assert.containsText('@textIndicator', 'industries')
    .assert.cssProperty("li a[href = '/Industries']", 'display', 'block')
    .assert.not.cssProperty("li a[href = '/']", 'display', 'block')



    .click('@selectArticle')
    .assert.attributeContains("li a[href = '/Industries']", 'class', 'nav')
    .assert.urlEquals('https://www.unosquare.com/Articles')
    .assert.title('Digital Transformation Articles & Events | Software Development Event')
    
  
    browser.end();
  }
}