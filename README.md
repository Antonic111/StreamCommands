# Stream Commands Website

A modern, responsive React website listing all stream commands for Antonic's YouTube/Twitch channels. Built with React, Vite, and Tailwind CSS.

## Features

- ✨ Modern, clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and lightweight
- 🎨 Beautiful gradient background
- 🔍 Easy to update commands

## Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd StreamCommands
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deploying to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

This repository includes a GitHub Actions workflow that automatically deploys your site when you push to the `main` or `master` branch.

1. Push your code to GitHub
2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy your site

### Option 2: Manual Deployment

1. Update the `base` path in `vite.config.js` to match your repository name:
   ```js
   base: '/your-repo-name/',
   ```
   If deploying to a custom domain or root, use `'/'`

2. Build the project:
   ```bash
   npm run build
   ```

3. Go to your repository Settings → Pages
4. Under "Source", select "Deploy from a branch"
5. Choose the `main` (or `master`) branch and `/dist` folder
6. Click Save

### Important: Update Base Path

**Before deploying**, make sure to update the `base` path in `vite.config.js` to match your GitHub repository name. For example:

- If your repo is `stream-commands`, use `base: '/stream-commands/'`
- If your repo is `StreamCommands`, use `base: '/StreamCommands/'`
- If deploying to a custom domain, use `base: '/'`

## Project Structure

```
StreamCommands/
├── src/
│   ├── components/      # React components
│   │   ├── CommandGroup.jsx
│   │   └── CommandSection.jsx
│   ├── data/            # Command data
│   │   └── commands.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Tailwind CSS imports
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Updating Commands

To add or modify commands, edit the `src/data/commands.js` file. The structure is simple:

```javascript
{
  aliases: ["!command1", "!command2"],
  description: "Command description here",
  platform: "YouTube Only" // or "Twitch Only" or null
}
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **GitHub Pages** - Hosting

## License

MIT
