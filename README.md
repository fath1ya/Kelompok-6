# PRAKTIKUM-PPL-USK-TUGAS-3

# Anime Characters API

Anime Characters API adalah RESTful API sederhana yang memungkinkan pengguna untuk mengelola data karakter anime.

## 🚀 Fitur
- **GET /characters** - Mendapatkan semua karakter atau memfilter berdasarkan anime
- **GET /characters/:id** - Mendapatkan satu karakter berdasarkan ID
- **POST /characters** - Menambahkan karakter baru
- **PUT /characters/:id** - Memperbarui karakter berdasarkan ID
- **DELETE /characters/:id** - Menghapus karakter berdasarkan ID

## 🛠️ Instalasi dan Menjalankan Server
### 1️⃣ **Clone Repository**
```bash
git clone https://github.com/username/my-express-api.git
cd my-express-api
```

### 2️⃣ **Instal Dependensi**
```bash
npm install
```

### 3️⃣ **Menjalankan Server**
```bash
node server.js
```
Server akan berjalan di `http://localhost:3000`

## 🔥 Contoh Penggunaan API

### **GET Semua Karakter**
```http
GET http://localhost:3000/characters
```
_Response:_
```json
{
  "data": [
    { "id": 1, "name": "Naruto Uzumaki", "age": 17, "anime": "Naruto" },
    { "id": 2, "name": "Monkey D. Luffy", "age": 19, "anime": "One Piece" }
  ]
}
```

### **POST Tambah Karakter**
```http
POST http://localhost:3000/characters
Content-Type: application/json
```
_Body:_
```json
{
  "name": "Goku",
  "age": 35,
  "anime": "Dragon Ball"
}
```
_Response:_
```json
{
  "id": 3,
  "name": "Goku",
  "age": 35,
  "anime": "Dragon Ball"
}
```



