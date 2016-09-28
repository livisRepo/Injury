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
            element(by.id(localReportNumber)).click();
            element(by.id(localReportNumber)).isSelected().then(function (selected) {
                if(selected){
                    element(by.id('addCallLog'+localReportNumber)).isDisplayed().then(function (display) {
                        if(display){
                            element(by.id('addCallLog'+localReportNumber)).click();
                            browser.waitForAngular();
                        }
                    })
                }
            });
        });
        callLog.callLogs('caller');
    });
});