const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ];

function createArrayOfArrays(arr) {
    return newArr = arr.map(a => [a.toLowerCase(), a.substring(0,3), a.length]);
  };

console.log(createArrayOfArrays(countries));