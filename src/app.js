const res = require("express/lib/response");

const app = require ("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req,res) => {
    res.send("/parts/room");
});

app.get("", (req,res) => {
    res.send("/parts/create-pass");
});

app.get("", (req,res) => {
    res.send("/parts/enter-room");
});

app.get("", (req,res) => {
    res.send("/parts/no-question");
});

app.get("", (req,res) => {
    res.send("/parts/passincorrect");
});

app.listen(PORT,() =>{
    console.log(`App up at port ${PORT}`)
})