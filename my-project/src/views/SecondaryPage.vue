<template>
    <div>
        <DropDown @symbolChanged="handleSymbolChanged" />
        <MessageList :symbol="selectedSymbol" />
    </div>
</template>

<script>
    import DropDown from "@/components/DropDown.vue";
    import MessageList from "@/components/MessageList.vue";

    export default {
        name: "SecondaryPage",
        components: {
            DropDown,
            MessageList,
        },
        data() {
            return {
                selectedSymbol: "BTCUSDT",
            };
        },
        methods: {
            handleSymbolChanged(symbol) {
                this.selectedSymbol = symbol;
            },
        },
    };
</script>
