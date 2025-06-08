const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const characters = [
    { id: 1, name: "Naruto Uzumaki", age: 17, anime: "Naruto" },
    { id: 2, name: "Monkey D. Luffy", age: 19, anime: "One Piece" },
];

// GET semua karakter
app.get('/characters', (req, res) => {
    res.json({ data: characters });
});

// GET karakter berdasarkan ID
app.get('/characters/:id', (req, res) => {
    const character = characters.find(c => c.id == req.params.id);
    if (character) res.json(character);
    else res.status(404).json({ message: "Character not found" });
});

// POST karakter baru
app.post('/characters', (req, res) => {
    const newCharacter = { id: characters.length + 1, ...req.body };
    characters.push(newCharacter);
    res.status(201).json(newCharacter);
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});

