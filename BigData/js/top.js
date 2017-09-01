     var yM  = 'http://dsj.lzxqxx.com/';
	 var str1="";
 


	
	setInterval(fn,1000)
	

function fn (){
       var a=new Date;

          var yy=a.getFullYear();
	  	  var mm=a.getMonth()+1;
	  	  var tiant=a.getDate();


		  var b=a.getHours();
		  var c=a.getMinutes();
		  var dd=a.getSeconds();
          var week = "周" + "日一二三四五六".split(/(?!\b)/)[a.getDay()];

		  if(dd<10){
		  	dd="0"+dd;
		  }
		  if(c<10){
	      
		  	c="0"+c;
		  } 
		

	  str1=yy+"-"+mm+"-"+tiant+" "+b+":"+c+":"+dd+" "+week;
	 

	  
	    $('.span1').html(str1);
//	

             var arrq=[b,mm];
		  		return arrq;
	
}
var fn1=fn();

console.log(document.querySelectorAll(".footer")[0]);
document.querySelectorAll(".footer")[0].innerHTML = "";


	