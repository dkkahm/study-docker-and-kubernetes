import express from 'express';
import * as os from 'os';

const app = express();

const thisRandom = Math.random();

let ipList = "";
const nets = os.networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
            ipList += net.address + ",";
        }
    }
}

app.get('/', (req, res) => {
    res.send(`<h2>v3, Hi there!!!! with ${thisRandom} on ${ipList}</h2>`);
});

app.listen(3000, () => {
    console.log('Listening on 3000!!!');
})