function yearsAgo(year){
  var bee = new Date();
  var me = bee.getFullYear();

  var see = me - year;
  return see;
}
