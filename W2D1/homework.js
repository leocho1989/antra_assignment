Array.prototype.myReduce = function (callback, acc) {
  const array = this.slice();
  if (typeof acc === 'undefined') {
    acc = array.shift();
  }

  array.myEach(el => {
    acc = callback(acc, el);
  });

  return acc;
};


Array.prototype.myFilter = function (callback) {
  const result = [];

  this.myEach((el) => {
    if (callback(el)) result.push(el)
  });
  
  return result;
};


Array.prototype.mySome = function (callback) {
  let some = false;

  this.myEach(el => {
    if (callback(el)) some = true;
  });

  return some;
};