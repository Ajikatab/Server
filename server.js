// Import modul Express
const express = require('express');
const app = express();

// Fungsi untuk menghasilkan data baru secara acak
function generateData() {
  return {
    suhumax: Math.floor(Math.random() * 41),
    suhummin: Math.floor(Math.random() * 41),
    suhurata: (Math.random() * 40).toFixed(2),
    nilai_suhu_max_humid_max: [
      {
        idx: Math.floor(Math.random() * 501),
        suhu: Math.floor(Math.random() * 41),
        humid: Math.floor(Math.random() * 101),
        kecerahan: Math.floor(Math.random() * 31),
        timestamp: generateDateTime()
      },
      {
        idx: Math.floor(Math.random() * 501),
        suhu: Math.floor(Math.random() * 41),
        humid: Math.floor(Math.random() * 101),
        kecerahan: Math.floor(Math.random() * 31),
        timestamp: generateDateTime()
      }
    ],
    month_year_max: [
      {
        month_year: `${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 10) + 2010}`
      },
      {
        month_year: `${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 10) + 2010}`
      }
    ]
  };
}

// Fungsi untuk menghasilkan tanggal dan waktu secara acak
function generateDateTime() {
  const year = 2024;
  const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
  const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
  const hour = String(Math.floor(Math.random() * 24)).padStart(2, '0');
  const minute = String(Math.floor(Math.random() * 60)).padStart(2, '0');
  const second = String(Math.floor(Math.random() * 60)).padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

// Set endpoint untuk "/data"
app.get('/data', (req, res) => {
  const data = generateData();
  res.json(data);
});

// Jalankan server pada port 3000
app.listen(3000, () => {
  console.log('Server berjalan pada port 3000');
});