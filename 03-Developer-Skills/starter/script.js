// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// don't count in errors
// calculate temperature amplitude

const temperatures = [3, -1, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// what is temperature amplitude?
// diff between highest and lowest in array
// how to calculate it?
// find max, then min, substract
// how to find errors?
// ignore any 'error'

// sub problems
// remove errors by building new array with only temperatures

// find max temp
// find min temp
// calculate temperature amplitude by doing diff

/* const calcTempAmplitude = function (temps) {
  const cleanTemps = [];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] !== 'error') cleanTemps.push(temps[i]);
  }
  let max = cleanTemps[0];
  let min = cleanTemps[0];
  for (let i = 1; i < cleanTemps.length; i++) {
    if (cleanTemps[i] > max) {
      max = cleanTemps[i];
    }
    if (cleanTemps[i] < min) {
      min = cleanTemps[i];
    }
  }
  return max - min;
};

const calcTempAmplitude2 = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const temp = temps[i];
    if (typeof temp !== 'number') continue;
    if (temp > max) max = temp;
    if (temp < min) min = temp;
  }
  return max - min;
};

const temperatureAmplitude = calcTempAmplitude([1, 2, 3, 'error']);
console.log(`Temperature amplitude is ${temperatureAmplitude}`);
console.log(
  `Exercise temperature amplitude is ${calcTempAmplitude2(temperatures)}`
);

// Function should now receive 2 arrays of temperatures

// merge arrays and reuse the calcTempAmplitude
// const newArray = array1.concat(array2);

const calcTempAmplitudeNew = function (temps1, temps2) {
  const temps = temps1.concat(temps2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const temp = temps[i];
    if (typeof temp !== 'number') continue;
    if (temp > max) max = temp;
    if (temp < min) min = temp;
  }
  return max - min;
};

const tempExtra = [30, -10];
console.log(
  `Exercise temperature amplitude is ${calcTempAmplitudeNew(
    temperatures,
    tempExtra
  )}`
); */

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    value: Number(prompt('Degrees celsius')),
  };

  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
