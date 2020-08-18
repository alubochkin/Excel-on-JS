import {ExcelComponent} from '@core/ExcelComponent'

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'
  toHTML() {
    return `
      <div class="button">
        <i class="material-icons">format_bold</i>
      </div>
      <div class="button">
        <i class="material-icons">format_italic</i>
        </div>
      <div class="button">
        <i class="material-icons">format_underlined</i>
      </div>
      <div class="button">
        <i class="material-icons">format_align_left</i>
      </div>
      <div class="button">
        <i class="material-icons">format_align_center</i>
      </div>
      <div class="button">
        <i class="material-icons">format_align_right</i>
      </div>
      <div>
        <input type="color" list="colorList" 
        name="idColor" id="idColor" value="#000000">
        <datalist id="colorList">
          <option value="#ff0000" label="Красный">
          <option value="#008000" label="Зелёный">
          <option value="#0000ff" label="Синий">
          <option value="#ffffff" label="Белый">
          <option value="#cccccc" label="Серый">
        </datalist>
      </div>
    `
  }
}