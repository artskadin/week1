const { Server } = require('http');
const { createReadStream: cRS, writeFileSync: wFS } = require('fs');
const finalhandler = require('finalhandler');
const serve = require('serve-static')('.');

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};
const s = Server((req, res) => {
    if (req.url.startsWith('/result4')) {
        const params = req.url.substring(1 + req.url.indexOf('?'));
        res.write(params);           
    } else {
        // return finalhandler(req, res)();
        return serve(req, res, finalhandler(req, res));
    }
    res.end();
});
s.listen(4321);
