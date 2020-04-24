export const recordQuantityHistory = (data) => {
    let historyLastIndex = data.quantityHistory.length - 1;
    let historyLastValue = data.quantityHistory[historyLastIndex];

    if (parseInt(historyLastValue, 10) !== parseInt(data.quantity, 10)) {
        data.quantityHistory.push(data.quantity);
        if (data.quantityHistory.length > 5) {
            data.quantityHistory.splice(0, data.quantityHistory.length - 5);
        }
    }
    return data;
};

export const recordPriceHistory = (data) => {
    let currentTime = Date.now();
    let historyLastIndex = data.priceHistory.length - 1;
    let historyLastValue = data.priceHistory[historyLastIndex];

    if (parseFloat(historyLastValue[1]) !== parseFloat(data.price)) {
        data.priceHistory.push([currentTime, data.price]);
        if (data.priceHistory.length > 5) {
            data.priceHistory.splice(0, data.priceHistory.length - 5);
        }
    }
    return data;
};