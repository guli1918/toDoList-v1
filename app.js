const { render } = require('ejs');
const express = require('express');
const app = express();
const port = 3000;

const date = require(__dirname + '/date.js');


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');


const listItems = [];
const workItems = [];


app.get('/', (req, res) => {
    const day = date.getDay();

    res.render(`list`, { kindOfDay: day, listItemss: listItems });

});


app.post('/', (req, res) => {

    const listItem = req.body.listElement;
    if (req.body.list === 'Work') {
        workItems.push(listItem);
        res.redirect('/work');
    } else {
        listItems.push(listItem);Ё
        res.redirect('/');
    }
});

app.get("/work", (req, res) => {
    res.render("list", { kindOfDay: "Work List", listItemss: workItems })
})

app.post("/work", (req, res) => {
    const item = req.body.newItem;
    workItems.push(item)
    res.redirect('/work')
})

app.get("/about", (req,res) => {
    res.render("about");
})

app.listen(port, () => {
    console.log(`Server started on port number: ${port}`);
});