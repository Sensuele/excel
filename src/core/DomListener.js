export class DomListener {
  

  constructor($root) {
    if (!$root) {
      throw new Error(`NO $root provided for DomListener`)
    }
    this.$root = $root
  }
}