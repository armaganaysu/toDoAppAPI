const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const connectDatabase = require('./config/database');
const todoRoutes = require('./routes/todos');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectDatabase();

app.get('/', (req, res) => {
  res.json({
    message: 'Todo API\'ye hoş geldiniz!',
    version: '1.0.0',
    endpoints: {
      'GET /api/todos': 'Tüm todo\'ları listele',
      'GET /api/todos/:id': 'Belirli bir todo\'yu getir',
      'POST /api/todos': 'Yeni todo oluştur',
      'PUT /api/todos/:id': 'Todo\'yu güncelle',
      'DELETE /api/todos/:id': 'Todo\'yu sil'
    }
  });
});

app.use('/api/todos', todoRoutes);

app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint bulunamadı'
  });
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).json({
    success: false,
    message: 'Sunucu hatası',
    error: process.env.NODE_ENV === 'development' ? error.message : 'İç sunucu hatası'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
  console.log(`API Documentation: http://localhost:${PORT}`);
});