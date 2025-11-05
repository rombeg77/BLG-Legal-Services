# BLG Legal Services Website

Immigration, Trademarks & Business Law firm website.

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- Git (for deployment)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

This creates a static export in the `out` folder.

## Deployment to GitHub Pages

### Option 1: Automatic Script (Recommended)

1. Install Git from: https://git-scm.com/download/win
2. Restart your terminal
3. Run the deployment script:

```powershell
.\deploy-to-github.ps1
```

### Option 2: Manual Deployment

```bash
git init
git add .
git commit -m "Initial commit - BLG Legal Services website"
git remote add origin https://github.com/rombeg77/BLG-Legal-Services.git
git branch -M main
git push -u origin main
```

### After Pushing

1. Go to: https://github.com/rombeg77/BLG-Legal-Services/settings/pages
2. Under "Source", select "GitHub Actions"
3. Your site will automatically deploy

## Custom Domain Setup

1. Edit `public/CNAME` with your domain name
2. Configure DNS in GoDaddy:
   - Add A records pointing to GitHub Pages IPs
   - Add CNAME record for www subdomain
3. Update GitHub Pages settings with your custom domain

## Project Structure

```
├── .github/workflows/    # GitHub Actions deployment
├── public/               # Static assets (images, CNAME)
├── src/app/             # Next.js app directory
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
└── out/                 # Build output (generated)
```

## Technologies

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **GitHub Pages** - Hosting

