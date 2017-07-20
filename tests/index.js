// module.exports = {
//   'Demo test Google' : function (browser) {
//     browser
//       .url('https://www.google.com')
//       .waitForElementVisible('body', 1000)
//       .setValue('input[type=text]', 'nightwatch')
//       .waitForElementVisible('button[name=btnG]', 1000)
//       .click('button[name=btnG]')
//       .pause(1000)
//       .assert.containsText('#main', 'Night Watch')
//       .end();
//   }
// };

module.exports = {
  'calendr test' : function (browser) {
    browser
      .url('localhost:3000/')
      .waitForElementVisible('body', 1000)
      .click('div[data-date="1"]')
      .pause(1000)
      .assert.urlEquals('http://localhost:3000/appointment/2017-7-1')
      .pause(1000)
      .end();
  }
};
