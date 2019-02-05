
var numberone ;

var numbertwo ;
firstnumber.addEventListener("change",function(){
numberone=Number(this.value);
}) ;
secondnumber.addEventListener("change",function(){
numbertwo=Number(this.value);
}) ;
addbutton.addEventListener("click", function(){

	var sum=numberone+numbertwo;

	document.getElementById("answerdisplay").innerHTML = sum;
});
subtractbutton.addEventListener("click", function(){

	var sub=numberone-numbertwo;

	document.getElementById("answerdisplay").innerHTML = sub;
});
multiplybutton.addEventListener("click", function(){

	var mul=numberone*numbertwo;

	document.getElementById("answerdisplay").innerHTML = mul;
});