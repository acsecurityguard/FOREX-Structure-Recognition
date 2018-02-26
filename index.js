import React from 'react';
import ReactDOM from 'react-dom';

// main app
import App from './containers/App';

ReactDOM.render(<App />, document.getElementById('app'))

const fetch = require('node-fetch');
const parse = require('xml-parser');
const fs = require('fs');

setInterval(() => {
   
    .then(resp => resp.text())
    .then(d => fs.appendFile('live.txt', '\n'+(parse(d).root.children[0].children[0].content+' '+parse(d).root.children[0].children[1].content+' '+parse(d).root.children[0].children[2].content+' '+parse(d).root.children[0].children[3].content+' '+parse(d).root.children[0].children[5].content),(err) => {  
        // throws an error, you could also catch it here
        if (err) throw err;
    
        // success case, the file was saved
        console.log(parse(d).root.children[0].children[5].content);
    }));

}, 60000);




//http.createServer(onRequest).listen(3000);

