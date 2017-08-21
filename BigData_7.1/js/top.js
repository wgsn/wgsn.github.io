
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

//footer部分文字的修改
$(".footer span").eq(0).html("鲁公网安备 11000002000088号");
$(".footer span").eq(1).html("鲁ICP证070359号|互联网信息服务资格证编号（鲁）-经营性-2014-0008");
$(".footer span").eq(2).html("新出发鲁零字第大120007号");
