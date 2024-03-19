function formatCurrencyInput(value) {
    if (typeof value !== 'string' || value.match(/\D/)) {
        console.error('The parameter value is not a valid currency input');
        return '';
    }

    const cleanValue = value.replace(/\D/g, '');

    if (cleanValue.length === 0) {
        return '0,00';
    }

    let integerPart = cleanValue.slice(0, -2).replace(/^0+/, ''); // Remove leading zeros
    let decimalPart = cleanValue.slice(-2).padStart(2, '0');

    return `${integerPart || '0'},${decimalPart}`;
}

export default formatCurrencyInput;
