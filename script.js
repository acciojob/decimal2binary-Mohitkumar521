function decimalToBinary(decimal) {
    if (decimal < 0) {
        return "Negative numbers are not supported.";
    } else if (decimal === 0) {
        return "0";
    } else {
        let binary = "";
        while (decimal > 0) {
            const remainder = decimal % 2;
            binary = remainder + binary;
            decimal = Math.floor(decimal / 2);
        }
        return binary;
    }
}