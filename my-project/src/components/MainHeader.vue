<template>
  <header>
    <nav>
      <router-link to="/">Page 1</router-link>
      <router-link to="/page2">Page 2</router-link>
    </nav>
    <select @change="handleSymbolChange" v-model="selectedSymbol">
      <option value="BTCUSDT">BTCUSDT</option>
      <option value="BNBBTC">BNBBTC</option>
      <option value="ETHBTC">ETHBTC</option>
    </select>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      selectedSymbol: "BTCUSDT",
    };
  },
  methods: {
    handleSymbolChange() {
      this.$emit("changeSymbol", this.selectedSymbol);
    },
  },
};
</script>

<style scoped>
header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin-right: 10px;
}

select {
  padding: 5px;
}
</style>
