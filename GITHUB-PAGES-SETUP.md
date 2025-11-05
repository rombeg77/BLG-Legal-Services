# GitHub Pages Setup Guide

## Step-by-Step Instructions

### 1. Make Repository Public (Required for Free GitHub Pages)

1. Go to: https://github.com/rombeg77/BLG-Legal-Services/settings
2. Scroll to the bottom "Danger Zone" section
3. Click "Change visibility"
4. Select "Make public"
5. Type the repository name to confirm
6. Click "I understand, change repository visibility"

### 2. Enable GitHub Actions

1. Go to: https://github.com/rombeg77/BLG-Legal-Services/settings/actions
2. Under "Workflow permissions":
   - Select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests" (optional)
3. Click "Save"

### 3. Enable GitHub Pages

1. Go to: https://github.com/rombeg77/BLG-Legal-Services/settings/pages
2. Wait a few seconds for the page to load completely
3. Under "Source", you should now see "GitHub Actions" option
4. Select "GitHub Actions"
5. Click "Save"

### 4. Verify Deployment

1. Go to: https://github.com/rombeg77/BLG-Legal-Services/actions
2. You should see "Deploy to GitHub Pages" workflow running
3. Wait 2-3 minutes for it to complete
4. Once complete, your site will be live at:
   - https://rombeg77.github.io/BLG-Legal-Services/

## If "GitHub Actions" Option Still Doesn't Appear

### Alternative: Use "Deploy from a branch" (Temporary Workaround)

1. Go to: https://github.com/rombeg77/BLG-Legal-Services/settings/pages
2. Under "Source", select "Deploy from a branch"
3. Branch: `gh-pages` (or `main`)
4. Folder: `/ (root)`
5. Click "Save"
6. This will trigger the workflow to run
7. After the first deployment succeeds, switch back to "GitHub Actions"

### Manual Workflow Trigger

1. Go to: https://github.com/rombeg77/BLG-Legal-Services/actions
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button (top right)
4. Select branch: `main`
5. Click "Run workflow"
6. This will manually trigger the deployment

## Troubleshooting

### Repository is Private
- Free GitHub Pages requires public repositories
- Make the repository public (see Step 1 above)

### Workflow Not Running
- Check Actions tab: https://github.com/rombeg77/BLG-Legal-Services/actions
- If no workflows appear, wait 1-2 minutes and refresh
- The workflow should automatically trigger after pushing to main branch

### Build Errors
- Check the Actions tab for error messages
- Common issues:
  - Missing dependencies (should be fixed)
  - Build errors (check Actions logs)

### Site Not Loading
- Wait 5-10 minutes after deployment completes
- Check if custom domain DNS is configured correctly
- Verify CNAME file is in public folder

## Your Site URLs

- **GitHub Pages**: https://rombeg77.github.io/BLG-Legal-Services/
- **Repository**: https://github.com/rombeg77/BLG-Legal-Services
- **Settings**: https://github.com/rombeg77/BLG-Legal-Services/settings/pages
- **Actions**: https://github.com/rombeg77/BLG-Legal-Services/actions

