const outputElement = document.getElementById('output');
const url = 'http://data.fixer.io/api/latest? access_key =c41d74c8c0bc1d9b54541ef0720457a1';
let data = {
    "success": true,
    "timestamp": 1519296206,
    "base": "EUR",
    "date": "2023-12-09",
    "rates": {
        "AUD": 1.566015,
        "CAD": 1.560132,
        "CHF": 1.154727,
        "CNY": 7.827874,
        "GBP": 0.882047,
        "JPY": 132.360679,
        "USD": 1.23396
    }
}

let request = new Request(url, {
    method: 'POST',
    body: JSON.stringify(data),
    });

fetch(request)
.then(function() {
    outputElement.innerHTML = JSON.stringify(data, null, 2);
    });