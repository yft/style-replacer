function writeNewStyle(sheet, styleDic) {
  let cssText = sheet.innerText;
  for (let key in styleDic) {
    if (styleDic.hasOwnProperty(key)) {
      cssText = cssText.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + styleDic[key]);
    }
  }
  sheet.innerText = cssText;
}

export function replaceStyle(styleDic) {
  let sheets = document.styleSheets, len = sheets.length;
  for (let i = 0; i < len; i++) {
    if (sheets[i].ownerNode.tagName === 'STYLE') {
      writeNewStyle(sheets[i].ownerNode, styleDic);
    }
  }
}

if (window && !window.StyleReplacer) {
  window.StyleReplacer = replaceStyle;
}
