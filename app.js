var express = require("express")
var app = express()

app.set("view engine","ejs")
app.use(express.static("public"))

app.get("/",(req,res)=>{res.render("index",{pageTitle:"Ana Sayfa"})})

var port = 3000
app.listen(port,()=>{console.log("Proje "+port+" portu altında çalışıyor | http://127.0.0.1:"+port+" <- Buna Tıklayarak projene bakabilirsin. <3")})
