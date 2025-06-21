#!/usr/bin/env node

// Script to generate favicon from logo
const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a 32x32 favicon
const canvas = createCanvas(32, 32);
const ctx = canvas.getContext('2d');

// Create gradient background
const gradient = ctx.createLinearGradient(0, 0, 32, 32);
gradient.addColorStop(0, '#3B82F6');    // Blue
gradient.addColorStop(0.5, '#8B5CF6');  // Purple
gradient.addColorStop(1, '#EC4899');    // Pink

// Fill background circle
ctx.fillStyle = gradient;
ctx.beginPath();
ctx.arc(16, 16, 15, 0, 2 * Math.PI);
ctx.fill();

// Draw AI/brain symbol
ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';

// Neural network nodes
const nodes = [
  [8, 10], [16, 8], [24, 10],
  [8, 16], [16, 16], [24, 16],
  [8, 22], [16, 24], [24, 22]
];

nodes.forEach(([x, y], i) => {
  ctx.beginPath();
  ctx.arc(x, y, i === 4 ? 2 : 1.5, 0, 2 * Math.PI);
  ctx.fill();
});

// Save as PNG (we'll convert to ICO manually or use online converter)
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('./public/favicon-32x32.png', buffer);

console.log('Favicon generated: favicon-32x32.png');
