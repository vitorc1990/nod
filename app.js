var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.get("/primo", function(req, res) {
    res.sendFile(__dirname + "/public/primo.html");
})


app.get("/fibonacci", function(req, res) {
    res.sendFile(__dirname + "/public/fibonacci.html");
})

app.get("/somatorio", function(req, res) {
    res.sendFile(__dirname + "/public/somatorio.html");
})

app.get("/mdc", function(req, res) {
    res.sendFile(__dirname + "/public/mdc.html");
})

app.get("/ordenacao", function(req, res) {
    res.sendFile(__dirname + "/public/ordenacao.html");
})

app.get("/contagem", function(req, res) {
    res.sendFile(__dirname + "/public/contagem.html");
})

app.listen(4000, function(erro) {
    if(erro) {
        console.log("Erro ao iniciar");
    } else {
        console.log("Servidor iniciado...");
    }
});