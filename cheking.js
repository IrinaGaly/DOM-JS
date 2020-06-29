const path = "/descktop/main.html"

const isHtml = path => {
    const neededPart = ".html";
   
   const slicedPath = path.slice(-5);

     if (slicedPath == neededPart) {
        return true;
     }
   }

console.log(isHtml(path));