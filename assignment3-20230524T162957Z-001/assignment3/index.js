const fs = require('fs');
const http = require('http');
const fileName = "index.html";
//const name="Sai Manikanta Kanta";
const content = `<><h1>Hello World</h1> <p>This is Sai Manikanta Kanta </p></>`;
fs.writeFile("index.html", content, err => {
    if (err) throw err;
    console.log("File created successfully")
});
const port = 5000;
const server = http.createServer((request, response) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            response.writeHead(404);
            response.write("File not found")
        }
        else {
            response.writeHead(200, { 'content-Type': 'text/html' });
            response.write(data);
        }
        response.end()
    })
});
server.listen(port, () => {
    console.log("Server listening at port 5000")
})
