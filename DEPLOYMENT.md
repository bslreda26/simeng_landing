# GitHub Pages Deployment Guide

This project is configured for deployment to GitHub Pages.

## Configuration Changes Made

1. **Vite Config**: Added `base: '/hilal/'` to handle the repository name in the URL
2. **Package.json**: Added deployment scripts and homepage field
3. **GitHub Actions**: Created workflow for automatic deployment
4. **Dependencies**: Added `gh-pages` package

## Deployment Steps

### Option 1: Automatic Deployment (Recommended)
1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Your site will be available at: `https://yourusername.github.io/hilal`

### Option 2: Manual Deployment
1. Run the build command:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## Important Notes

1. **Update Homepage URL**: In `package.json`, change `"homepage": "https://yourusername.github.io/hilal"` to your actual GitHub username.

2. **Repository Settings**: 
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

3. **Base Path**: The current configuration assumes your repository is named `hilal`. If you change the repository name, update:
   - `vite.config.ts` base path
   - `package.json` homepage URL

## Troubleshooting

- If the site doesn't load, check that the base path in `vite.config.ts` matches your repository name
- Ensure GitHub Pages is enabled in your repository settings
- Check the Actions tab in your repository for deployment status 