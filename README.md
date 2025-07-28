# 🏋️‍♂️ Dashboard Penjelasan Hasil Komprehensif Fitness Vision

## 📋 Deskripsi Project

Dashboard interaktif yang menampilkan analisis mendalam tentang biomekanika squat dan tren fitness Gen-Z. Project ini menyajikan hasil penelitian komprehensif tentang threshold feedback squat, analisis MPJPE (Mean Per Joint Position Error), dan statistik cedera gym dalam format yang mudah dipahami dan menarik secara visual.

## 🎯 Fitur Utama

### 🔬 **Analisis Biomekanika Squat**
- **Threshold Analysis**: Visualisasi batas-batas aman untuk sudut hip vertical, ankle vertical, dan knee vertical
- **Scientific Literature**: Referensi penelitian dari Bayattork et al. (2024), Yavuz & Erdag (2017), dan Wallace et al. (2002)
- **Risk Assessment**: Klasifikasi risiko tinggi, sedang, dan rendah berdasarkan literatur ilmiah

### 📊 **Data & Statistik**
- **MPJPE Analysis**: Perbandingan kondisi terang vs gelap dengan visualisasi komprehensif
- **Blackbox Testing**: Hasil pengujian sistem dengan berbagai skenario
- **Injury Statistics**: Data cedera gym berdasarkan bagian tubuh yang tersering

### 🎨 **User Experience**
- **Dark/Light Theme**: Mode tema yang dapat disesuaikan dengan preferensi pengguna
- **Interactive Charts**: Gambar dapat diperbesar dengan modal view
- **Responsive Design**: Tampilan optimal di desktop, tablet, dan mobile
- **Smooth Animations**: Transisi halus dan efek loading yang menarik

### 📱 **Social Media Integration**
- **Gen-Z Trends**: Analisis preferensi platform media sosial
- **Engagement Metrics**: Data tingkat keterlibatan berdasarkan platform
- **Content Preferences**: Preferensi konten fitness di kalangan Gen-Z

## 🗂️ Struktur Project

```
Explanation-Dashboard-V-Squat/
├── index.html                 # File utama dashboard
├── README.md                  # Dokumentasi project
│
├── assets/                    # Asset utama project
│   ├── styles/               # File CSS
│   │   └── style.css         # Stylesheet utama dengan tema dark/light
│   │
│   ├── scripts/              # File JavaScript
│   │   └── app.js            # Logika interaktif dan animasi
│   │
│   ├── images/               # Asset gambar
│   │   ├── icons/            # Icon dan logo
│   │   │   └── Fitness Vision.svg
│   │   │
│   │   └── charts/           # Grafik dan visualisasi data
│   │       ├── Grafik Perubahan MPJPE.jpg
│   │       ├── gym_injuries_chart.png
│   │       ├── gym_injuries_pie_chart.png
│   │       ├── mpjpe_comparison_update.png
│   │       ├── social_media_gen_z_chart.png
│   │       └── squat_angles_radar_chart.png
│   │
│   └── data/                 # Data JSON
│       └── dashboard_data.json
│
└── docs/                     # Dokumentasi dan referensi
    └── Skripsi Bab 4 Royanrosyad.pdf
```

## 🚀 Cara Menggunakan

### **Quick Start**
1. **Clone atau Download** project ini
2. **Buka** file `index.html` di browser modern
3. **Nikmati** dashboard interaktif!

### **Browser Support**
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### **Features Guide**

#### 🌗 **Theme Toggle**
- Klik toggle di header untuk beralih antara light dan dark mode
- Tema akan tersimpan otomatis di browser

#### 🖼️ **Interactive Charts**
- Klik pada gambar/chart untuk melihat versi full-size
- Klik diluar modal atau tombol ✕ untuk menutup

#### 📑 **Navigation**
- Gunakan tab navigation untuk berpindah antar section:
  - **Overview**: Statistik umum dan gambaran besar
  - **Landasan Threshold**: Analisis ilmiah threshold feedback
  - **Result & Discussion**: Hasil penelitian dan pembahasan
  - **Conclusion**: Kesimpulan dan rekomendasi
  - **Daftar Referensi**: Sumber dan referensi ilmiah

## 🛠️ Teknologi yang Digunakan

### **Frontend**
- **HTML5**: Struktur semantik modern
- **CSS3**: 
  - Custom properties (CSS Variables)
  - Flexbox & Grid Layout
  - Advanced animations & transitions
  - Dark/Light theme implementation
- **Vanilla JavaScript**: 
  - ES6+ features
  - DOM manipulation
  - Event handling
  - Theme persistence

### **Design Principles**
- **Mobile-First**: Responsive design approach
- **Accessibility**: ARIA labels dan focus management
- **Performance**: Optimized images dan lazy loading
- **User Experience**: Intuitive navigation dan smooth interactions

## 📊 Data Sources

### **Research References**
1. **Bayattork et al. (2024)** - Hip vertical angle analysis
2. **Yavuz & Erdag (2017)** - Forward lean biomechanics  
3. **Wallace et al. (2002)** - Knee over toes positioning
4. **Various fitness industry reports** - Injury statistics

### **Charts & Visualizations**
- Pie charts untuk distribusi cedera
- Bar charts untuk perbandingan MPJPE
- Line charts untuk perubahan temporal
- Radar charts untuk threshold visualization

## 🎨 Design System

### **Color Palette**
```css
/* Light Theme */
--color-primary: rgba(33, 128, 141, 1)      /* Teal Blue */
--color-secondary: rgba(94, 82, 64, 0.12)   /* Warm Gray */
--color-success: rgba(33, 128, 141, 1)      /* Success Green */
--color-warning: rgba(168, 75, 47, 1)       /* Warning Orange */
--color-error: rgba(192, 21, 47, 1)         /* Error Red */

/* Dark Theme */
--color-background: rgba(31, 33, 33, 1)     /* Dark Background */
--color-surface: rgba(38, 40, 40, 1)        /* Surface Dark */
--color-text: rgba(245, 245, 245, 1)        /* Light Text */
```

### **Typography**
- **Primary Font**: FKGroteskNeue, Geist, Inter
- **Monospace**: Berkeley Mono, ui-monospace
- **Font Scales**: 11px - 48px with consistent spacing

### **Spacing System**
- Base unit: 4px
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 48px, 64px

## 🔧 Development

### **File Organization**
- **Modular CSS**: Komponen-based styling dengan CSS custom properties
- **Vanilla JS**: No framework dependencies untuk performa optimal
- **Semantic HTML**: Proper heading hierarchy dan ARIA support

### **Performance Optimizations**
- **Image Optimization**: Compressed images dengan format optimal
- **CSS Optimization**: Minimal unused styles
- **JavaScript**: Efficient DOM manipulation dan event delegation

### **Browser Compatibility**
- Modern browser features dengan graceful degradation
- CSS custom properties dengan fallbacks
- ES6+ dengan transpilation support jika diperlukan

## 👤 Author

**Royanrosyad** 💛

### **Contact & Links**
- 📧 Email: [Contact Info]
- 📱 Social Media: [Social Links]
- 💼 Portfolio: [Portfolio Link]

## 📄 License

Project ini dibuat untuk keperluan penelitian dan edukasi. Silakan gunakan dengan attribution yang sesuai.

## 🤝 Contributing

Kontribusi sangat diterima! Silakan:

1. **Fork** project ini
2. **Create feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to branch** (`git push origin feature/AmazingFeature`)
5. **Open Pull Request**

## 🔮 Future Enhancements

### **Planned Features**
- [ ] **Data Export**: Export data ke PDF/Excel
- [ ] **Real-time Updates**: Integration dengan data real-time
- [ ] **Advanced Filters**: Filter data berdasarkan kriteria tertentu
- [ ] **Comparison Tools**: Bandingkan multiple datasets
- [ ] **API Integration**: Connect dengan external fitness APIs

### **Technical Improvements**
- [ ] **Progressive Web App**: PWA capabilities
- [ ] **Offline Support**: Cache strategy untuk offline usage
- [ ] **Performance Monitoring**: Analytics dan performance tracking
- [ ] **Accessibility Audit**: WCAG 2.1 compliance audit

---

### 🌟 **Jika project ini membantu Anda, jangan lupa untuk memberikan ⭐ star!**

**Made with 💛 by Royanrosyad**
