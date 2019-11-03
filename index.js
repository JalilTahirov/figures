// 1. filled perfect square

const printFilledSquare = size => {    
    let str = '';    
    for(let j = 0; j < size; j++){
        for(let i = 0; i < size; i++){
            str += '#';
        }
        str += '\n';      
    } 
    console.log("1. filled perfect square ");    
    console.log(str);
  }  
  
  printFilledSquare(7);
  
  // 2. not filled empty perfect square

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
    console.log("2. not filled empty perfect square");   
    console.log(str);
  }  
  
  printNotFilledSquare(7);

  //3. filled right triangle DESCENDING
  const printFilledRightTriangleDescending = size => {    
    let str = '\n';    
  
    for(let j = 0; j < size; j++){
        for(let i = 0; i < size; i++){
          if(j >= i){
            str += '#';
          } else {
            str += ' ';
          }            
        }
        str += '\n';      
    } 
  console.log("3. filled right triangle DESCENDING");
  console.log(str);
}

printFilledRightTriangleDescending(7);

//4. filled right triangle ASCENDING
const printFilledRightTriangleAscending = size => {    
    let str = '\n';    
  
    for(let j = 0; j < size; j++){
        for(let i = 0; i < size; i++){
          if(j > i){
            str += '';
          } else {
            str += '#';
          }            
        }
        str += '\n';      
    } 
    
  console.log("4. filled right triangle ASCENDING");  
  console.log(str);
}

printFilledRightTriangleAscending(7);

//5. Reverse filled right triangle ASCENDING
const printReverseFilledRightTriangleAscending = size => {    
    let str = '';

    for (let j = size-1; j >= 0; j--) {
        for (let i = 0; i < size; i++) {
            if (i < j) {
                str += ' ';
            } else {
                str += '#';
            }
        }
        str += '\n';
    }
    console.log("5. Reverse filled right triangle ASCENDING");
    console.log(str);
}

printReverseFilledRightTriangleAscending(7);  




//6. Reverse filled right triangle DESCENDING
  const printReverseFilledRightTriangleDescending = size => {    
    let str = '';    
  
    for(let j = 0; j < size; j++){
        for(let i = 0; i < size; i++){
          if(i >= j){
            str += '#';
          } else {
            str += ' ';
          }            
        }
        str += '\n';      
    } 
  console.log("6. Reverse filled right triangle DESCENDING");  
  console.log(str);
}

printReverseFilledRightTriangleDescending(7);


//7. NOT filled right triangle ASCENDING
const printNotFilledRightTriangleAscending = size => {    
    let str = '\n';    
  
    for(let j = size; j > 0; j--){
        for(let i = 0; i < size; i++){
          if(i >= j){
            if(j === 1 || j === size-1 || i===size-1){
               str += '#';
            }else{
              str += ' ';
            }
          } else {
            if(i===0 ){
              str += '#';
            }            
          }            
        }
        str += '\n';         
    } 
  console.log("7. NOT filled right triangle ASCENDING");
  console.log(str);
}
printNotFilledRightTriangleAscending(7);


//8. NOT filled right triangle DESCENDING
const printNotFilledRightTriangleDescending = size => {    
    let str = '\n';    
  
    for(let j = 0; j < size; j++){
        for(let i = 0; i < size; i++){
          if(i > j){
            if(j === 0 || j === size-1 || i===size-1){
               str += '#';
            }else{
              str += ' ';
            }            
            
          } else {
            if(i===0 ){
              str += '#';
            }
            
          }            
        }
        str += '\n';         
    } 
  console.log("8. NOT filled right triangle DESCENDING");
  console.log(str);
}

printNotFilledRightTriangleDescending(7);

// 9. Empty open-end, not Filled Sand-Watch
const printNotFilledSandWatch = size => {    
    let str = '\n';    
  
    for(let j = 0; j < size; j++){
        for(let i = 0; i < size; i++){          
            if(j === i || j===size-1-i){
               str += '#';
            }else {
              str += ' ';
            }            
        }
        str += '\n';         
    } 
  console.log("9.  Empty open-end, not Filled Sand-Watch");
  console.log(str);
}
printNotFilledSandWatch(7);

// 10. not filled closed end SandWatch
const printClosedEndNotFilledSandWatch = size => {    
    let str = '\n';    
  
    for(let j = 0; j < size; j++){
        for(let i = 0; i < size; i++){          
            if(j === i || j===size-1-i || j===0 || j===size-1){
               str += '#';
            }else {
              str += ' ';
            }  
          
        }
        str += '\n';         
    } 
  console.log("10. Not filled closed end SandWatch");
  console.log(str);
}
printClosedEndNotFilledSandWatch(7);



