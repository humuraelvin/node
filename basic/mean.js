function mean(numbers) {
    if (numbers.length == 0) {
        return NaN;
    }
    const sum = numbers.reduce((accumulator, num) => accumulator+num, 0 );
    return sum / numbers.length;
}

    module.exports = mean;