module.exports = {
    'test pages' : function(browser) {
      var nightwatch = browser.page.landingpage();
  
      nightwatch
      .navigate()
      .searchNightwatch()
      .navPageObjects()



      
  
      browser.end();
    }
}