# Blockly-HTML
Blockly blocks and generators for HTML generation and a demo with live preview.

這個程式可以用區塊拖拉來建構HTML網頁原始碼

The demo can be tested here: http://blocklyhtml.zgtm.de/

A German demo is available as well: http://htmlbausteine.zgtm.de/

中文的試用可以在這裡看到: https://bestian.github.io/blockly-html/

<img src="screenshot.png" width="500" alt="Screenshot" />

## Try the demo

The files `blockly_compressed.js`, `blocks_compressed.js`, `javascript_compressed.js` and  `msg/js/zh-hant.js` and `msg/js/en.js`
of the Blockly repository need to be present in the directory `blockly`.

You can simply checkout the repository https://github.com/google/blockly or unzip https://github.com/google/blockly/archive/master.zip into the directory `blockly`.
Or you can pick the files above manually to create an environment you can distribute without moving the whole Blockly source code around.

The demo saves the workspace in the local browser storage. 
Additionally, it supports importing and exporting blocks (Blockly XML) and exporting the HTML document.

A English localisation of the demo can be enabled by loading `en.js` instead of `zh-hants.js` in the header of the HTML file. (This also needs `msg/js/en.js` from Blockly.)

A German localisation of the demo can be enabled by loading `de.js` instead of `zh-hants.js` in the header of the HTML file. (This also needs `msg/js/de.js` from Blockly.)

## Library files

The file `library_html.xml` is block library that can be used to modify the blocks using the Blockly developer tools: https://blockly-demo.appspot.com/static/demos/blockfactory/index.html

## BUG Report & Feature requset

Please send to https://github.com/bestian/blockly-html/issues 
