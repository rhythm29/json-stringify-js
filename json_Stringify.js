function jsonStringify(a){
    if(a === undefined){
          return null;
    }
    if(typeof a === 'object'){
 	        if(a === null){
 		      return null;
 	  }
 	  if(Array.isArray(a)){
          var strarr = '['; 
          for(var i=0 ; i<a.length ; i++){
              strarr = strarr.concat(jsonStringify(a[i]));
              if(i != a.length-1){
                 strarr = strarr.concat(',');
              }
          }
         strarr = strarr.concat(']');
         return strarr;
    }
    var str = '{', count =0;
 	  var len = Object.keys(a).length;
    for(key in a){
        value = a[key];
        count+= 1;
        if(count!= len+1){
           str = str+('"' + key + '"' + ':' +  jsonStringify(value));
        }  
       if(count!= len){         
          str = str.concat(',');
        }
    }
   str = str.concat('}')
   return str;
  }
   else if(typeof a =='string'){
	    return '"' + a + '"';
  }

   else if(typeof a== 'function'){
      return null;
   }
  else {
    return a;
  }

}

var sum=function(x){
  x=x+3;
  return x;
}
var obj=["gcee","efeded","fr3fe", null, undefined, 4, {hi:[1,2,4],isIt:false},sum];
console.log(jsonStringify(obj));
console.log(JSON.stringify(obj));
