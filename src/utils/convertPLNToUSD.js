export const convertPLNToUSD = (PLN) => {

  function validateValue(num) {
    num = parseFloat(num);
  
    if (isNaN(num)) {
      return NaN; 
    } else {
      return formatter.format(num).replace(/\u00a0/g, ' '); 
    }
  }

  const PLNtoUSD = PLN / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return validateValue(PLNtoUSD);
}