#!/bin/bash

# Portfolio Deployment Script
# This script helps you deploy your portfolio to GitHub for Cloudflare Pages

echo "🚀 Portfolio Deployment Helper"
echo "================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📁 Initializing Git repository..."
    git init
    echo ""
fi

# Check if remote exists
if ! git remote | grep -q origin; then
    echo "🔗 Please enter your GitHub repository URL:"
    echo "   Example: https://github.com/iharnoor/portfolio.git"
    read -p "Repository URL: " repo_url
    git remote add origin "$repo_url"
    echo "✅ Remote added!"
    echo ""
fi

# Stage all files
echo "📦 Staging files..."
git add .

# Commit
echo ""
read -p "📝 Commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update portfolio"
fi

git commit -m "$commit_msg"
echo "✅ Committed!"
echo ""

# Push
echo "🚀 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✨ Done! Your code is on GitHub."
echo ""
echo "📋 Next Steps:"
echo "1. Go to Cloudflare Dashboard → Pages"
echo "2. Click 'Create a project'"
echo "3. Connect your GitHub repository"
echo "4. Deploy settings: Leave everything default"
echo "5. Click 'Save and Deploy'"
echo "6. Add custom domain: "shreyash.engineer""
echo ""
echo "🎉 Your portfolio will be live in minutes!"
