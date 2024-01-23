function PriceFormat(prop){

const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}).format(prop.price);

    return formattedPrice;
}

export default PriceFormat;