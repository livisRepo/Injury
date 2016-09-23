exports.localReport=function() {
    browser.sleep(1000);
    element.all(by.model('isCheckedAllGroupPatients')).getAttribute('id').then(function (localReport) {
        var randLRNID=Math.floor(Math.random()*localReport.length);
        console.log('randLRNID : '+randLRNID);
        browser.driver.executeScript('window.scrollTo(0,0);');
        element(by.partialLinkText('Reset')).click();
        browser.waitForAngular();
        element(by.name('localReportNumber')).sendKeys(localReport[randLRNID]);
        element(by.linkText('Search')).click();
        browser.waitForAngular();

    });
};
