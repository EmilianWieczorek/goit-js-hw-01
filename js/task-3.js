"use strict";

function getElementWidth(content, padding, border) {
  const contentValue = Number.parseFloat(content);
  const paddingValue = Number.parseFloat(padding);
  const borderValue = Number.parseFloat(border);

  const width = contentValue + paddingValue * 2 + borderValue * 2;

  //return contentValue + paddingValue * 2 + borderValue * 2;
  console.log(`${width}`);
}
