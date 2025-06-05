# Tahap Build
FROM node:16 AS builder
WORKDIR /app
# Menyalin semua file ke dalam container agar folder public dan src tersedia
COPY . .
# Menginstal dependensi berdasarkan file package-lock.json
RUN npm ci
# Menjalankan proses build aplikasi React
RUN npm run build

# Tahap Produksi
FROM node:16
WORKDIR /app
# Menginstal 'serve' secara global untuk menjalankan aplikasi
RUN npm install -g serve
# Menyalin folder hasil build dari tahap builder ke tahap produksi
COPY --from=builder /app/build ./build
# Menetapkan environment variable untuk port
ENV PORT=8090
# Membuka port yang digunakan aplikasi
EXPOSE $PORT
# Menjalankan aplikasi menggunakan 'serve' pada port yang telah ditentukan
CMD ["sh", "-c", "serve -s build -l $PORT"]
