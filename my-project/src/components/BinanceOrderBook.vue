<template>
    <div class="binance-order-book">
        <h2>Order Book for {{ symbol }}</h2>
        <table>
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(order, index) in orderBookData.bids.slice(0, 10)" :key="'bid_' + index">
                    <td>{{ order[1] }}</td>
                    <td>{{ order[0] }}</td>
                    <td>{{ order[0] * order[1] }}</td>
                </tr>
                <tr v-for="(order, index) in orderBookData.asks.slice(0, 10)" :key="'ask_' + index">
                    <td>{{ order[1] }}</td>
                    <td>{{ order[0] }}</td>
                    <td>{{ order[0] * order[1] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "BinanceOrderBook",
        props: {
            symbol: String,
            orderBookData: Object,
        },
    };
</script>

<style scoped>
    .binance-order-book {
        font-family: Arial, sans-serif;
        max-width: 600px;
        margin: 0 auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        border: 1px solid #ddd;
    }

        table th,
        table td {
            padding: 8px;
            border: 1px solid #ddd;
        }

        table th {
            background-color: #f2f2f2;
        }

        table tbody tr:nth-child(even) {
            background-color: #f9f9f9;
        }

        table tbody tr:hover {
            background-color: #f2f2f2;
        }
</style>
