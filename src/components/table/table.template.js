const CODE = {
  A: 65,
  Z: 90
}

function toCell(_, col) {
  return `
    <div class="cell"  contenteditable="true" data-col="${col}"></div>
  `  
}
function createRow(content, i) {
  const resize = i ? `<div class="row-resize" data-resize="row"></div>` : ''
  return `
    <div class="row" data-type="resizable">
      <div class="row-info" >
        ${i ? i : ''}
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

  rows.push(createRow(cols, null))

  for (let i = 0; i < rowCount; i++) {
    const cells = new Array(colCount)
        .fill('')
        .map(toCell)
        .join('')

    rows.push(createRow(cells, i + 1 ))
  }
  
  return rows.join('')
}