// task3

const sortAnagramString = (inputString) => {
  let tempArray=inputString.toLowerCase().split("")
  tempArray.sort();
  return tempArray.join("");
}

const run3 = () => {
  const str1=document.getElementById("String1").value;
  const str2=document.getElementById("String2").value;
  
  const output1=sortAnagramString(str1);
  
  const output2=sortAnagramString(str2);
 
console.log(output1 + "==" + output2 + ": " + (output1===output2));
document.getElementById("outputBool").innerHTML = (output1===output2);
}


