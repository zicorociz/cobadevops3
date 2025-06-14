# Gunakan image dasar
FROM node:20

# Set direktori kerja
WORKDIR /app

# Salin file package.json dan install dependensi
COPY package*.json ./
RUN npm ci
RUN npm run build

# Salin sisa file aplikasi
COPY . .



# Tentukan port yang digunakanaaa
EXPOSE 8050

# Jalankan aplikasi
CMD ["npm", "start"]