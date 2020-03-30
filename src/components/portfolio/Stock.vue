<template>
    <div class="col-md-6 col-sm-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <small>
                        (Price: {{ stock.price }} | Quantity: {{ stock.quantity }})
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
                            @click="sellStock"
                            :disabled="quantity <= 0"
                    >Sell</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

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
      ...mapActions({
            placeSellOrder: 'sellStock'
      }),
      sellStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity
        };
        this.placeSellOrder(order);
        this.quantity = 0;

        //This is another way to access sellStock action from the store
        // this.$store.dispatch('sellStock', order)

      }
    }
  }
</script>

<style scoped>

</style>
