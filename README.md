# Nguyễn Tấn Lực | lcnguyen Profile

Profile page cá nhân theo phong cách cyber-anime, lấy cảm hứng từ dự án Takeshi.

## Tính năng

- **Terminal Boot Intro** - Giao diện Windows 11 CMD giả lập với animation gõ phím
- **Multi-tab CMD** - Hỗ trợ nhiều tab, gõ lệnh giả lập
- **Discord Presence** - Kết nối Lanyard API để hiển thị trạng thái Discord thời gian thực
- **Avatar Decorations** - Ảnh trang trí anime-style, xoay ngẫu nhiên mỗi 5 giây
- **Music Player** - Trình phát nhạc nền với điều khiển play/pause, next track, volume
- **3D Tilt Effect** - Hiệu ứng nghiêng 3D khi hover chuột
- **Ripple Animations** - Hiệu ứng sóng khi click chuột
- **Unity Rich Text Colorizer** - Công cụ tạo gradient màu cho Unity
- **Responsive Design** - Tương thích mobile, tablet, desktop

## Thông tin cá nhân

- **Họ tên**: Nguyễn Tấn Lực
- **Name Dev**: lcnguyn06 (Rio)
- **Ngày sinh**: 29 - 12 - 2006
- **Công việc**: Software Development
- **Địa chỉ**: Quận 12, Hồ Chí Minh, Việt Nam

## Sở thích

- Cầu lông
- Nghe nhạc
- Đi bộ
- Nhiếp ảnh

## Cấu trúc dự án

```
rio-profile/
├── index.html      # Cấu trúc HTML chính
├── styles.css      # Design system CSS
├── script.js       # Logic JavaScript
├── README.md       # Tài liệu dự án
└── data/
    ├── background/ # Ảnh nền (960, 1440, 1920px)
    ├── decoration/ # Ảnh trang trí avatar anime
    ├── music/      # File nhạc nền MP3
    └── badges/     # Discord badge SVG icons
```

## Cách chạy

```bash
# Cách 1: npx serve
npx serve .

# Cách 2: Python HTTP server
python -m http.server 5500

# Cách 3: Mở trực tiếp
# Double-click index.html
```

Truy cập: `http://localhost:5500`

## Tùy chỉnh

### Thay đổi Discord ID
Mở `script.js` và thay đổi:
```javascript
const DISCORD_USER_ID = 'YOUR_DISCORD_ID';
```

### Thay đổi thông tin cá nhân
- **Tên hiển thị**: Sửa `introLines` trong `script.js`
- **Mô tả**: Sửa phần `about-card` trong `index.html`
- **Sở thích**: Sửa phần `hobbies-grid` trong `index.html`
- **Liên hệ**: Sửa phần `contact-card` trong `index.html`
- **Social links**: Sửa các thuộc tính `href` trong `social-row`

### Thay đổi màu sắc
Chỉnh sửa CSS variables trong `styles.css`:
```css
:root {
  --bg: #060913;       /* Màu nền */
  --discord: #5865f2; /* Màu Discord */
  --cyan: #35e8ff;    /* Màu cyan accent */
  --pink: #ff4fd8;     /* Màu pink accent */
}
```

### Thêm nhạc mới
Thêm vào mảng `tracks` trong `script.js`:
```javascript
const tracks = [
  { title: 'Tên bài hát', src: './data/music/ten-bai-hat.mp3' },
];
```

## Công nghệ

- HTML5
- CSS3 (Glassmorphism, Animations, 3D Transform)
- Vanilla JavaScript (ES6+)
- Google Fonts (JetBrains Mono, Outfit)
- Lanyard REST API (Discord Presence)
- Web Audio API (Music Player)

## Credits

Design system lấy cảm hứng từ [Takeshi Cyber Profile](https://github.com/takeshi7502/pro5).
