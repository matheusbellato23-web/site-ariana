import fs from 'fs';

// Read original logo buffer from PDF extraction
const imgBuf = fs.readFileSync('public/extracted_logo_0.jpg');

// Write clean direct PNG/JPG files for maximum browser compatibility
fs.writeFileSync('public/logo_ariana.png', imgBuf);
fs.writeFileSync('public/logo_ariana.jpg', imgBuf);

// Also update SVG files with valid SVG 1.1 + 2.0 namespace image tag
const base64Img = imgBuf.toString('base64');
const dataUrl = `data:image/jpeg;base64,${base64Img}`;

const validSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 840 310" width="100%" height="100%">
  <image xlink:href="${dataUrl}" href="${dataUrl}" x="0" y="0" width="840" height="310" preserveAspectRatio="xMidYMid meet" />
</svg>`;

const validSvgWhite = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 840 310" width="100%" height="100%">
  <g style="filter: drop-shadow(0 0 10px rgba(255,255,255,0.9));">
    <image xlink:href="${dataUrl}" href="${dataUrl}" x="0" y="0" width="840" height="310" preserveAspectRatio="xMidYMid meet" />
  </g>
</svg>`;

fs.writeFileSync('public/logo_ariana.svg', validSvg);
fs.writeFileSync('public/logo_ariana_white.svg', validSvgWhite);

console.log('Fixed logo files generated successfully!');
