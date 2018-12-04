function writeNewStyle(sheet, styleDic) {
  let cssText = sheet.innerText;
  Object.keys(styleDic).forEach(key => {
    cssText = cssText.replace(new RegExp('(:|\\s+)' + key, 'g'), '$1' + styleDic[key]);
  });
  sheet.innerText = cssText;
}

export function replaceStyle(styleDic) {
  let sheets = Array.from(document.styleSheets).map(item => item.ownerNode).filter(item => item.tagName === 'STYLE');
  sheets.map(sheet => {
    writeNewStyle(sheet, styleDic);
  });
}

if (window && !window.StyleReplacer) {
  window.StyleReplacer = replaceStyle;
}
