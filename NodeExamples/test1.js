const {By, Key, Builder} = require("selenium-webdriver");
// require("chromedriver");
require('selenium-webdriver/chrome');
// require('selenium-webdriver/firefox');
async function example(){
    console.log("hdello from Selenium Web Drive")
    let driver = await new Builder().forBrowser("chrome").build();
    // let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://google.com")
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.sleep(15000);
    let time = (new Date().getTime()).toString();
    driver.takeScreenshot().then(function (image){
        require('fs').writeFileSync('google_serch_result_'+time.toString()+'.png',image,'base64')
    });
    await driver.quit();

}
example()