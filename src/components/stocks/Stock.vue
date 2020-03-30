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
                           placeholder="Quantity">
                </div>
                <div class="pull-right">
                    <button class="btn btn-success">Buy</button>
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
        type: Array,
        default: ''
      }
    },
  }
</script>

<style scoped>

</style>
