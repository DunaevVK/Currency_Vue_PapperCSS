const URL_BATH = "https://robinsonbangrak.valueplusexchange.com/api/index.php?route=currency";
const URL_DOLLAR = 'https://openexchangerates.org/api/latest.json?app_id=06c297e23a0e49739eb5e22a16e0bbb8'
const URL_MENYALA = 'https://api.moneyshop.io/v1/rates'


// export const eventBus = new Vue()
class currencyValuePlus {
    static getCurrencyValue() {
        return fetch(URL_BATH).then(data => data.json());
    }
}
class currencyDollar {
    static getCurrencyValue() {
        return fetch(URL_DOLLAR).then(data => data.json());
    }
}
class currencyMenyala {
    static getCurrencyValue() {
        return fetch(URL_MENYALA).then(data => data.json());
    }
}

