var arr = [1, 7, 5 ,12, 9]
len =arr.length;
console.log(len);
for (let i = 0; i< len;i++) {
    for (let j= 0; j<len-1;j++){
    if (arr[j] > arr[j+1]){
        var n = arr[j];
        arr[j]=arr[j+1];
    arr[j+1]=n;
   }
 };
};
console.log(arr);