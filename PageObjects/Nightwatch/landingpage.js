var validateSearchTool = {
  searchNightwatch: function() {
    this.api.pause(3000);
    return this.waitForElementVisible('@logoShow' , 2000)
    .assert.title('API Reference | Nightwatch.js')
    .assert.urlEquals('https://nightwatchjs.org/api/')
    .assert.enabled('@editButton')
    .click('@searchButton')
    .setValue('@settingValue', 'install')
    .waitForElementVisible('@itemShow', 3000)
    .click('@itemShow')
    .assert.urlEquals('https://nightwatchjs.org/guide/getting-started/installation.html#guide-container')
  }
}

var workinWithPageObjects = {
  navPageObjects: function() {
    this.api.pause(3000);
    return this.waitForElementVisible('@logoShow' , 2000)
    .waitForElementVisible('@titleShow', 1000)
    .click('@returnHome')
    
    
  }
}



module.exports = {
    url: 'https://nightwatchjs.org/api/',
    commands : [validateSearchTool, workinWithPageObjects],
    elements: {
      logoShow : {
          selector: ".logo-home"
      },
      searchButton : {
        selector : '#docsearch'
      },
      settingValue : {
        selector : '#docsearch-input'
      },
      editButton : {
        selector : '#nightwatch-apis'
      }, 
      itemShow: {
        selector : '#docsearch-item-0'
      },
      titleShow: {
        selector : '.page-header'
      },
      returnHome : {
        selector: '.nav-item'
      }
    }
}