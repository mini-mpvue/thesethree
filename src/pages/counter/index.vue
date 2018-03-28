<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <h2>Vuex---state示例</h2>
    <ul>
        <li v-for="product in products" :key="product.price">
            <span class="name">{{ product.name }}</span>
            <span class="price">${{ product.price }}</span>
        </li>
        <button @click="minusPrice">减少价格</button> 
        <button @click="minusPriceAsync">异步减少价格</button>
    </ul>
    <h2>Vuex---getter示例</h2>
    <ul>
        <li v-for="product2 in products2" :key="product2.price">
            <span class="name">{{ product2.name }}</span>
            <span class="price">${{ product2.price }}</span>
        </li>
    </ul>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  data () {
    return {
      products: store.state.a.products,
      products2: store.getters.saleProducts
    }
  },
  computed: {
    count () {
      return store.state.b.count
    }
  },
  methods: {
    minusPrice() {
      store.commit('minusPrice', 2);
    },
    minusPriceAsync() {
      store.dispatch('minusPriceAsync' ,5) //分发actions中的minusPriceAsync这个异步函数
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}

</script>
<style>
.counter-warp {
  text-align: center;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

ul{
    padding: 0;
    list-style-type: none;
    overflow: hidden;
}
 li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
    float: left;
}
.price{
    font-weight: bold;
    color: #860CE8;
    display: block;
}
</style>
