import './app3.css'
import $ from 'jquery'

const html = `
  <section id="app3">
    <div class="square"></div>
  </section>
`
const $element = $(html).appendTo('body>.page')

const $square = $('#app3 .square')
const localKey = 'app3.active'
const active = localStorage.getItem(localKey) === 'yes'

// if(active){
//   $square.addClass('active')
// }else{
//   $square.removeClass('active')
// } 
// 等价于下面一行
$square.toggleClass('active', active) //根据 active 的真假选择是否加class

$square.on('click', ()=>{
  if($square.hasClass('active')){
    $square.removeClass('active')
    localStorage.setItem(localKey, 'no')
  }else{
    $square.addClass('active')
    localStorage.setItem(localKey, 'yes')
  }
})