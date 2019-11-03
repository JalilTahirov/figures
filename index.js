// 1 filled perfect square

const printFilledSquare = size => {    
    let str = '';    
    for(let j = 0; j < size; j++){
        for(let i = 0; i < size; i++){
            str += '#';
        }
        str += '\n';      
    }    
    console.log(str);
  }  
  
  printFilledSquare(4);
  
  // 2 not filled empty perfect square

const printNotFilledSquare = size => {    
    let str = '';    
    for(let j = 0; j < size; j++){
        for(let i = 0; i < size; i++){
          if(j === 0||j === size-1||i === 0||i === size-1){
            str += '#';
          } else {
            str += ' ';
          }            
        }
        str += '\n';      
    }    
    console.log(str);
  }  
  
  printNotFilledSquare(7);