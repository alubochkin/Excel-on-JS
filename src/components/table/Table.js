import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/Dom'
import {createTable} from '@/components/table/table.template'
import {resizeHandler} from '@/components/table/table.resize'
import {isCell, matrix,
  shouldResize, moveToCell} from '@/components/table/table.functions'
import {TableSelection} from '@/components/table/TableSelection'

export class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input', 'click'],
      ...options
    })

    this.prepare()
  }

  toHTML() {
    return createTable(20)
  }

  prepare() {
    this.selection = new TableSelection()
  }

  init() {
    super.init()
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
    this.$emit('table:select', $cell)

    this.$on('formula:input', text => {
      this.selection.current.text(text)
    })
    this.$on('formula:done', () => {
      this.selection.current.focus()
    })
  }

  onKeydown(event) {
    const keys = [
      'ArrowRight', 'ArrowLeft',
      'ArrowDown', 'ArrowUp',
      'Enter', 'Tab'
    ]

    const {key} = event
    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault()
      const id = this.selection.current.id(true)
      const $next = this.$root.find(moveToCell(key, id))
      this.selection.select($next)

      this.$emit('table:select', $next)
    }
  }
  
  onInput(event) {
    this.$emit('table:input', $(event.target))
  }

  onClick(event) {
    
    const id = this.selection.current.id(true)
    const $next = this.$root.find(moveToCell(event.type, id))
    this.selection.select($next)
    this.$emit('table:click', $next)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
    } else if (isCell(event)) {
      const $target = $(event.target)
      if (event.shiftKey) {
        const $cells = matrix($target, this.selection.current)
            .map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else {
        this.selection.select($target)
      }
    }
  }
}
