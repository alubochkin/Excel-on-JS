import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/Dom';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'
  constructor($root, options) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click', 'keydown'],
      ...options
    })

  }

  init() {
    super.init()

    const input = this.$root.find('#formula-input')
    this.$on('table:select', (event) => {
      const text = event.text()
      input.text(text)
    })
    this.$on('table:click', (event) => {
      const text = event.text()
      input.text(text)
    })
    this.$on('table:input', (event) => {
      const text = event.text()
      input.text(text)
    })
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div id="formula-input" class="input" 
          contenteditable="true" spellcheck="false">
      </div>
    `
  }

  onKeydown(event) {
    const {key} = event
    if (key === 'Enter' || key === 'Tab') {
      event.preventDefault()

      this.$emit('formula:done')
    }
  }

  onInput(e) {
    this.$emit('formula:input', $(e.target).text())
  }
  onClick(e) {
    this.$emit('formula:click', $(e.target).text())
  }
}