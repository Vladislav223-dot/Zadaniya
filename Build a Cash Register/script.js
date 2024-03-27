let cid = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
];

let priceInput = document.getElementById('price');
let cashInput = document.getElementById('cash');
let changeDueDiv = document.getElementById('change-due');
let purchaseBtn = document.getElementById('purchase-btn');
let globalPrice; // Глобальная переменная для хранения значения price

// Cash units and their values
let cashUnits = [
    { name: 'ONE HUNDRED', val: 100.00 },
    { name: 'TWENTY', val: 20.00 },
    { name: 'TEN', val: 10.00 },
    { name: 'FIVE', val: 5.00 },
    { name: 'ONE', val: 1.00 },
    { name: 'QUARTER', val: 0.25 },
    { name: 'DIME', val: 0.10 },
    { name: 'NICKEL', val: 0.05 },
    { name: 'PENNY', val: 0.01 }
];

// Обработчик события для кнопки "Purchase"
purchaseBtn.addEventListener('click', function() {
    let price = parseFloat(priceInput.value); // Получаем значение из поля ввода цены
    globalPrice = price; // Присваиваем значение глобальной переменной
    let cash = parseFloat(cashInput.value);

    // Создаем копию изначального списка денег в кассе
    let cidCopy = cid.slice();
    console.log('cidCopy:', cidCopy); // Добавляем вывод в консоль

    // Scenario: cash is less than price
    if (cash < price) {
        alert('Customer does not have enough money to purchase the item');
        return;
    }

    // Scenario: cash is equal to price
    if (cash === price) {
        changeDueDiv.textContent = 'No change due - customer paid with exact cash';
        return;
    }

    // Scenario: cash is more than price
    let change = checkCashRegister(price, cash, cidCopy);
    console.log('Change:', change); // Добавляем вывод в консоль

    if (change.status === 'INSUFFICIENT_FUNDS') {
        changeDueDiv.textContent = 'Status: INSUFFICIENT_FUNDS';
    } else if (change.status === 'CLOSED') {
        let closedText = 'Status: CLOSED';
        for (let i = 0; i < change.change.length; i++) {
            closedText += ` ${change.change[i][0]}: $${change.change[i][1].toFixed(2)}`;
        }
        changeDueDiv.textContent = closedText;
    } else {
        let changeText = 'Status: OPEN ';
        for (let i = 0; i < change.change.length; i++) {
            changeText += `${change.change[i][0]}: $${change.change[i][1].toFixed(2)} `;
        }
        changeDueDiv.textContent = changeText;
    }
});

function checkCashRegister(price, cash, cid) {
    let output = { status: null, change: [] };
    let change = cash - price;

    // Transform CID array into drawer object
    let register = cid.reduce(function(acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, { total: 0 });

    // Handle exact change
    if (register.total === change) {
        output.status = 'CLOSED';
        output.change = cid;
        return output;
    }

    // Handle insufficient funds
    if (register.total < change) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }

    // Loop through the cashUnits
    let change_arr = cashUnits.reduce(function(acc, curr) {
        let value = 0;
        
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;

            change = Math.round(change * 100) / 100;
        }
        
        if (value > 0) {
            acc.push([ curr.name, value ]);
        }
        return acc; 
    }, []); 

    if (change_arr.length < 1 || change > 0) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }

    output.status = 'OPEN';
    output.change = change_arr;
    return output;
}
