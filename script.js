var numbers = document.querySelectorAll('.number'),
    operations = document.querySelectorAll('.operator'),
    decimal = document.getElementById('decimal'),
    clearBtns = document.querySelectorAll('.clear-btn'),
    display = document.getElementById('display');
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOperation = '';
    console.log(MemoryNewNumber);
    


for( var i = 0; i<numbers.length; i++) {
    var numberBtn = numbers[i];
    numberBtn.addEventListener('click', function(e){
      numberPress(e.target.textContent);
      
  
    });
}

for( var i = 0; i<operations.length; i++) {
  var operation = operations[i];

  operation.addEventListener('click', function(e){
    foperation(e.target.textContent);
    if(e.target.textContent === '-'  ){
    
    display.value = e.target.textContent;
    }
  });

}

for ( var i = 0; i<clearBtns.length; i++) {
  var clear = clearBtns[i];
  clear.addEventListener('click', function (e) {
    fclear(e.srcElement.id);
    
  });
}

decimal.addEventListener('click', fdecimal);



function numberPress(number){
  console.log(MemoryNewNumber);
  if (MemoryNewNumber){
  
    if(display.value === '-') {
      display.value += number;
      MemoryNewNumber = false;
    }

    else {
      display.value = number;
      MemoryNewNumber = false;
    }
    }

   else{
    if (display.value === '0'){
        display.value = number;
    } else if ( display.value === '-') {
      display.value += number;
    }
    else {
    display.value += number;
    }
  }
}

function foperation(op){
  var localOperatonMemory = display.value;
  
  

  if(MemoryNewNumber && MemoryPendingOperation !== '='){
    display.value = MemoryCurrentNumber;
    
  } else {
    MemoryNewNumber = true;
    
    if(MemoryPendingOperation === '+'){
      if(localOperatonMemory<1 && localOperatonMemory > 0 && MemoryCurrentNumber>0 && MemoryCurrentNumber<1){
        let from = localOperatonMemory.split('.');
        let k = from[1].length;
        let MemoryCurrent = MemoryCurrentNumber + parseFloat(localOperatonMemory);
        console.log(MemoryCurrent.length);
        MemoryCurrentNumber = (MemoryCurrent.toFixed(k)/10)*10;

        }
        else{
      MemoryCurrentNumber += parseFloat(localOperatonMemory);}
    } else if (MemoryPendingOperation === '-'){
      if(localOperatonMemory<1 && localOperatonMemory > -1 && MemoryCurrentNumber>-1 && MemoryCurrentNumber<1){
        let from = localOperatonMemory.split('.');
        let k = from[1].length;
        MemoryCurrentNumber -= parseFloat(localOperatonMemory);
        MemoryCurrentNumber = MemoryCurrentNumber.toFixed(k);
        }
        else{
      MemoryCurrentNumber += parseFloat(localOperatonMemory);}
    } else if (MemoryPendingOperation === '*'){
      if(localOperatonMemory<1 && localOperatonMemory > -1 && MemoryCurrentNumber>-1 && MemoryCurrentNumber<1){
        let from1 = localOperatonMemory.split('.');
        console.log(from1[1]);
        let k1 = from1[1].length;
        MemoryCurrentNumber = MemoryCurrentNumber * parseFloat(localOperatonMemory);
        MemoryCurrentNumber = MemoryCurrentNumber.toFixed(k1*2);
        } else {
      MemoryCurrentNumber *= parseFloat(localOperatonMemory);}
    } else if (MemoryPendingOperation === '/'){
      MemoryCurrentNumber /= parseFloat(localOperatonMemory);
    } else if( MemoryPendingOperation === '^'){
      MemoryCurrentNumber = Math.pow(MemoryCurrentNumber, (parseFloat(localOperatonMemory)));
    } else if ( MemoryPendingOperation === '√'){
      if(MemoryCurrentNumber>=0){
      MemoryCurrentNumber = Math.sqrt(MemoryCurrentNumber, (parseFloat(localOperatonMemory)));}
      else {MemoryCurrentNumber = '!ошибка!'}
    }
     else { 
      MemoryCurrentNumber = parseFloat(localOperatonMemory);
    }
    MemoryPendingOperation = op;
    display.value = MemoryCurrentNumber;
    
    
  }
  console.log('click operation ' + MemoryPendingOperation);
}

function fdecimal(argument){
var localDecimalMemory = display.value;
if (MemoryNewNumber){
  localDecimalMemory = '0.';
  MemoryNewNumber = false;
  
}
  else{
    if(localDecimalMemory.indexOf('.') === -1){
    localDecimalMemory +='.';
    }
  }
  display.value = localDecimalMemory;


}


function fclear(id){
  if (id ==='ce'){
    display.value = 0;
    MemoryNewNumber = true;
  
  }
  else if(id === 'c'){
    display.value = 0;
    MemoryNewNumber = true;
    MemoryCurrentNumber = 0;
    MemoryPendingOperation = '';
    a = 0;
  }
}

