# Quỳnh Chi — Marketing Portfolio

Portfolio cá nhân xây bằng [Next.js 16](https://nextjs.org) + Tailwind CSS, deploy trực tiếp lên [Vercel](https://vercel.com).

## Chỉnh sửa nội dung

**Toàn bộ nội dung nằm trong 1 file duy nhất: [`data/content.ts`](data/content.ts).**

Những chỗ cần cập nhật:

1. **Email & mạng xã hội** — sửa `email`, `linkedin`, `facebook`, `behance` trong `profile` (để `""` nếu không dùng, nút sẽ tự ẩn).
2. **Link PDF từng project** — upload các file PDF lên Google Drive (bật chế độ *Anyone with the link can view*), rồi dán link vào trường `pdfUrl` của từng project. Nút **"View full deck ↗"** sẽ tự xuất hiện trên card.
   > Các file PDF gốc quá nặng (25MB–400MB) nên không đưa vào repo / Vercel được — dùng Drive là gọn nhất.
3. **2 mô tả do AI viết** (đánh dấu `✏️` trong file): *Multimedia Communications — Canva × Affinity* và *Bản Lĩnh Marketer — OMO* không có trong bài giới thiệu gốc, hãy chỉnh lại cho đúng thực tế.

Ảnh bìa các project nằm ở `public/covers/` (trích từ trang đầu mỗi file PDF).

## Chạy thử trên máy

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Deploy lên Vercel

1. Vào [vercel.com/new](https://vercel.com/new), đăng nhập bằng GitHub.
2. Chọn **Import** repo `Chi-Porfolio`.
3. Vercel tự nhận diện Next.js — bấm **Deploy** là xong, không cần cấu hình gì thêm.

Mỗi lần push code mới lên nhánh `main`, Vercel sẽ tự deploy lại.
