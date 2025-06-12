# Proyek CI/CD DevOps – E-commerce

Repositori ini dibuat untuk mengimplementasikan praktik **Continuous Integration (CI)** dan **Continuous Deployment (CD)** menggunakan GitHub Actions, Docker, SonarQube, dan deployment ke server VPS (Niagahoster). Proyek ini dilengkapi dengan monitoring uptime menggunakan Uptime Kuma.

---

## 📌 Tujuan

1. Otomatisasi build, test, dan analisis kode menggunakan CI.
2. Otomatisasi deployment ke server produksi menggunakan CD.
3. Monitoring aplikasi yang telah di-deploy.

---

## 🔁 Alur CI/CD

### 1. Continuous Integration (CI) – Branch `staging`
Setiap kali ada push ke branch `staging`, maka proses berikut akan dijalankan:

#### 🔄 Workflow CI:

1. **Install dependensi**
   ```bash
   npm install

2. **Unit Testing**
   ```bash
   npm test
   ```

3. **Analisis Kode dengan SonarQube**
   - Menggunakan token rahasia `SONAR_TOKEN`.
   - Tools ini akan melakukan analisa terhadap kualitas kode, seperti code smells, duplikasi, dan potensi bugs.

4. **Build Docker Image**
   - Image akan dibangun berdasarkan `Dockerfile`.
   - Image diberi tag `cobadevops3-staging`.

### 2.Continuous Deployment (CD) – Branch `main`
Setiap kali ada push ke branch `main`, maka proses berikut akan dijalankan:

#### 🔄 Workflow CD:

1. **Login ke DockerHub**
   - Menggunakan secret `DOCKER_USERNAME` dan `DOCKER_PASSWORD`.

2. **Build Docker Image**
   - Dari source code terbaru di branch `main`.

3. **Push Docker Image ke DockerHub**
   - Nama image: `username/cobadevops3-main`.

4. **Remote Deployment ke VPS via SSH**
   - Menggunakan sshpass untuk SSH ke server VPS Niagahoster.
   - VPS akan:
      - Menghentikan container lama (jika ada).
      - Menghapus container lama.
      - Menarik image terbaru dari DockerHub.
      - Menjalankan container baru dengan port 3000.

5. **Monitoring dengan Uptime Kuma**
   - Mengecek apakah server/proyek berhasil online pasca-deploy.

