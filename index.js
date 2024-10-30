const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
// const express = require('http');


const server = http.createServer(  (req, res) => {

    //Default route
    if (req.url === '/'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style = "color: red">Hello World!!<h2/>')
    res.write('<p>I wonder what else we can send....<p/>')
    res.write('<p>Very soon I will be an  expert in software programming..Yipee!Im excited..<p/>')
    res.end();
}
    //New route
    else if (req.url === '/New-route'){
    res.statusCode = 202;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style = "color: blue">Hello World from my new route!!<h2/>')
    res.write('<p>I have encounter alot of challenges trying to figure my new route....<p/>')
    res.write('<p>So glad I figured it out....<p/>')
    res.write('<p>Very soon I will be an  expert in software programming..Yipee!Im excited..<p/>')
    res.end();
}
    //New route2
    else if (req.url === '/New-route2'){
    res.statusCode = 203;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1 style = "color: Purple">Hello World from my newest route2!!<h2/>')
    res.write('<p>This third route is giving everything......<p/>')
    res.write(`<p>Thank you Lord Jesus!! My code didn't break....<p/>`)
    res.write('<p>Very soon I will be an  expert in software programming..Yipee!Im excited..<p/>')
    res.end();
}
   //Handle 404 from unknown routes
   else {
    res.status(404).send('[nodemon] app crashed - waiting for file changes before starting...')
   }

});





server.listen(port, hostname, () => {
    console.log(`Server running at http:// ${hostname}: ${port}/`);
});




