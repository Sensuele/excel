import { ExcelComponent } from "@core/ExcelComponent"
import { createTable } from "./table.template"

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    })
  }

  toHTML() {
    return createTable()
  }

  onClick() {

  }

  onMousedown() {

  }

  onMousemove() {

  }

  onMouseup() {
    
  }
}