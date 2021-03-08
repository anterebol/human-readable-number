module.exports = function toReadable (num) {
  if (num === 0) {
    return 'zero';
  }
  let value = ['trillion','billion','million','thousand',''];
  let cheki;
  let size = 3;
  let newarray = [];
  let i = 0;
  let chek = 0;
  let window = ' ';
  let answer = '';
  num = num.toString();
  num = ('000000000000000' + num).substr(-15);
  num = num.split('');
  num = num.map(Number);
  for ( i = 0; i < Math.ceil(num.length / size); i++ ) {
      newarray[i] = num.slice((i * size), (i*size) + size);
  }
  for (i = 0; i < newarray.length; i++) {
    for (let k = 0; k < newarray[i].length; k++) {
      cheki = newarray[i];
      chek = chek + cheki[k];
    }
    if (chek > 0) {
      answer = answer + window  + simpleHundred(newarray[i]) + window + value[i];
    } 
  }
  newarray = [];
answer = answer.split(' ');
for (i = 0; i < answer.length; i++) {
  if (answer[i] !== '') {
    newarray.push(answer[i]);
  }
}
answer = '' + newarray[0];
for (i = 1; i < newarray.length; i++) {
  answer = answer + window + newarray[i];
}
  return answer;
}
function simpleHundred (arg) {
  let simpleValue = ['zero','one','two','three','four', 'five','six','seven','eight','nine'];
   let tenValue = ['ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
   let afterTenValue = ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
let window = ' ';
  let str = '';
for ( let i = 0; i < arg.length; i++){
  if (i === 0 && arg[i] > 0 && (arg[i+1] + arg[i+2]) === 0) {
    return str = str + window + simpleValue[arg[i]] + window + 'hundred';
  }
  else if (i === 0 && arg[i] > 0) {
    str = str + window + simpleValue[arg[i]] + window + 'hundred';
  }
  if ( i === 1) {
  if (arg[i] > 1 && arg[i+1] > 0) {
    str = str + window + afterTenValue[arg[i] - 2] + window + simpleValue[arg[i+1]];
}
   else if (arg[i] > 1 && arg[i+1] === 0) {
    str = str + window + afterTenValue[arg[i] - 2];
}
    else if (arg[i] === 1) {
      if (arg[i+1] > 0) {
        str = str + window + tenValue[arg[i+1]];
      }
      else  if (arg[i+1] === 0) {
        str = str + window + tenValue[0];
    }
      }
    else if (arg[i] === 0)  {
      str = str + window + simpleValue[arg[i+1]];
      }  
    }
  }
  return str;
}


