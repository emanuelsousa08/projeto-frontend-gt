export const formatPrice = (price) => {
  const number = typeof price === 'string' 
    ? Number(price.replace(/\D/g, '')) 
    : price;
  return isNaN(number) ? 0 : number.toFixed(2);
};

// export const formatPrice = (value) => {
//     if (typeof value === 'string') {
//         value = Number(value.replace(/[^0-9.-]+/g, ''));
//     }
//     return isNaN(value) ? '0.00' : value.toFixed(2);
//     };