<template>
  <div id="calculator">
    <h1>MY CALCULATOR</h1>
    <div class="grid-area">

      <div class="item" id="display"> {{nowCurrent ? current : buffer}} </div>
      <div class="item" id="ac" @click="ac()"> AC </div>
      <div class="item" id="plusminus" @click="plusminus()"> +/- </div>
      <div class="item" id="modulo"> % </div>
      <div class="item" id="division" @click="compute('division')"> : </div>
      <div class="item" id="seven" @click="loadIntoBuffer(7)"> 7 </div>
      <div class="item" id="eight" @click="loadIntoBuffer(8)"> 8 </div>
      <div class="item" id="nine" @click="loadIntoBuffer(9)"> 9 </div>
      <div class="item" id="multiply" @click="compute('multiply')"> x </div>
      <div class="item" id="four" @click="loadIntoBuffer(4)"> 4 </div>
      <div class="item" id="five" @click="loadIntoBuffer(5)"> 5 </div>
      <div class="item" id="six" @click="loadIntoBuffer(6)"> 6 </div>
      <div class="item" id="minus" @click="compute('minus')"> - </div>
      <div class="item" id="one" @click="loadIntoBuffer(1)"> 1 </div>
      <div class="item" id="two" @click="loadIntoBuffer(2)"> 2 </div>
      <div class="item" id="three" @click="loadIntoBuffer(3)"> 3 </div>
      <div class="item" id="plus" @click="compute('plus')"> + </div>
      <div class="item" id="zero" @click="loadIntoBuffer(0)"> 0 </div>
      <div class="item" id="dot"> . </div>
      <div class="item" id="equals" @click="execute()"> = </div>
    </div>
    <p>{{ 'current : ' + current}}</p>
    <p>{{ 'buffer : ' + buffer}}</p>
    <p>{{ 'nowCurrent : ' + nowCurrent}}</p>
    <p>{{ 'writeToCurrent : ' + writeToCurrent}}</p>
    <p>{{ 'operation : ' + operation}}</p>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Calculator',
  data () {
    return {
      current: 0,
      buffer: 0,
      nowCurrent: true,
      writeToCurrent: true,
      operation: null,
      reseted: true
    }
  },
  methods: {
    ac() {
      this.current = 0;
      this.reset();
    },
    plusminus() {
      this.current = -this.current;
      this.reset();
    },
    loadIntoBuffer(x) {
      if(this.writeToCurrent){
        this.reseted ? this.current = 0 : null
        this.current = this.current*10 + x;
        this.reseted = false;
      }else {
        this.nowCurrent = false;
        this.buffer = this.buffer*10 + x;
      }
    },
    compute(operation) {
      this.writeToCurrent = false;
      this.operation = operation;
    },
    execute() {
      switch (this.operation) {
        case 'plus':
        this.current = this.current + this.buffer
        break;
        case 'minus':
        this.current = this.current - this.buffer
        break;
        case 'multiply':
        this.current = this.current * this.buffer
        break;
        case 'division':
        this.current = this.current / this.buffer
        break;
      }
      this.nowCurrent = true;
      this.reset();
    },
    reset() {
      this.buffer = 0;
      this.nowCurrent = true;
      this.writeToCurrent = true;
      this.operation = null;
      this.reseted = true;
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
    grid-column: 1 / 3;
  }
  #display {
    grid-column: 1 / 5; /* start at col-line-1 end at col-line-5 */
  }
</style>
