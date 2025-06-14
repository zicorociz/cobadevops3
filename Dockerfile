# Gunakan image dasar
FROM node:20

# Set direktori kerja
WORKDIR /app

# Salin file package.json dan install dependensi
COPY package*.json ./
RUN npm ci

# ✅ Tambahkan salin file penting untuk build (tanpa COPY . .)
COPY public ./public
COPY src ./src
COPY .env ./

# Sekarang file sudah ada saat build
RUN npm run build

# Salin sisanya jika perlu (opsional)
COPY . .

# Tentukan port
EXPOSE 8050

# Jalankan aplikasi
CMD ["npm", "start"]
