<template>
    <div>
        <app-stock v-for="stock in stocks"
                   :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock.vue'

  export default {
    name: "Stocks",
    components: {
      appStock: Stock,
    },
    data() {
      return {
        stocks: [
          { id: 1, name: 'BMW', price: 120 },
          { id: 2, name: 'Google', price: 1200 },
          { id: 3, name: 'Amazon', price: 220 },
          { id: 4, name: 'Apple', price: 1100 },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
