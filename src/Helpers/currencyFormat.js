/* eslint-disable no-nested-ternary */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
export default (
  price,
  useComma = true,
  numberBehindComma = 2,
  prefix = 'Rp',
) => {
  let negative = false;
  if (price < 0) {
    negative = true;
    price *= -1;
  }
  const number_string = price ? price.toString() : '0';
  const split = number_string.split('.');
  if (!Number(split[0]) || (split[1] && !Number(split[1]))) {
    let result = 'Rp 0,';
    if (useComma) {
      for (let i = 0; i < numberBehindComma; i++) {
        result += '0';
      }
    }
    return result;
  }
  let comma = split[1] ? split[1].slice(0, numberBehindComma) : '0';
  if (comma.length < numberBehindComma) {
    const zeroAfter = numberBehindComma - comma.length;
    for (let i = 0; i < zeroAfter; i++) {
      comma += '0';
    }
  }
  const rest = split[0].length % 3;
  let currency = split[0].substr(0, rest);
  const thousand = split[0].substr(rest).match(/\d{3}/gi);

  if (thousand) {
    const separator = rest ? '.' : '';
    currency += separator + thousand.join('.');
  }

  currency = useComma ? `${currency},${comma}` : `${currency}`;
  currency = !prefix ? currency : currency ? `${prefix}${currency}` : '';
  currency = negative ? `-${currency}` : currency;
  return currency;
};
