const fs = require('fs');
const path = require('path');

function getExtension(filename) {
  const [, ext] = filename.split('.');

  return ext;
}

function isImage(filename) {
  const ext = getExtension(filename);
  const imageExtensions = ['png', 'jpg', 'jpeg', 'gif', 'webp'];

  return imageExtensions.includes(ext)
}

function readAsDataUrlSync(filePath) {
  const filename = path.basename(filePath);
  const ext = getExtension(filename);
  const fileContent = fs.readFileSync(filePath, 'base64');

  return `data:image/${ext};base64,${fileContent}`;
}

module.exports = { isImage, toDataUrl: readAsDataUrlSync, getExtension };
