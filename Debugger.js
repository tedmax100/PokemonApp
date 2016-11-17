var winston = require('winston');
var fs = require('fs');
var path = require('path');

var logger = (function () {
    'use strics'
    var instance;
    function init() {    
        var templogger;
        templogger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({ colorize: true , level: 'silly' }),
                new (require("winston-daily-rotate-file"))({
                    name: 'info-file',
                    filename: 'PaPP.log',
                    datePattern: '.yyyy-MM-dd',
                    maxsize: 5242880,
                    maxFiles:7,
                    json: true,
                    level: 'info'
                }),
                new (require("winston-daily-rotate-file"))({
                    name: 'error-file',
                    filename: 'PaPP_error.log',
                    datePattern: '.yyyy-MM-dd',
                    maxsize: 5242880,
                    maxFiles:7,
                    json: true,
                    level: 'error'
                })
            ]
        });
        return templogger;
    };

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

module.exports = {
    getLogger: function () {
        'use strics'
        var loggerobj = logger.getInstance();

        return loggerobj;
    }
};