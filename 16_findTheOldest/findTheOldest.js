const getAge = function() {
}

const findTheOldest = function(arr) {
  const sortOldToYoung = arr.sort((a,b) => getAge(a) - getAge(b));
  return sortOldToYoung[0];
};

// Do not edit below this line
module.exports = findTheOldest;
