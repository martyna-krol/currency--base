export const convertPLNToUSD = (PLN) => {

  function validateValue(num) {
    if (typeof num === 'string' || num instanceof String) {
      return NaN; 
    } else {
      return num;
    }
  }

  const PLNtoUSD = validateValue(PLN) / 3.5;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  function checkNaN(num) {
    if (isNaN(num) === true) {
      return NaN;
    } else {
      return formatter.format(num).replace(/\u00a0/g, ' ');
    }
  }

  return checkNaN(PLNtoUSD);
}
