const {By, Key, Builder} = require("selenium-webdriver");
require('selenium-webdriver/chrome');
async function example(){
    console.log("hdello from Selenium Web Drive")
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://lambdatest.github.io/sample-todo-app/")
    await driver.findElement(By.name("li1")).click();
    await driver.findElement(By.name("li2")).click();
    // await driver.findElement(By.id("sampletodotext")).sendKeys('New Item');
    await driver.findElement(By.id("addbutton")).click();
 //name = "li1"   
 //name = "li2" 
//id="sampletodotext"
//id="addbutton"
    await driver.sleep(15000);
    let time = (new Date().getTime()).toString();
    driver.takeScreenshot().then(function (image){
        require('fs').writeFileSync('sample_todo_result_'+time.toString()+'.png',image,'base64')
    });
    await driver.quit();

}
example()