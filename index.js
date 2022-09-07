const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

const users = [
    { "id": 1, "name": "a", "email": "a@b.com", "phone": "1234" },
    { "id": 2, "name": "b", "email": "b@b.com", "phone": "1234" },
    { "id": 3, "name": "c", "email": "c@b.com", "phone": "1234" },
    { "id": 4, "name": "d", "email": "d@b.com", "phone": "1234" },
    { "id": 5, "name": "e", "email": "e@b.com", "phone": "1234" },
    { "id": 6, "name": "f", "email": "f@b.com", "phone": "1234" },
    { "id": 7, "name": "g", "email": "g@b.com", "phone": "1234" },
]


app.get('/', (req, res) => {
    res.send("hello world from laden");
});
app.get('/users', (req, res) => {
    //filter by search query
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }


    res.send(users);
});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    // const user = users[id - 1];
    const user = users.find(u => u.id == id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(["mangoes", "lichees", "apple", "orange"]);
});

app.listen(port, () => {
    console.log('listening to port', port);
})