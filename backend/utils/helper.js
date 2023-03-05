const helper = (arr1, arr2) => {
    let m = arr1.length;
    let n = arr2.length;
    let s = new Set();
    for (let i = 0; i < m; i++) {
      s.add(arr1[i]);
    }
    let p = s.size;
    for (let i = 0; i < n; i++) {
      s.add(arr2[i]);
    }
  
    if (s.size == p) {
      return true;
    } else {
      return false;
    }
  };
  
  module.exports = helper;
  