const CODE = {
  A: 65,
  Z: 90
}

function toCell(row) {
  return function(_, col) {
    return `
      <div 
        class="cell" 
        contenteditable="true" 
        data-col="${col}" 
        data-type="cell"
        data-id="${row}:${col}">
      </div>
    ` 
  }  
}
function createRow(index, content) {
  const resize = index ? `<div class="row-resize" data-resize="row"></div>` : ''
  return `
    <div class="row" data-type="resizable">
      <div class="row-info" >
        ${index ? index : ''}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}
function tocolumn(el, index) {
  return `
    <div class="column" data-type="resizable" data-col="${index}">
    ${el}
    <div class="col-resize" data-resize="col"></div>
    </div>`
}

function toChar(_, index) {
  return String.fromCharCode(CODE.A + index) 
}

export function createTable(rowCount = 15) {
  const colCount = CODE.Z - CODE.A + 1
  const rows = []
  const cols = new Array(colCount)
      .fill('')
      .map(toChar)
      .map(tocolumn)
      .join('')

  rows.push(createRow(null, cols))

  for (let row = 0; row < rowCount; row++) {
    const cells = new Array(colCount)
        .fill('')
        .map(toCell(row))
        .join('')

    rows.push(createRow(row + 1, cells))
  }
  
  return rows.join('')
}