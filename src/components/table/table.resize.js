import {$} from '@core/Dom'
const resizeTable = (event, $root) => {

  if (event.target.dataset.resize) {
    const $resize = $(event.target)
    const $parent = $resize.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    const col = $parent.data.col
    let value

    $resize.css({'opacity': 1})
    const type = $resize.data.resize

    document.onmousemove = ((e) => {
      if (type === 'col') {
        const delta = e.pageX - coords.right
        value = Math.floor(coords.width + delta)  
        $resize.css({
          bottom: '-5000px',
          right: -delta + 'px'
        })     

      } else {
        const delta = e.pageY - coords.bottom
        value = Math.floor(coords.height + delta)

        $resize.css({
          'right': '-5000px',
          'bottom': -delta + 'px'
        })
      }


    })
    document.onmouseup = () => {
      if (type === 'col') {
        $parent.css({'width': value + 'px'})
        $root.findAll(`[data-col="${col}"]`)
            .forEach(el => el.style.width = value + 'px') 
      } else {
        $parent.css({
          'height': value + 'px'
        })
      }


      document.onmousemove = null
      document.onmouseup = null

      $resize.css({
        'opacity': 0,
        'right': 0,
        'bottom': 0
      })
    }

  }
}

export default resizeTable