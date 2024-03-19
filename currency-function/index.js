function formatCurrencyInput(value) {
    if (typeof value !== 'string' || value.match(/[^\d.,]/)) {
        console.error('The parameter value is not a valid, since is not a string');
        return ''
    }
    value = value.replace(/\D/g, '');

    if (value.length >= 5 && value.startsWith("00")) {
        value = value.slice(2);
    }

    if (value.length > 2) {
        value = value.slice(0, -2) + ',' + value.slice(-2); 
        if (value.startsWith("0")){
            value = value.slice(1);
        }
    } 

    else if (value.length === 1){
        value = '0,0' + value;
    } 

    else {
        value = '0,' + value;
    }

    return value;
}

export default formatCurrencyInput;
