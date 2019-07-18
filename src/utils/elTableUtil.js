import _ from 'lodash';

function nullValueFormatter(row, col, value) {
  return _.isUndefined(value) ? '-' : value;
}

function numberForamtter(row, col, value) {
  const resultValue = !Number.isNaN(value) ? 0 : value;

  return resultValue.toLocaleString();
}

export { nullValueFormatter, numberForamtter };
