// 1 filled perfect square

const printFilledSquare = size => {    
    let str = '';    
    for(let j = 0; j <= size; j++){
        for(let i = 0; i <= size; i++){
            str += '#';
        }
        str += '\n';      
    }    
    console.log(str);
  }  
  
  printFilledSquare(4);
  
  