# Deployment Guide - Stream Commands Website

## Step-by-Step Guide to Deploy to GitHub Pages

### Step 1: Initialize Git Repository

If git is not already initialized, run:
```bash
git init
```

### Step 2: Add All Files to Git

```bash
git add .
```

### Step 3: Make Your First Commit

```bash
git commit -m "Initial commit: Stream Commands website"
```

### Step 4: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it `StreamCommands` (or whatever name you prefer - but you'll need to update `vite.config.js` if you use a different name)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 5: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/StreamCommands.git
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 6: Push Your Code to GitHub

```bash
git branch -M main
git push -u origin main
```

### Step 7: Enable GitHub Pages with GitHub Actions

1. Go to your repository on GitHub
2. Click on **Settings** (top menu bar)
3. Scroll down to **Pages** in the left sidebar
4. Under "Source", select **"GitHub Actions"**
5. The GitHub Actions workflow we created (`.github/workflows/deploy.yml`) will automatically deploy your site

### Step 8: Wait for Deployment

1. Go to the **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once it's done, go back to **Settings → Pages**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/StreamCommands/`

## Important Notes

- **Repository Name**: The `vite.config.js` file has `base: '/StreamCommands/'`. If you use a different repository name, update this value to match.
- **Automatic Deployment**: Every time you push code to the `main` branch, GitHub Actions will automatically rebuild and redeploy your site.
- **Build Output**: The built files go to the `dist` folder (which is in `.gitignore` - that's correct, GitHub Actions builds it fresh each time).

## Troubleshooting

- If the site doesn't load, check the Actions tab for any errors
- Make sure the repository name matches the `base` path in `vite.config.js`
- The workflow will automatically trigger on every push to `main` or `master` branch

