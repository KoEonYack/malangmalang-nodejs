/* https://proinlab.com/archives/1811 */

var async = require('async');

async.series([
    function task1(callback) {
        callback(null, 'result1');
    },
    function task2(callback) {
        callback(null, 'result2');
    },
    function task3(callback){
        callback(null, 'result3');
    }
    ],
    function (err, results) {
        if (err) console.log(err);
        else{
            console.log(results);
        }
    }
);