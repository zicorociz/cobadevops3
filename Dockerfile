# Gunakan image dasar
FROM node:16

# Set direktori kerja
WORKDIR /app

# Salin file package.json dan install dependensi
COPY package*.json ./
RUN npm ci

# Salin semua file aplikasi
COPY . .

# Jalankan build setelah semua file disalin
RUN npm run build

# Tentukan port yang digunakan
EXPOSE 8090

# Jalankan aplikasi
CMD ["npm", "start"]
