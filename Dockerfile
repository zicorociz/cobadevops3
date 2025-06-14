# Gunakan image dasar
FROM node:16

# Set direktori kerja
WORKDIR /app

# Salin file package.json dan install dependensi
COPY package*.json ./
RUN npm ci
# Salin sisa file aplikasi
COPY . .

RUN npm run build
# Tentukan port yang digunakanaaa
EXPOSE 8050

# Jalankan aplikasi
CMD ["npm", "start"]