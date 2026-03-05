# AN Global Sourcing

## Current State
New project. No existing pages or backend logic.

## Requested Changes (Diff)

### Add
- Full multi-page corporate website for AN GLOBAL SOURCING, an India-based sourcing & manufacturing coordination company targeting UK, European and Indian buyers.
- Pages: Homepage, About Us, Products, Services, Contact
- Contact form with fields: Name, Company, Country, Email, Message
- Inquiry submission stored in backend canister
- WhatsApp inquiry button (wa.me link)
- SEO meta tags integrated into page structure

### Modify
- N/A (new project)

### Remove
- N/A

## Implementation Plan

### Backend
- `submitInquiry(name, company, country, email, message)` -> stores inquiry record with timestamp
- `getInquiries()` -> returns all inquiries (admin access)

### Frontend Pages
1. **Homepage** – Hero slider (3 slides with industry images), About snippet, Product Categories grid (6 categories), Why Choose Us, Our Process steps, CTA banner, Footer
2. **About Us** – Company overview, Mission & Vision, Working model, Market focus
3. **Products** – Categorized grid: Leather Products, Fashion Garments, Pet Accessories, Equestrian Products, Safety & Webbing Products. Each with image, description, Request Quote button
4. **Services** – 6 services listed + 6-step visual process flow
5. **Contact** – Contact form wired to backend, WhatsApp button, map placeholder, CTA

### Design
- Colors: Dark Navy #0B1F3A, Charcoal Grey #333333, Steel Blue #2E5EAA, Light Grey #F2F2F2
- Fonts: Montserrat (headings), Open Sans (body) via Google Fonts
- Responsive desktop + mobile
- Smooth scroll, subtle animations
- SEO keywords embedded in headings and meta tags
