<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
  <div id="aaa">
    <div>
      <p>ppppp</p>
    </div>
    <div>div</div>
  </div>
</template>

<style lang="less" scoped>
#aaa {
  div {
    font-size: 18px;
    color:blue;
  }

  p {
    color: red
  }
}

button {
  font-weight: bold;
}
</style>