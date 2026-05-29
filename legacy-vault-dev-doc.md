# Legacy Vault — Developer Document

## Project Overview

A clean, modern landing page for Joe Dos Santos, an independent financial advisor. The goal is simple: get visitors to fill out a contact form so Joe can follow up and schedule a consultation. No jargon, no clutter — just clear, plain English that anyone can understand.

---

## Goals

- Replace the current site at legacyvaultmanagement.com
- Single-page landing page (no multi-page navigation needed)
- Contact form that sends an email directly to Joe
- Clean, premium feel — dark navy, black, and gold
- Mobile responsive
- Plain English throughout — no financial jargon

---

## Tech Stack

| Layer | Technology | Reason |
|---|---|---|
| Framework | Next.js 14 (App Router) | SEO-friendly, fast, works seamlessly with Vercel |
| Styling | Tailwind CSS | Utility-first, pairs perfectly with Next.js, keeps code clean |
| Email / Forms | EmailJS | No backend needed, sends form submissions directly to Joe's email |
| Hosting | Vercel | Free tier, automatic deployments from GitHub, easy domain connection |
| Domain | legacyvaultmanagement.com | Keeping existing domain |

---

## Project Structure

```
legacy-vault/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, global styles)
│   ├── page.tsx            # Main landing page (all sections)
│   └── globals.css         # Global CSS + Tailwind imports
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section with headline + CTA
│   ├── About.tsx           # About Joe section
│   ├── Services.tsx        # Services section (3 cards)
│   ├── WhyJoe.tsx          # Trust / differentiator section
│   ├── ContactForm.tsx     # Contact form with EmailJS integration
│   └── Footer.tsx          # Footer with contact info
├── public/
│   └── placeholder-joe.jpg # Placeholder photo (replace when Joe provides one)
├── .env.local              # EmailJS environment variables (never commit this)
├── package.json
└── README.md
```

---

## Page Sections (Top to Bottom)

### 1. Navbar
- Logo / Name: "Joe Dos Santos" or "Legacy Vault"
- Single CTA button: "Get in Touch" → scrolls to contact form
- Minimal — no dropdown menus

### 2. Hero
- Headline: Simple, plain English (e.g. *"Let's build a plan for your future"*)
- Subheadline: One sentence explaining what Joe does, no jargon
- CTA button: "Book a Free Consultation" → scrolls to contact form
- Background: Dark navy with subtle gold accent

### 3. About Joe
- Placeholder photo (professional headshot when available)
- Short bio — who he is, how he works, why he does it
- Mention: Independent advisor, works with New York Life & Legacy Vault
- Keep it personal and human, not corporate

### 4. Services
- 3 clean cards:
  1. **Retirement Planning** — "Plan for the day you stop working"
  2. **Life Insurance** — "Protect the people who depend on you"
  3. **Investment Planning** — "Grow what you already have"
- Short 1-2 sentence descriptions in plain English under each

### 5. Why Joe
- 3–4 simple trust points (e.g. 20+ years experience, independent advisor, personal 1-on-1 service)
- No fake stats or made-up numbers

### 6. Contact Form
- Fields: Name, Email, Phone (optional), Message ("Tell me a little about what you're looking for")
- Submit button: "Send Message"
- On submit: EmailJS sends email directly to Joe at legacy.vault.jds@gmail.com
- Success message: "Thanks! Joe will be in touch within 1 business day."

### 7. Footer
- Phone: 914-253-7025
- Email: legacy.vault.jds@gmail.com
- Instagram link
- Simple disclaimer (already on current site)
- © 2026 Legacy Vault, LLC

---

## Design Direction

| Element | Decision |
|---|---|
| Primary Color | Deep Navy `#0A1628` |
| Secondary Color | Matte Black `#080C12` |
| Accent Color | Gold `#C9A84C` |
| Text | Off-white `#F0EDE6` |
| Font (Headings) | Playfair Display (elegant, premium) |
| Font (Body) | Inter or DM Sans (clean, readable) |
| Border Radius | Subtle — 8px on cards |
| Imagery | Placeholder photo + minimal abstract background elements |

---

## EmailJS Setup

1. Create a free account at [emailjs.com](https://emailjs.com)
2. Add an **Email Service** (connect to Joe's Gmail: legacy.vault.jds@gmail.com)
3. Create an **Email Template** with variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{phone}}` — sender's phone
   - `{{message}}` — sender's message
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. Add to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

6. Install EmailJS in the project:
```bash
npm install @emailjs/browser
```

---

## Deployment (Vercel)

1. Push project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the GitHub repo
3. Add environment variables (EmailJS keys) in Vercel project settings
4. Connect the domain `legacyvaultmanagement.com` in Vercel Domains settings
5. Update DNS records at the domain registrar to point to Vercel
6. Every push to `main` branch auto-deploys

---

## Getting Started Locally

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/legacy-vault.git
cd legacy-vault

# 2. Install dependencies
npm install

# 3. Add environment variables
cp .env.example .env.local
# Fill in your EmailJS keys

# 4. Run the dev server
npm run dev

# 5. Open in browser
# http://localhost:3000
```

---

## Notes

- Replace `placeholder-joe.jpg` with Joe's real headshot when available
- All copy should stay in plain English — avoid financial terminology
- Do not add any fake statistics or testimonials
- Keep the site to a single page — no blog, no extra pages needed for now
- Instagram: instagram.com/legacyvaultwealthmanagement

---

*Built by Daniel Santos for Joe Dos Santos — Legacy Vault, LLC*
