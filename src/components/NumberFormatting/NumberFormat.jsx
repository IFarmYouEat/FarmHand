function NumberFormat(prop) {

    const formattedNumber = Intl.NumberFormat("en-US").format(prop.number);
    return formattedNumber;
}

export default NumberFormat;