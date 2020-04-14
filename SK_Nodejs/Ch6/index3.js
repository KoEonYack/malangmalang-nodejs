var async = require('async');

async.parallel(
    [
        function(callback) {
            callback(null, 'task1 결과');
        },
        function(callback) {
            callback(null, 'task2 결과');
        },
        function(callback) {
            callback(null, 'task3 결과');
        }
    ],
    function (err, results){
        if (err){
            console.log(err);
        }else{
            console.log('모든 task 종료, 결과:', results);
        }
    }
)