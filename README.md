# 🐙 OctaTribe

**Building Brands in Digital Age**

A modern, full-stack digital agency website built with Next.js 14, featuring a complete admin dashboard for content management.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-5.0-2D3748?logo=prisma)

---

## ✨ Features

### 🌐 Public Website
- **Responsive Design** - Mobile-first, works on all devices
- **Light/Dark Mode** - Toggle with system preference support
- **Glassmorphism UI** - Modern frosted glass effects
- **Animated Elements** - Floating cards, marquee scrolling
- **Dynamic Content** - All content fetched from database
- **SEO Optimized** - Meta tags, Open Graph support

### 🔐 Admin Dashboard
- **Lead Management** - Track and manage inquiries
- **Content Management** - Services, Case Studies, Team, FAQs
- **Newsletter** - View and export subscribers
- **Settings** - Contact info, Social links, SEO

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/octatribe/octatribe-website.git
cd octatribe-website

# Install dependencies
npm install

# Setup database
npx prisma generate
npx prisma db push
npx prisma db seed

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

---

## 📁 Project Structure

```
├── src/
│   ├── app/              # Next.js pages & API routes
│   ├── components/       # React components
│   │   ├── admin/        # Admin dashboard components
│   │   └── ui/           # shadcn/ui components
│   └── lib/              # Utilities
├── prisma/               # Database schema
└── public/               # Static assets
```

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | SQLite + Prisma ORM |
| UI Components | shadcn/ui |
| Icons | Lucide React |
| Notifications | Sonner |

---

## 📞 Contact

- **Email:** mail@octatribe.com
- **Phone:** +977 9820760120 / 130
- **Website:** [octatribe.com](https://octatribe.com)

---

## 📄 License

© 2026 OctaTribe. All rights reserved.
