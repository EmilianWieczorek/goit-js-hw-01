"use strict";

function getElementWidth(content, padding, border) {
  Number.parseFloat(content);
  Number.parseFloat(padding);
  Number.parseFloat(border);
  //const boxSizing = padding * 2;
  //const borderBox = border * 2;
  const width = Number.parseFloat(content + padding + border);
  console.log(`${width}`);
}

//const content = 1;
//const padding = 1;
//const border = 1;
//function getElementWidth(content, padding, border) {
//console.log(content);
//console.log(padding);
//console.log(border);
//const parseFloat = content + padding + border;

//console.log(`${parseFloat}`);
//}
