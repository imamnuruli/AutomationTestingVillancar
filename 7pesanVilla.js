
var webdriver = require ('selenium-webdriver');
function pesanVilla() {
    var driver = new webdriver.Builder().forBrowser('firefox').build();
    driver.get('http://localhost/villancar/').then(function()
    {
        driver.findElement(webdriver.By.linkText('Login')).click().then(function()
        {
            driver.findElement(webdriver.By.name('email')).sendKeys("inurulihsan@gmail.com").then(function()
            {
                driver.findElement(webdriver.By.name('password')).sendKeys("1234567890").then(function()
                {
                    driver.findElement(webdriver.By.className('btn btn-primary btn-user btn-block')).click().then(function()
                    {
                        driver.findElement(webdriver.By.linkText('Villa')).click().then(function()
                        {
                            driver.findElement(webdriver.By.linkText('Villa RancaupasVilla Rancaupas PangalenganPangalenganPangalengan')).click().then(function()
                            {
                                driver.findElement(webdriver.By.className('cart-btn')).click().then(function()
                                {
                                    driver.findElement(webdriver.By.name('Name')).sendKeys("cindy charella").then(function()
                                    {
                                        driver.findElement(webdriver.By.name('Email')).sendKeys("cindycharella98@gmail.com").then(function()
                                        {
                                            driver.findElement(webdriver.By.name('Phone')).sendKeys("085808285501").then(function()
                                            {
                                                driver.findElement(webdriver.By.linkText('Your Message Here...')).sendKeys("tolong sediakan kantong kresek").then(function()
                                                {
                                                    driver.findElement(webdriver.By.linkText('Submit')).click().then(function()
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
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}
pesanVilla();