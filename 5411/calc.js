exports.div=function(a,b,callback){
    if(b==0)
        callback("Error!division by zero",null)
    else
        callback(null,a/b)
}