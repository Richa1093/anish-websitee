function hi(){
  var a= document.getElementById["Age"].value;
  var b=document.getElementById["Pass"].value;
  var c=document.getElementById["CPass"].value;
  if(a<=13 || b!=c){
    alert("You need to be 13+ to make an account, or your password's do not match.")
  }
}