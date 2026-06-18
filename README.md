# Notes App - Spring Boot + React + MySQL

Aplikasi CRUD Catatan sederhana menggunakan Spring Boot sebagai backend, React (Vite) sebagai frontend, dan MySQL sebagai database.

## Teknologi

### Backend

* Java 17
* Spring Boot 3
* Spring Data JPA
* MySQL
* Maven

### Frontend

* React 19
* Vite
* Axios

## Fitur

* Menampilkan daftar catatan
* Menambah catatan
* Mengubah catatan
* Menghapus catatan

## Struktur Project

```text
notes/
├── notes-api/   # Spring Boot Backend
└── notes-ui/    # React Frontend
```

## Menjalankan Backend

Masuk ke folder backend:

```bash
cd notes-api
```

Konfigurasi database pada:

```properties
src/main/resources/application.properties
```

Contoh:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/notesdb
spring.datasource.username=aku
spring.datasource.password=PASSWORD_ANDA
```

Jalankan:

```bash
mvn spring-boot:run
```

Backend berjalan di:

```text
http://localhost:8081
```

## Menjalankan Frontend

Masuk ke folder frontend:

```bash
cd notes-ui
```

Install dependency:

```bash
npm install
```

Jalankan:

```bash
npm run dev
```

Frontend berjalan di:

```text
http://localhost:5173
```

## API Endpoint

| Method | Endpoint        | Keterangan          |
| ------ | --------------- | ------------------- |
| GET    | /api/notes      | Ambil semua catatan |
| POST   | /api/notes      | Tambah catatan      |
| PUT    | /api/notes/{id} | Update catatan      |
| DELETE | /api/notes/{id} | Hapus catatan       |

## Author

Yarif

