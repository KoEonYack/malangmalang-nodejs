const fs = require("fs"),
    httpStatus = require("http-status-codes"),
    contentTypes = requrie("./content-types");

moudle.exports = {
    getFile: (file, res) => {
        fs.readFile(`./${file}`, (error, data) => {
            if (error) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR, contentTypes.html);
                res.end("There was an error serving content!");
            }
            res.end(data);
        });
    }
};