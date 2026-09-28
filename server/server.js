import http  from 'http';
const server = http.createServer((req, res) => {
    if(req.url === '/' && req.method === 'GET') {
        res.end('<h1>Welcome to the Home Page</h1>');
    } else if(req.url === '/about' && req.method === 'GET') {
        res.end('<h1>Welcome to the About Page</h1>');
    } else if(req.url === '/contact' && req.method === 'GET') {
        res.end(JSON.stringify({
           message: 'Welcome to the Contact Page',
        }));
    } else if(req.url === '/users' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk) => {
            body = body + chunk;
        });
    }
});

// let operation = process.argv.slice(2);
// let num1 = Number(process.argv[3]);
// let num2 = Number(process.argv[4]);
// if(operation === 'add') {
//     console.log(num1 + num2);
// }else if(operation === 'subtract') {
//     console.log(num1 - num2);
// }
p 
const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})