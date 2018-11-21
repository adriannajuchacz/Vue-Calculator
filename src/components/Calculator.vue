<template>
  <div id="calculator">
    <h1>MY CALCULATOR</h1>
    <div class="grid-area">
      <div class="item" id="display"> DISPLAY </div>
      <div class="item" id="ac"> AC </div>
      <div class="item" id="plusminus"> +/- </div>
      <div class="item" id="modulo"> % </div>
      <div class="item" id="division"> : </div>
      <div class="item" id="seven"> 7 </div>
      <div class="item" id="eight"> 8 </div>
      <div class="item" id="nine"> 9 </div>
      <div class="item" id="multiply"> x </div>
      <div class="item" id="four"> 4 </div>
      <div class="item" id="five"> 5 </div>
      <div class="item" id="six"> 6 </div>
      <div class="item" id="minus"> - </div>
      <div class="item" id="one"> 1 </div>
      <div class="item" id="two"> 2 </div>
      <div class="item" id="three"> 3 </div>
      <div class="item" id="plus"> + </div>
      <div class="item" id="zero"> 0 </div>
      <div class="item" id="dot"> . </div>
      <div class="item" id="equals"> = </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Calculator',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #calculator {
    width: 50%;
    text-align: center;
    margin: auto;
  }
  .grid-area {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /*  each column 4 parts 1fr each */
    grid-auto-rows: minmax(50px, auto); /* min 50px, if one bigger all will adjust height*/

  }
  .item {
    margin: 5px;
    background: lightgrey;
  }
  #zero {
    grid-column: 1/3;
  }
  #display {
    grid-column: 1 / 5; /* start at col-line-1 end at col-line-5 */
  }
</style>
