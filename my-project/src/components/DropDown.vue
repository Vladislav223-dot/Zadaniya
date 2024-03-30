<template>
    <div>
        <select v-model="selectedSymbol" @change="handleChange">
            <option value="BTCUSDT">BTCUSDT</option>
            <option value="BNBBTC">BNBBTC</option>
            <option value="ETHBTC">ETHBTC</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "DropDown",
        data() {
            return {
                selectedSymbol: "BTCUSDT",
            };
        },
        methods: {
            handleChange() {
                this.$emit("symbolChanged", this.selectedSymbol);
            },
        },
    };
</script>
