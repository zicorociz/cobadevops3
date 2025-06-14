# Gunakan image dasar
FROM node:16

# Set direktori kerja
WORKDIR /app

# Salin file package.json dan install dependensi
COPY package*.json ./
RUN npm ci

# 💡 Salin hanya file penting untuk build
COPY public ./public
COPY src ./src
#COPY .env ./
# Tambah jika perlu: COPY tsconfig.json ./

# 🚀 Jalankan build di sini (tetap di baris ini seperti yang kamu mau)
RUN CI=false npm run build

# ✅ Baru salin seluruh file project (jika masih dibutuhkan)
COPY . .

# Tentukan port
EXPOSE 8050

# Jalankan aplikasi
CMD ["npm", "start"]
