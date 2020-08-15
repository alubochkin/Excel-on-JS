const CODE = {
  A: 65,
  Z: 90
}

function toCell() {
  return `
    <div class="cell"  contenteditable="true"></div>
  `
}
function createRow(content, i) {
  return `
    <div class="row">
      <div class="row-info">${i ? i : ''}</div>
      <div class="row-data">${content}</div>
    </div>
  `
}
function tocolumn(el) {
  return `
    <div class="column">${el}</div>`
}

function toChar(_, index) {
  return String.fromCharCode(CODE.A + index + 1) 
}

export function createTable(rowCount = 15) {
  const colCount = CODE.Z - CODE.A
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