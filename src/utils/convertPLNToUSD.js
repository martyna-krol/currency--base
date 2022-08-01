export const convertPLNToUSD = (PLN) => {

  function validateValue(num) {
    if (typeof num === 'string' || num instanceof String) {
      return NaN; 
    } else if (typeof num === 'number'){
      if (num > 0) {
        return num;
      } else {
        return 0;
      }
    } else {
      return 'Error';
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
    } else if (typeof num === 'number'){
      return formatter.format(num).replace(/\u00a0/g, ' ');
    } else {
      return 'Error';
    }
  }

  return checkNaN(PLNtoUSD);
}
