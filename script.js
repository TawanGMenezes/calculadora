let display = document.querySelector('.display');
var operator = '';
var a = 0;
var b = 0;
function sum(){
  display.innerHTML += '+'
  operator = '+'
}
function sub(){
  display.innerHTML += '-'
  operator = '-'
}
function div(){
  display.innerHTML += '/'
  operator = '/'
}

const mul = (a,b)=>a*b

function equal(){
  let all = display.innerHTML
  let pos = ''
  let res = ''
  switch (operator){
    case '+':
    pos = all.split('+')
    a = pos[0]
    b = pos[1] 
    res = Number(a) + Number(b);
    display.innerHTML = res
    break;
    case '-':
      pos = all.split('-')
      a = pos[0]
      b = pos[1] 
      res = Number(a) - Number(b);
      display.innerHTML = res
      break;
      case '*':
      pos = all.split('*')
      a = pos[0]
      b = pos[1] 
      res = Number(a) * Number(b);
      display.innerHTML = res
      break;
      case '/':
        pos = all.split('/')
        a = pos[0]
        b = pos[1] 
        res = Number(a) / Number(b);
        display.innerHTML = res
        break;
  }
    
  }



function ac(){
  display.innerHTML = ''
}
function one(){

  display.innerHTML += '1'
}
function two(){

  display.innerHTML += '2'
}

function three(){
  if(a == ''){
    a = '3'
  }else{
    b='3'
  }
  display.innerHTML += '3'
} 
function four(){
  if(a == ''){
    a = '4'
  }else{
    b='4'
  }
  display.innerHTML += '4'
} 
function five(){
  if(a == ''){
    a = '5'
  }else{
    b='5'
  }
  display.innerHTML += '5'
} 
function six(){
  if(a == ''){
    a = '6'
  }else{
    b='6'
  }
  display.innerHTML += '6'
} 
function seven(){
  if(a == ''){
    a = '7'
  }else{
    b='7'
  }
  display.innerHTML += '7'
} 
function eight(){
  if(a == ''){
    a = '8'
  }else{
    b='8'
  }
  display.innerHTML += '8'
} 
function nine(){
  if(a == ''){
    a = '9'
  }else{
    b='9'
  }
  display.innerHTML += '9'
} 
function zero(){
  if(a == ''){
  a = '0'
}else{
  b='0'
}
  display.innerHTML += '0'
} 