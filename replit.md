# StreamXHD - IPTV Streaming Platform Website

## Overview
StreamXHD is a modern, dark-themed IPTV/streaming service website inspired by the Torin template. It features a stunning landing page with hero section, channel directory, pricing plans, about page, FAQ, and contact form.

## Architecture
- **Frontend**: React + TypeScript + Tailwind CSS + shadcn/ui + Framer Motion
- **Backend**: Express.js + PostgreSQL + Drizzle ORM
- **Routing**: wouter for client-side, Express for API
- **State**: TanStack React Query for server state

## Pages
- `/` - Home (hero, stats, features, pricing preview, testimonials, CTA)
- `/channels` - Latest Movies page with search and genre filters (83 movies, 16 per page)
- `/live-channels` - Live TV Channels directory with category filters (sports, entertainment, news, music, kids, education)
- `/pricing` - Pricing plans with comparison table
- `/about` - About page with mission, values, timeline
- `/faq` - FAQ with accordion sections (general, technical, billing)
- `/contact` - Contact form with validation

## API Routes
- `GET /api/channels` - Get all channels
- `GET /api/movies` - Get all movies
- `GET /api/plans` - Get pricing plans
- `GET /api/faqs` - Get FAQ items
- `GET /api/testimonials` - Get testimonials
- `POST /api/contact` - Submit contact form

## Database Tables
- `channels` - TV channel listings
- `movies` - Movie listings with genre, year, rating, duration
- `plans` - Subscription pricing plans
- `faqs` - FAQ entries
- `testimonials` - User testimonials
- `contact_messages` - Contact form submissions
- `users` - User accounts (not used in current MVP)

## Design
- Dark theme by default with orange/amber accent gradient (matching StreamXHD logo)
- Primary color: Orange (hsl 33 95% 52%) with dark background
- Inter font family
- Framer Motion animations
- Responsive design with mobile-first approach
- StreamXHD logo: Orange diamond with black streaming bars

## File Structure
- `client/src/pages/` - Page components
- `client/src/components/` - Shared components (navbar, footer)
- `server/` - Express backend, routes, storage, seed data
- `shared/schema.ts` - Database schema and types
