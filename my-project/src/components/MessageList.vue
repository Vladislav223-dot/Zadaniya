<template>
    <ul>
        <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
    </ul>
</template>

<script>
    export default {
        name: "MessageList",
        props: {
            symbol: String,
        },
        data() {
            return {
                messages: [],
            };
        },
        watch: {
            symbol: {
                immediate: true,
                handler(newSymbol) {
                    this.messages.push(`Symbol changed to ${newSymbol}`);
                },
            },
        },
    };
</script>
