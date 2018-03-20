function countAllFromTown(regNum){
  console.log(regNum);
  var number =regNum.split(',');
   var paarl=[];
  for (var i=0;i<number.length;i++){
    if (number[i].startsWith('CL')){
    paarl.push(number);

    }
  }
  return paarl.length;

}
