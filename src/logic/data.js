import data from './data.json'

export default function () {
  return data
}

export const getTypes = function () {
  return Object.keys(data[0])
}

export const getMeasurementsByType = function (type) {
  return data
    .map(({[type]: value, date}) => {
      return {
        value,
        date
      }
    })
}