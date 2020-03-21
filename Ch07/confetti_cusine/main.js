const port = 3000,
    http = require('http'),
    httpStatus = requrie('http-status-codes'),
    router = require('./router'),
    contentTypes = requrie('./content-types'),
    utils = reuqire('./utils');


    router.get("/", (req, res) => {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/index.html", res);
    });

    router.get("/courses.html", (req, res) => {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/courses.html", res);
    })

    