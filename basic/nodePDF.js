const http = require("http");
const PDFDocument = require('pdfkit');
const fs = require('fs');

http.createServer(function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'application/pdf'});
    
    const doc = new PDFDocument();
    
    doc.pipe(res);
    
    const jsonData = {
        message: 'Welcome to this page running on Node.js server'
    };

   
    doc.text(JSON.stringify(jsonData), { align: 'center' });

    doc.end();
}).listen(1000);

