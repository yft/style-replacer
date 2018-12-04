# style-replacer

用于批量替换页面内联样式。

示例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>主题色动态切换示例</title>
    <style> .item { width: 100%; height: 60px; } </style>
    <style> .item:nth-child(1) { background: #ccd5ff; } </style>
    <style> .item:nth-child(2) { background: #a3afff; } </style>
    <style> .item:nth-child(3) { background: #7a88ff; } </style>
    <style> .item:nth-child(4) { background: #525dff; } </style>
    <style> .item:nth-child(5) { background: #2930ff; } </style>
    <style> .item:nth-child(6) { background: #0000ff; } </style>
    <style> .item:nth-child(7) { background: #0700d9; } </style>
    <style> .item:nth-child(8) { background: #0c00b3; } </style>
    <style> .item:nth-child(9) { background: #0e008c; } </style>
    <style> .item:nth-child(10) { background: #0e0066; } </style>
    <script src="https://cdn.jsdelivr.net/npm/style-replacer@0.0.1/dist/style-replacer.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/color-series-10@0.0.3/dist/color-series-10.min.js"></script>
</head>
<body>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
    <script>
        function genColorDic(oldColor, newColor) {
            let oldColors = window.ColorSeries10.colorPalette(oldColor);
            let newColors = window.ColorSeries10.colorPalette(newColor);
            let dic = {};
            oldColors.map((c, index) => {
                dic[c] = newColors[index];
            });
            return dic;
        }
        let oldColor = '0000ff';
        let newColor = '';
        let colors = ['ff0000', '00ff00', '0000ff'], curIdx = 0, dic;
        window.onload = function() {
            document.body.onclick = function() {
                newColor = colors[curIdx++];
                curIdx = curIdx >= colors.length ? 0 : curIdx;
                // 生成需要替换的内容新旧映射字典
                dic = genColorDic(oldColor, newColor);
                // 替换样式
                window.StyleReplacer(dic);
                oldColor = newColor;
            };
        };
    </script>
</body>
</html>
```
