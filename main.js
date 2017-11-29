function bindFunction(F,a,b) {
    F = F.bind(none.a,b);
    return F;
}
function F(){
  for (var i=0; i<arguments.length; i++){
    console.log(arguments[i])
    }
}
bindFunction(F(),1,2);