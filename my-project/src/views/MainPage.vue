<template>
    <div>
        <BinanceOrderBook :symbol="symbol" :orderBookData="orderBookData" />
    </div>
</template>

<script>
    import BinanceOrderBook from "@/components/BinanceOrderBook.vue";
    const symbols = {
        BTCUSDT: 'btcusdt@depth',
        BNBBTC: 'bnbbtc@depth',
        ETHBTC: 'ethbtc@depth'
    }

    export default {
        name: "MainPage",
        props: {
            symbol: String,
        },
        components: {
            BinanceOrderBook,
        },
        data() {
            return {
                orderBookData: {
                    bids: [],
                    asks: []
                },
                socket: ''
            };
        },
        watch: {
            symbol(newSymbol, oldSymbol) {
                console.log(newSymbol, oldSymbol)
                if (this.socket) {
                    this.socket.send(this.getUnsubscribeMessage(symbols[oldSymbol]));
                    this.socket.send(this.getSubscribeMessage(symbols[newSymbol]));
                }
            }
        },

        mounted() {
            this.socket = new WebSocket('wss://stream.binance.com:9443/ws');

            this.socket.addEventListener('open', () => {
                this.socket.send(this.getSubscribeMessage(symbols[this.symbol]));
            });


            this.socket.addEventListener('message', (event) => {
                const data = JSON.parse(event.data);
                console.log('Received data:', data);

                if (data.b && data.a) {
                    this.orderBookData = {
                        bids: data.b,
                        asks: data.a,
                    };
                    //console.log(this.orderBookData);
                }
            });

            this.socket.addEventListener('error', (error) => {
                console.error('WebSocket connection error:', error);
            });
        },
        methods: {
            getSubscribeMessage(symbol) {
                const subscribeMsg = JSON.stringify({
                    method: 'SUBSCRIBE',
                    params: [
                        symbol
                    ],
                    id: 1
                });
                return subscribeMsg;
            },
            getUnsubscribeMessage(symbol) {
                const unsubscribeMsg = JSON.stringify({
                    method: 'UNSUBSCRIBE',
                    params: [
                        symbol
                    ],
                    id: 1
                });
                return unsubscribeMsg;
            }
        }

    };
</script>