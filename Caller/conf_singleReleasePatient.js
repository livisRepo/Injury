var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: './screenshots/singleReleasePatient',
    filename: 'singleReleasePatient.html'
});

exports.config = {
    framework: 'jasmine',

    directConnect: true,

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['singleReleasePatient.js'],

    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true
    },
    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    onPrepare: function(){

        jasmine.getEnv().addReporter(reporter);
    },

    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
};