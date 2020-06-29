//  const workers = [
// 		{"name":"Jan","salary":500},
// 		{"name":"Liza","salary":1300},
//     {"name":"Kate","salary":3000},
//     {"name":"Jane","salary":900},
//     {"name":"Tomas","salary":1700}
//   ];

//   const getRichWorkers = (workersArr) => {
//     const richWorkers = [];

//     for (i = 0; i < workersArr.length; i++) {
//       const currentWorker = workersArr[i];

//       if (currentWorker.salary > 1000) {
//         richWorkers.push(currentWorker.name);
//       }
//     }
//     return richWorkers;
//   };
    
//   console.log(getRichWorkers(workers));
     



  const workers = [
		{"name":"Jan","salary":500},
		{"name":"Liza","salary":1300},
    {"name":"Kate","salary":3000},
    {"name":"Jane","salary":900},
    {"name":"Tomas","salary":1700}
  ];

  const getRichWorkers = (workersArr) => {
    const richWorkers = [];

    workersArr.forEach(currentWorker => {
      if (currentWorker.salary > 1000) {
        richWorkers.push(currentWorker.name);
      }
    })

    return richWorkers;
  };
    
  console.log(getRichWorkers(workers));