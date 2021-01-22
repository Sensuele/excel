import { DomListener } from "@core/DomListener";

export class ExcelComponent extends DomListener {

  constructor($root, options = {}) {
    super($root, options.listeners)
  }

  // return template of component
  toHtml() {
    return ''
  }

  init() {
    this.initDOMListeners()
  }
}