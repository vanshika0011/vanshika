console.log("Hello");

// *
// **
// ***
// ****
// *****

var str= ""

for(var i=1;i<=5;i++){
    for(var j=1;j<=i;j++){
        str+=i
    }
    str+="\n"
}

console.log(str);