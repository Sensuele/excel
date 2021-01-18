export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = document.createElement('div')
    $root.classList.add('excel')

    this.components.forEach(Component => {
      const $el = document.createElement('div')
      $el.classList.add(Component.classname)

      const component = new Component($el)
      $root.insertAdjacentHTML('beforeend', component.toHTML())
    })

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
  }
}
