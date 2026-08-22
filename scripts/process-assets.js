const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processImages() {
  const assetsDir = path.join(__dirname, '..', 'public', 'assets');
  const badgePath = path.join(assetsDir, 'jon-logo-badge.png');
  const menuPosterPath = path.join(assetsDir, 'jon-menu-poster.jpg');

  const meta = await sharp(badgePath).metadata();
  console.log('Badge size:', meta.width, meta.height);

  // 1. Clean Circular Badge with transparent outside
  const cx = Math.round(meta.width / 2);
  const cy = Math.round(meta.height / 2);
  const radius = Math.round(Math.min(meta.width, meta.height) * 0.47);
  
  const croppedBadge = await sharp(badgePath)
    .extract({
      left: Math.max(0, cx - radius),
      top: Math.max(0, cy - radius),
      width: radius * 2,
      height: radius * 2
    })
    .toBuffer();

  const circleMask = Buffer.from(
    `<svg width="${radius * 2}" height="${radius * 2}">
      <circle cx="${radius}" cy="${radius}" r="${radius - 2}" fill="white" />
    </svg>`
  );

  await sharp(croppedBadge)
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toFile(path.join(assetsDir, 'jon-badge-circle.png'));
  console.log('Created jon-badge-circle.png');

  // Menu poster
  const menuMeta = await sharp(menuPosterPath).metadata();
  console.log('Menu poster size:', menuMeta.width, menuMeta.height);

  const w = menuMeta.width;
  const h = menuMeta.height;

  // Mascot Focused (Top Left)
  await sharp(menuPosterPath)
    .extract({
      left: Math.round(w * 0.03),
      top: Math.round(h * 0.04),
      width: Math.round(w * 0.33),
      height: Math.round(h * 0.26)
    })
    .png()
    .toFile(path.join(assetsDir, 'mascot-focused.png'));
  console.log('Created mascot-focused.png');

  // Mascot Surprised (Top Right)
  await sharp(menuPosterPath)
    .extract({
      left: Math.round(w * 0.65),
      top: Math.round(h * 0.04),
      width: Math.round(w * 0.32),
      height: Math.round(h * 0.26)
    })
    .png()
    .toFile(path.join(assetsDir, 'mascot-surprised.png'));
  console.log('Created mascot-surprised.png');

  // Jon Coffees Logo center
  await sharp(menuPosterPath)
    .extract({
      left: Math.round(w * 0.26),
      top: Math.round(h * 0.04),
      width: Math.round(w * 0.48),
      height: Math.round(h * 0.24)
    })
    .png()
    .toFile(path.join(assetsDir, 'jon-brand-logo.png'));
  console.log('Created jon-brand-logo.png');

  // Bottom Mascot duo
  await sharp(menuPosterPath)
    .extract({
      left: Math.round(w * 0.54),
      top: Math.round(h * 0.73),
      width: Math.round(w * 0.42),
      height: Math.round(h * 0.15)
    })
    .png()
    .toFile(path.join(assetsDir, 'mascot-duo.png'));
  console.log('Created mascot-duo.png');
}

processImages().catch(console.error);
