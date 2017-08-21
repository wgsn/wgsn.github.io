
	 var str1="";
 
//
//	function getD(data){
//			 console.log(data)
//		 var d=data.results[0];
//		
//		  var str2="";
//		   var str3="";
//		   var bb="";
//		 var w=d.weather_data;
//
//	   	str2=" 温度："+w[0].temperature;
//		 	str3="天气："+w[0].weather;
//          $('.span2').html(str2);
//          $('.span3').html(str3);
//          
// 
//		  		
//		  
//
//	}
//	
//	

	
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


	