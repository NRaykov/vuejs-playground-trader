<template>
    <div class="col-md-6 col-sm-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>
                        (Price: {{ stock.price }})
                    </small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number"
                           class="form-control"
                           placeholder="Quantity"
                           v-model="quantity">
                </div>
                <!-- TODO Make Validation for none integer values -->
                <div class="pull-right">
                    <button class="btn btn-success"
                            @click="buyStock"
                            :disabled="quantity <= 0"
                            >Buy</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: "Stock",
    props: {
      stock: {
        type: Object,
        default: ''
      }
    },
    data() {
      return {
        quantity: 0
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        console.log(order);
        this.quantity = 0;
      }
    }
  }
</script>

<style scoped>

</style>
