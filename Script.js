arr = [13,24,22,14,24,15,14,53,13,55,74];
var sort = arr.sort();
var res = [];
for (var i = 0; i < sort.length; i++) {
if(sort[i] === sort[i+1]){
res.push(arr[i]);
}
}

console.log(res.join())