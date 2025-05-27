function fun(...args){
    return args.reduce((sum,n)=>sum+n)
 
}
console.log(fun(2,3,4,5))