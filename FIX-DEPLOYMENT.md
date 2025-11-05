# Fix GitHub Pages Deployment

## Quick Fix: Manual Workflow Trigger

### Option 1: Trigger Workflow Manually (Easiest)

1. **Go to Actions Tab:**
   - https://github.com/rombeg77/BLG-Legal-Services/actions

2. **Click on "Deploy to GitHub Pages" workflow** (on the left sidebar)

3. **Click "Run workflow" button** (top right, blue button)

4. **Select branch:** `main`

5. **Click "Run workflow"**

6. **Wait 2-3 minutes** for deployment to complete

7. **Check the run** - click on it to see progress

8. **Once complete**, go to Settings → Pages:
   - https://github.com/rombeg77/BLG-Legal-Services/settings/pages
   - Select "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: `/ (root)`
   - Save

### Option 2: Use gh-pages Branch Method (More Reliable)

I've created an alternative workflow that uses the `gh-pages` branch. This method is more reliable:

1. **Go to Actions:**
   - https://github.com/rombeg77/BLG-Legal-Services/actions

2. **Find "Deploy to GitHub Pages (gh-pages branch)" workflow**

3. **Click "Run workflow"** → Select `main` branch → Run

4. **After it completes**, go to Settings → Pages:
   - https://github.com/rombeg77/BLG-Legal-Services/settings/pages
   - Source: "Deploy from a branch"
   - Branch: `gh-pages`
   - Folder: `/ (root)`
   - Save

## Why Workflow Didn't Run Automatically

Common reasons:
1. **Repository is Private** - GitHub Actions may be disabled
2. **GitHub Actions not enabled** - Check Settings → Actions
3. **Workflow not detected** - Sometimes takes a few minutes
4. **Branch protection** - Check repository settings

## Enable GitHub Actions

1. Go to: https://github.com/rombeg77/BLG-Legal-Services/settings/actions
2. Under "Workflow permissions":
   - Select "Read and write permissions"
   - Save
3. Make sure "Allow GitHub Actions" is enabled

## Make Repository Public (If Needed)

Free GitHub Pages requires public repositories:

1. Go to: https://github.com/rombeg77/BLG-Legal-Services/settings
2. Scroll to "Danger Zone"
3. Click "Change visibility" → "Make public"

## Verify Deployment

After workflow completes:

1. **Check Actions tab** for any errors
2. **Go to Pages settings:**
   - https://github.com/rombeg77/BLG-Legal-Services/settings/pages
3. **Verify deployment** - should show a green checkmark
4. **Visit your site:**
   - https://rombeg77.github.io/BLG-Legal-Services/

## Troubleshooting

### No "Run workflow" button?
- Make sure you're logged into GitHub
- Check that you have write access to the repository
- Repository might need to be public

### Workflow fails with errors?
- Check the Actions tab for error messages
- Common issues:
  - Missing dependencies (should be fixed)
  - Build errors (check logs)
  - Permission issues

### Site still not loading?
- Wait 5-10 minutes after deployment
- Check if gh-pages branch was created
- Verify Pages settings are correct

