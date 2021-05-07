import data from './data/index'

export default function () {
  return data
    .sort((a, b) => new Date(b.date) - new Date(a.date))
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