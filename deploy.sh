#!/bin/bash
# ============================================
# CodeXa Deploy Script — spinfotechllp.com
# ============================================
# Usage: ./deploy.sh
# It will ask for your Hostinger SSH password.

HOST="145.79.213.77"
PORT="65002"
USER="u546809881"
REMOTE_DIR="/home/u546809881/domains/spinfotechllp.com/public_html"

# Files/folders to upload (only production files)
FILES=(
    "index.html"
    "about.html"
    "contact.html"
    "services.html"
    "portfolio.html"
    "main.js"
    "css"
    "assets"
)

echo "🚀 Deploying to spinfotechllp.com..."
echo ""

for item in "${FILES[@]}"; do
    echo "📦 Uploading: $item"
    scp -P "$PORT" -r "$item" "$USER@$HOST:$REMOTE_DIR/$item"
done

echo ""
echo "✅ Deploy complete! Visit https://spinfotechllp.com"
