
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
	
	    var okkq=55+a.getSeconds();
	     var wdd=dd-5>0?dd-5:okkq;
	     if(wdd<10){
	      
		  	wdd="0"+wdd;
		  } 
	
//	    var wdd=dd-5>0?dd-5:60-5;
//	    var wc=dd-5>0?c:c-1;
//	 if(wdd<10){
//		  	wdd="0"+wdd;
//		  }
//		  if(wc<10){
//	      
//		  	c="0"+wc;
//		  }

	     $(".tbody .Si-Yi td:nth-child(3)").html(b+":"+c+":"+wdd);
	    
 //获取询盘邮件即时信息时间
//var t=a.getTime()-24*60*60*1000;
//	  	var aa=new Date(t);
//	  	
//	  	 var y=aa.getFullYear();
//	  	 var m=aa.getMonth()+1;
//	  	 var tian=aa.getDate();
//		
//		 
//        bb=y+"年"+m+"月"+tian+"日";
//		   $('.riqi').html(bb);
             var arrq=[b,mm];
		  		return arrq;
	
}
var fn1=fn();


