# Project Next.js

Ini adalah project Next.js yang dibuat menggunakan [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Memulai

Pertama, masuk ke folder project:

```bash
cd my-nextjs-app
```

Kemudian, jalankan development server:

```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
```

Buka [http://localhost:3000](http://localhost:3000) dengan browser Anda untuk melihat hasilnya.

Anda dapat mulai mengedit halaman dengan memodifikasi `src/app/page.tsx`. Halaman akan otomatis update saat Anda menyimpan file.

## Fitur yang Disertakan

Project ini menggunakan:

- **Next.js 15** - Framework React untuk production
- **TypeScript** - Untuk type safety
- **Tailwind CSS** - Untuk styling
- **ESLint** - Untuk linting dan code quality
- **App Router** - Sistem routing terbaru dari Next.js

## Struktur Folder

```
my-nextjs-app/
├── src/
│   └── app/
│       ├── layout.tsx    # Layout utama
│       ├── page.tsx      # Halaman utama
│       └── globals.css   # CSS global
├── public/               # Static files
├── package.json         # Dependencies
└── tsconfig.json        # TypeScript config
```

## Script yang Tersedia

- `npm run dev` - Menjalankan development server
- `npm run build` - Build aplikasi untuk production
- `npm run start` - Menjalankan production server
- `npm run lint` - Menjalankan ESLint

## Belajar Lebih Lanjut

Untuk mempelajari lebih lanjut tentang Next.js, lihat resource berikut:

- [Dokumentasi Next.js](https://nextjs.org/docs) - pelajari tentang fitur dan API Next.js
- [Tutorial Next.js](https://nextjs.org/learn) - tutorial interaktif Next.js

## Deploy di Vercel

Cara termudah untuk deploy aplikasi Next.js adalah menggunakan [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dari pembuat Next.js.

Lihat [dokumentasi deployment Next.js](https://nextjs.org/docs/deployment) untuk detail lebih lanjut.
