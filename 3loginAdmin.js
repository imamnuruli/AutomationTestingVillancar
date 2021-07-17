
var webdriver = require ('selenium-webdriver');
function LoginAdmin() {
    var driver = new webdriver.Builder().forBrowser('firefox').build();
    driver.get('http://localhost/villancar/').then(function()
    {
        driver.findElement(webdriver.By.linkText('Login')).click().then(function()
        {
            driver.findElement(webdriver.By.name('email')).sendKeys("admin@gmail.com").then(function()
            {
                driver.findElement(webdriver.By.name('password')).sendKeys("123").then(function()
                {
                    driver.findElement(webdriver.By.className('btn btn-primary btn-user btn-block')).click().then(function()
                    {
                        setTimeout(function()
                        {
                            console.log(title);
                            driver.quit();
                        }, 5000);
                    });
                });
            });
        });
    });
}
LoginAdmin();