      const mixedArray = [8,25,73,13,202,375,21,4,44,78,90,91];



      const isEven = num => { 
        return num % 2 == 0;
      }

        const filtredArr = (arr, filterFn) => {
            
          const answer = [];

          arr.forEach(num => {
            if (filterFn(num)) {
              answer.push(num);
            }
          });
          return answer;
        }
      
      console.log(filtredArr(mixedArray, isEven));


      


      // let filteredNum = "";

      //   for (let i = 0; i < num.length; i++) {
      //     const evenNum = "";

      //     if mixedArray.includes
      //   }