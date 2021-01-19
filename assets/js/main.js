let testPerformance = (iterations, func) => {
    let time = Date.now();
  
    if (typeof func === 'function') for (let i = iterations; i--;) func();
  
    return Date.now() - time;
  };
  function test1() {
    let str = myLongStr;
    while (str.indexOf('o') !== -1) str = str.replace('o', '');
    while (str.indexOf('a') !== -1) str = str.replace('a', '');
    while (str.indexOf('e') !== -1) str = str.replace('e', '');
    while (str.indexOf('u') !== -1) str = str.replace('u', '');
    while (str.indexOf('i') !== -1) str = str.replace('i', '');
  }
  
 
  function test2() {
    const reg = new RegExp('[oaeui]', 'gui');
  
    myLongStr.replace(reg, '');
  }
  
  console.log(testPerformance(100, test1)); // time
  console.log(testPerformance(100, test2)); // time
  console.log(testPerformance(100, 12345)); // 0