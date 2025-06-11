# Gunakan image dasar
FROM node:16

# Set direktori kerja
WORKDIR /app

# Salin file package.json dan install dependensi
COPY package*.json ./
RUN npm ci

# 🔁 Salin semua source code setelah install dependencies
COPY . .

# Build aplikasi
RUN npm run build

# Tentukan port
EXPOSE 8090

# Jalankan aplikasi
CMD ["npm", "start"]
