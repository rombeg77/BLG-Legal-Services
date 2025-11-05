# BLG Legal Services - GitHub Deployment Script
# Run this script after Git is installed

Write-Host "Initializing Git repository..." -ForegroundColor Green
git init

Write-Host "Adding all files..." -ForegroundColor Green
git add .

Write-Host "Creating initial commit..." -ForegroundColor Green
git commit -m "Initial commit - BLG Legal Services website"

Write-Host "Adding GitHub remote repository..." -ForegroundColor Green
git remote add origin https://github.com/rombeg77/BLG-Legal-Services.git

Write-Host "Setting main branch..." -ForegroundColor Green
git branch -M main

Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host "`nDeployment complete!`n" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Go to: https://github.com/rombeg77/BLG-Legal-Services" -ForegroundColor White
Write-Host "2. Click Settings → Pages" -ForegroundColor White
Write-Host "3. Under Source: Select 'GitHub Actions'" -ForegroundColor White
Write-Host "4. Your site will deploy automatically at: https://rombeg77.github.io/BLG-Legal-Services/" -ForegroundColor White
