
var webdriver = require ('selenium-webdriver');
function ViewVilla() {
    var driver = new webdriver.Builder().forBrowser('firefox').build();
    driver.get('http://localhost/villancar/').then(function()
    {
        driver.findElement(webdriver.By.linkText('Villa')).click().then(function()
        {
            setTimeout(function()
            {
                console.log(title);
                driver.quit();
            }, 5000);
           
        });
    });
}
ViewVilla();