var urlPage=require('../Helpers/urlPage');
var logout=require('../Helpers/toLogout');
var login=require('../Helpers/toLoginPage');
var clinicsClick=require('../Helpers/clickClinics');
var clinics=require('../Helpers/getClinics');

describe('Caller', function () {

    /*var clinicName=[];
    it('Get Clinics Name', function () {
        urlPage.urlPage();
        login.loginPage('caller4', 'caller4');
        clinicsClick.clickClinics();
        clinics.getClinics().then(function (clinicList) {
            var randCinic = Math.floor(Math.random() * clinicList.length);
            clinicName.push(clinicList[randCinic]);
        })
    });*/

    it('View Clinics', function () {
        urlPage.urlPage();
        login.loginPage('caller4', 'caller4');
        clinicsClick.clickClinics();
        clinics.getClinics().then(function (clinicList) {
            var randCinic = Math.floor(Math.random() * clinicList.length);
            //clinicName.push(clinicList[randCinic]);
            element(by.model('search.clinicName')).clear();
            element(by.model('search.clinicName')).sendKeys(clinicList[randCinic]);
            browser.waitForAngular();
            element(by.xpath("//*[@id='page-wrapper']/div/div[2]/div/table/tbody/tr[1]/td[1]")).getText().then(function (serviceArea) {
                element(by.xpath("//*[@id='page-wrapper']/div/div[2]/div/table/tbody/tr[1]/td[2]")).getText().then(function (clinicName) {
                    element(by.xpath("//*[@id='page-wrapper']/div/div[2]/div/table/tbody/tr[1]/td[3]")).getText().then(function (address) {
                        element(by.xpath("//*[@id='page-wrapper']/div/div[2]/div/table/tbody/tr[1]/td[4]")).getText().then(function (city) {
                            element(by.xpath("//*[@id='page-wrapper']/div/div[2]/div/table/tbody/tr[1]/td[5]/a[1]")).click();
                            browser.waitForAngular();
                            expect(element(by.xpath("//*[@id='viewClinicDetails']/div/div/div[2]/table/tbody/tr[1]/td[2]")).getText()).toEqual(clinicName);
                            expect(element(by.xpath("//*[@id='viewClinicDetails']/div/div/div[2]/table/tbody/tr[2]/td[2]")).getText()).toEqual(address);
                            expect(element(by.xpath("//*[@id='viewClinicDetails']/div/div/div[2]/table/tbody/tr[3]/td[2]")).getText()).toEqual(city);
                            expect(element(by.xpath("//*[@id='viewClinicDetails']/div/div/div[2]/table/tbody/tr[5]/td[5]")).getText()).toEqual(serviceArea);
                        })
                    })
                })
            });

            element(by.xpath("//*[@id='viewClinicDetails']/div/div/div[3]/button")).click();
            browser.waitForAngular();
        })

    });

    /*it('Disable or Enable Clinics', function(){
        urlPage.urlPage();
        login.loginPage('caller4', 'caller4');
        clinicsClick.clickClinics();
        clinics.getClinics().then(function (clinicList) {
            var randClinic = Math.floor(Math.random() * clinicList.length);
            logout.logout();
            login.loginPage('calleradmin', 'calleradmin');
            browser.waitForAngular();
            clinicsClick.clickClinics();
            element(by.model('search.clinicName')).clear();
            element(by.model('search.clinicName')).sendKeys(clinicList[randClinic]);
            browser.waitForAngular();
            element(by.xpath("//!*[@id='page-wrapper']/div/div[2]/div/table/tbody/tr[1]/td[5]/a[4]")).isDisplayed().then(function (isDisable) {
                logout.logout();
                login.loginPage('caller4', 'caller4');
                browser.waitForAngular();
                clinicsClick.clickClinics();
                element(by.model('search.clinicName')).clear();
                element(by.model('search.clinicName')).sendKeys(clinicList[randClinic]);
                browser.waitForAngular();
                if(isDisable){
                    expect(element(by.xpath("//!*[@id='page-wrapper']/div/div[2]/div/table/tbody/tr[1]/td[5]/span[2]")).getText()).toEqual('Disabled');
                }
                else{
                    expect(element(by.xpath("//!*[@id='page-wrapper']/div/div[2]/div/table/tbody/tr[1]/td[5]/span[1]")).getText()).toEqual('Enabled');
                }
            })
        });
    });*/
});