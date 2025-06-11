# Gunakan image dasar
FROM node:16

# Set direktori kerja
WORKDIR /app

# Salin file package.json dan install dependensi
COPY package*.json ./
RUN npm ci
RUN npm run build

# Salin sisa file aplikasi
COPY . .

# Tentukan port yang digunakan
EXPOSE 8090

# Jalankan aplikasi
CMD ["npm", "start"]
# Gunakan image dasar untuk produksi
# FROM node:16-alpine
# WORKDIR /app
# COPY package*.json ./