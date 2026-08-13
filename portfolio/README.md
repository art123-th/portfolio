# Portfolio — Narongsak Wongwuen

React + TypeScript + Vite portfolio site — a single scrolling page with
four sections (Home / About Me / Certification / Experience) matching the
hand-sketched wireframes. The top nav scrolls smoothly to each section and
highlights whichever one is currently in view. Theme: dark "equipment
nameplate / blueprint" look — amber safety accent, condensed industrial
headers, monospace data readouts.

## แก้ไขเนื้อหา (Edit content)

เนื้อหาทั้งหมด (ชื่อ, สรุป, ทักษะ, ประสบการณ์, ใบรับรอง) อยู่ในไฟล์เดียว:

```
src/data.ts
```

แก้ไขค่าตรงนั้นได้เลย ไม่ต้องแตะไฟล์ component

## โครงสร้างหน้าเว็บ (Structure)

ตอนนี้เป็นเว็บหน้าเดียว (single page) ทุกหัวข้ออยู่ในหน้าเดียวกัน:

```
src/sections/Hero.tsx           → id="home"
src/sections/About.tsx          → id="about"       (รวม Skill ไว้ในนี้แล้ว)
src/sections/Certification.tsx  → id="certification"
src/sections/Experience.tsx     → id="experience"
src/sections/Contact.tsx        → id="contact"      (อยู่ท้ายสุด ไม่มีปุ่มบน nav)
```

ปุ่มบน Navbar (`src/components/Navbar.tsx`) จะเลื่อนหน้าจอไปยัง section
ตาม id เหล่านี้ และไฮไลท์ปุ่มเองอัตโนมัติเมื่อ section นั้นเลื่อนเข้ามาอยู่
กลางจอ (ใช้ `IntersectionObserver`) ถ้าจะเพิ่ม section ใหม่ ต้อง:

1. สร้างไฟล์ใน `src/sections/`
2. ใส่ `id="ชื่อ"` ให้ตรงกับที่จะอ้างอิง
3. เพิ่มเข้าไปใน `SECTIONS` array ที่ `Navbar.tsx` (ถ้าอยากให้ขึ้นบน nav ด้วย)
4. import มาวางใน `App.tsx`

## รูปภาพ (Photos)

ตอนนี้ทุกจุดที่ควรมีรูป (หน้า Home, About, Experience, Certification) ใช้
placeholder สีเทาลายเส้นแทนไว้ก่อน (component `PhotoSlot`). วิธีใส่รูปจริง:

1. วางไฟล์รูปในโฟลเดอร์ `public/photos/` เช่น `public/photos/me-01.jpg`
2. ในไฟล์ section นั้น ๆ เปลี่ยน `<PhotoSlot label="..." />` เป็น
   `<PhotoSlot label="..." src="/photos/me-01.jpg" />`

## เรซูเม่ (Resume)

ปุ่ม "Download Resume" ลิงก์ไปที่ `/resume.pdf` — วางไฟล์ PDF ของคุณไว้ที่
`public/resume.pdf` (ชื่อไฟล์ต้องตรงกัน) หรือแก้ path ที่ `profile.resumeFile`
ใน `src/data.ts`

## รันตอนพัฒนา (Local dev)

```bash
cd portfolio
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview   # ทดสอบ build ก่อนขึ้นจริง
```

## Deploy ขึ้น GitHub Pages

โปรเจกต์นี้มี GitHub Actions workflow (`.github/workflows/deploy.yml`) ที่
build และ deploy อัตโนมัติทุกครั้งที่ push เข้า branch `main`

ขั้นตอนตั้งค่าครั้งแรก:

1. Push โค้ดนี้ขึ้น repo `art123-th/portfolio` branch `main`
2. ไปที่ repo → **Settings → Pages** → ตั้งค่า **Source** เป็น
   **GitHub Actions**
3. push ครั้งถัดไป site จะ build และ deploy ให้เองที่
   `https://art123-th.github.io/portfolio/`

> **สำคัญ:** ถ้าเปลี่ยนชื่อ repo ต้องแก้ค่า `base` ใน `vite.config.ts`
> ให้ตรงกับชื่อ repo ใหม่ (เช่น `/repo-name/`) ไม่งั้น CSS/JS จะโหลดไม่ขึ้น

