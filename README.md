# Todo API

Node.js, Express ve MongoDB kullanılarak geliştirilmiş RESTful Todo API'si.

## Özellikler

- ✅ Todo oluşturma (CREATE)
- ✅ Todo'ları listeleme (READ)
- ✅ Todo güncelleme (UPDATE)
- ✅ Todo silme (DELETE)
- ✅ MongoDB entegrasyonu
- ✅ Hata yönetimi
- ✅ CORS desteği
- ✅ Nodemon ile otomatik restart

## Gereksinimler

- Node.js (v14 veya üzeri)
- MongoDB (yerel kurulum veya MongoDB Atlas)
- npm

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Environment variables'ları ayarlayın:
```bash
# .env dosyası oluşturun
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/todoapi
```

3. MongoDB'nin çalıştığından emin olun

4. Sunucuyu başlatın:
```bash
# Development mode (nodemon ile otomatik restart)
npm start

# Alternatif development mode
npm run dev

# Production mode (nodemon olmadan)
npm run prod
```

## API Endpoints

### Base URL: `http://localhost:3000`

| Method | Endpoint | Açıklama |
|--------|----------|----------|
| GET | `/api/todos` | Tüm todo'ları listele |
| GET | `/api/todos/:id` | Belirli bir todo'yu getir |
| POST | `/api/todos` | Yeni todo oluştur |
| PUT | `/api/todos/:id` | Todo'yu güncelle |
| DELETE | `/api/todos/:id` | Todo'yu sil |

## Kullanım Örnekleri

### 1. Yeni Todo Oluşturma
```bash
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Alışveriş yap",
    "description": "Pazardan sebze meyve al"
  }'
```

### 2. Tüm Todo'ları Listeleme
```bash
curl http://localhost:3000/api/todos
```

### 3. Todo Güncelleme
```bash
curl -X PUT http://localhost:3000/api/todos/TODO_ID \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Alışveriş yapıldı",
    "completed": true
  }'
```

### 4. Todo Silme
```bash
curl -X DELETE http://localhost:3000/api/todos/TODO_ID
```

## Veri Modeli

### Todo Schema
```javascript
{
  title: String (zorunlu),
  description: String,
  completed: Boolean (varsayılan: false),
  createdAt: Date,
  updatedAt: Date
}
```

## Response Format

### Başarılı Response
```json
{
  "success": true,
  "message": "İşlem başarılı",
  "data": {...}
}
```

### Hata Response
```json
{
  "success": false,
  "message": "Hata mesajı",
  "error": "Detaylı hata bilgisi"
}
```

## Geliştirme

```bash
# Development mode (otomatik restart)
npm run dev

# Production mode
npm start
```

## Lisans

ISC 