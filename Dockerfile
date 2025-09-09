# Use Node.js base image
FROM node:18-bullseye

# Install dependencies for Puppeteer/Chromium
RUN apt-get update && apt-get install -y \
    chromium \
    chromium-sandbox \
    fonts-liberation \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libatspi2.0-0 \
    libdrm2 \
    libgbm1 \
    libgtk-3-0 \
    libx11-xcb1 \
    libxcomposite1 \
    libxdamage1 \
    libxrandr2 \
    xdg-utils \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy package.json and install deps first (better layer caching)
COPY package.json package-lock.json* ./
RUN npm install

# Copy app files
COPY . .

# Set environment variable for puppeteer to use system Chromium
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Expose no port (runs as job)
CMD ["node", "index.js"]
