import { log } from './log.js'
// import $ from 'jquery'



// let salut = "salut les gens"
// log(salut);


document.getElementById('button').addEventListener('click', () => {
  // import lazyload de jquery
  import('jquery').then( ($) => {
    $('body').css('backgroundColor', 'orange');
  })  
})

