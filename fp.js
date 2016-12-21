var data = [
  {
  "origin":"BOS","dest":"LAX","date":"2015-01-12",
  "number":"25","carrier":"AA","delay":0.0,"cancelled":false
  },
  {
  "origin":"BOS","dest":"LAX","date":"2015-01-13",
  "number":"25","carrier":"AA","delay":0.0,"cancelled":false
  }
];

export function airportData() {
  const data = flightData();
  const count = {};
  const cancellations = {};
  const totalDelay = {};
  for ( let row of data) {
    const airport = row.dest;
    if(count[airport] === undefined) {
      count[airport] = 0;
      cancellations[airport] = 0;
      totalDelay[airport] = 0;
    }
    count[airport] ++;
    if(row.cancelled) {
      cancellations[airport]++;
    }else{
      totalDelay[airport] += row.delay;
    }
  }

  const result = {};
  for (let i in count){
    result[i] = {};
    result[i].meanDelay = totalDelay[i] / (count[i] - cancellations[i]);
    result[i].cancellationRate = cancellations[i] / count[i];
  }
  return result;
}

// 用函数式编程改写

import from 'underscore';
export function airportData2() {
  const data = flightData();
  // const working = _.chain(data) // chain(链)函数
  //   .groupBy(r => r.dest)
  //   .mapObject((val, key) => {return {
  //     count: val.length，
  //     cancelations: val.filter(r => r.cancelled).length
  //   }})
  //   .value(); // 设定一个变量

  const summarize = function(rows) {
    return {
      count : row.length,
      cancellations: rows.filter(r => r.cancelled).length,
      totalDelay:  row.filter(r => !r.cancelled)
                      .map(r => r.delay)
                      .reduce((acc, eahc) => acc + each.delay, 0)
    }
  };

  const formResult = function(row) {
    return {
      meanDelay: row.totalDelay / (row.count - row.cancellations),
      cancellationRate: row.cancellations / row.count
    }
  }

  let working = _.chain(data)
    .groupBy(r => r.dest)
    .mapObject(summarize)
    .mapObject(formResult)
    .value();
  return working;

  // const count = {};
  // const cancellations = {};
  //const totalDelay = {};
  // for ( let row of data) {
  //   const airport = row.dest;
  //   if(count[airport] === undefined) {
  //     count[airport] = 0;
  //     cancellations[airport] = 0;
  //     //totalDelay[airport] = 0;
  //   }
  //   count[airport] ++;
    // if(row.cancelled) {
    //   cancellations[airport]++;
    // }else{
    //   totalDelay[airport] += row.delay;
    // }
  }

  // const result = {};
  // for (let i in count){
  //   result[i] = {};
  //   result[i].meanDelay = totalDelay[i] / (count[i] - cancellations[i]);
  //   result[i].cancellationRate = cancellations[i] / count[i];
  // }
  // return result;
}
