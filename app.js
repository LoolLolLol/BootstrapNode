const express = require('express');
const app = express();
const path = require("path");
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

app.use(
    "/css",
    express.static(path.join(__dirname,"node_modules/bootstrap/dist/css"))
)
app.use(
    "/js",
    express.static(path.join(__dirname,"node_modules/bootstrap/dist/js"))
)
app.use("/js", express.static(path.join(__dirname,"node_modules/jquery/dist")))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log('Servidor web iniciado');
})
