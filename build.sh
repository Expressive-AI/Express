#!/bin/bash
set -e

# Make sure vite binary is executable
chmod +x node_modules/.bin/vite

# Run the build
npm run build
