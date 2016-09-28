var checkPatient=require('../Helpers/checkPatients');
var patientsClick=require('../Helpers/clickPatients');
var urlPage=require('../Helpers/urlPage');
var login=require('../Helpers/toLoginPage');
var patient=require('../Helpers/getPatientName');
var localReport=require('../Helpers/getLocalReport.js');
var callLog=require('../Helpers/callLogs');

describe('Caller', function() {
    it('Check with Local Report Number', function () {
        urlPage.urlPage();
        login.loginPage('caller4', 'caller4');
        patientsClick.clickPatients();
        localReport.localReport().then(function(localReportNumber){
            checkPatient.checkPatient('caller',6, localReportNumber);
            element(by.xpath('//*[@id="page-wrapper"]/div/div/div[2]/div/table/tbody/tr[2]/td[1]/input')).click();
            element(by.xpath('//*[@id="page-wrapper"]/div/div/div[2]/div/table/tbody/tr[2]/td[1]/input')).isSelected().then(function (selected) {
                if(selected){
                    element(by.linkText("Add Call Log")).isDisplayed().then(function (display) {
                        if(display){
                            element(by.linkText("Add Call Log")).click();
                            browser.waitForAngular();
                        }
                    })
                }
            });
        });
        callLog.callLogs('caller');
    });
});