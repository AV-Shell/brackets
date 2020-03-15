module.exports = function check(str, bracketsConfig) {
  // your solution
  
  // console.log(str, "and the ", bracketsConfig);
  pair_string_array = bracketsConfig.map( (el) => {return el.join("")} );
  // console.log(pair_string_array);
  let find_pair = true;
  while(find_pair)
  {
    find_pair = false;
    for (let i =0; i< pair_string_array.length; i++){
      let num = str.indexOf(pair_string_array[i]);
      if (num >= 0){
        str = str.slice(0,num) + str.slice(num+2);
        find_pair = true; 
      }
    }
  }
  if (str === ''){
    return true;
  }

  return false;
}
