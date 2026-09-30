# Omnivoxio Website

Deploy-ready marketing website for **Omnivoxio**, focused exclusively on:
- Professional Website Development
- Evidence-Based SEO & Website Growth

Built with Next.js, React, TypeScript, and Tailwind CSS.

## Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes (for production) | Canonical base URL used in metadata, sitemap, and robots |
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | Yes (for live form) | Endpoint receiving JSON POST from contact form |

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

## Contact Form Integration

The contact form posts JSON to `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`.
Expected payload:
- `name`
- `email`
- `company`
- `whatsapp`
- `website`
- `businessType`
- `service`
- `budgetTimeline`
- `message`

If no endpoint is configured, the UI shows a clear configuration error state.

## Deployment

### Vercel (recommended)
1. Import the repository in Vercel.
2. Set environment variables from `.env.example`.
3. Deploy with default Next.js build settings.

### Other Next.js hosts
1. Build with `npm run build`.
2. Start with `npm run start`.
3. Ensure `NEXT_PUBLIC_SITE_URL` matches your production domain.

## Content Customization

- Site-wide settings and WhatsApp link: `lib/site.ts`
- Reusable content collections (industries, FAQs, packages, case studies): `lib/content.ts`
- Metadata defaults and per-page metadata helper: `lib/metadata.ts`

## Included Pages

- Home
- Services
- Website Development
- SEO Growth
- Solutions & Industries
- Case Studies
- About
- Contact
- FAQ
- Privacy Policy
- Terms of Service

## SEO Features

- Unique page metadata with canonical URLs
- Open Graph and Twitter metadata
- Sitemap (`/sitemap.xml`) and robots (`/robots.txt`)
- Organization + ProfessionalService JSON-LD on Home
- FAQ schema only on visible FAQ page content
