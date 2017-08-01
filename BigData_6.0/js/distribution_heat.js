var chart = echarts.init(document.getElementById('main'));

var eluosi=document.querySelector(".eluosi");
var meiguo=document.querySelector(".meiguo");
var faguo=document.querySelector(".faguo");
setTimeout(function(){
	eluosi.style.color="black";
	meiguo.style.color="black";
	faguo.style.color="black";
	
},300)

chart.setOption({
     

	
//   roam: true,
     series: [{

     data:[
     	{name:'23.7%',itemStyle:{emphasis:{label:{show:false},areaColor:'rgb(202,74,75)',color:'transparent'},normal:{label:{textStyle:{fontSize:'1'}}}}},
      	{name:'',itemStyle:{emphasis:{areaColor:'white'},normal:{label:{textStyle:{color:'black',fontSize:'30'}}}}},
      	{name:'5.3%',itemStyle:{emphasis:{areaColor:'rgb(254,217,138)'},normal:{label:{textStyle:{color:'black',fontSize:'14'}}}}},
      	{name:'1.2%',itemStyle:{emphasis:{areaColor:'rgb(202,154,122)'},normal:{label:{textStyle:{color:'black',fontSize:'20'}}}}},
      	{name:'4.5%',itemStyle:{emphasis:{areaColor:'rgb(254,217,138)'},normal:{label:{textStyle:{color:'black',fontSize:'16'}}}}},
      	{name:'5.8%',itemStyle:{emphasis:{areaColor:'rgb(223,199,117)'},normal:{label:{textStyle:{color:'black',fontSize:'14'}}}}},
      	{name:'7.5%',itemStyle:{emphasis:{label:{show:false},areaColor:'rgb(252,242,111)',color:'transparent'},normal:{label:{textStyle:{fontSize:'19'}}}}},
      	{name:'9.5%',itemStyle:{emphasis:{areaColor:'pink'},normal:{label:{textStyle:{color:'black',fontSize:'14'}}}}},
      	{name:'4.4%',itemStyle:{emphasis:{areaColor:'yellowgreen'},normal:{label:{textStyle:{color:'black',fontSize:'16'}}}}},
      	{name:'9.9%',itemStyle:{emphasis:{areaColor:'teal'},normal:{label:{textStyle:{color:'black',fontSize:'14'}}}}},
      	{name:'3.4%',itemStyle:{emphasis:{label:{show:false},areaColor:'rgb(8,33,78)',color:'transparent'},normal:{label:{textStyle:{fontSize:'14'}}}}},
      	{name:'8.9%',itemStyle:{emphasis:{areaColor:'rgb(254,217,138)'},normal:{label:{textStyle:{color:'black',fontSize:'14'}}}}},
      	{name:'5.6%',itemStyle:{emphasis:{areaColor:'orange'},normal:{label:{textStyle:{color:'black',fontSize:'14'}}}}},
      	{name:'9.4%',itemStyle:{emphasis:{areaColor:'pink'},normal:{label:{textStyle:{color:'black',fontSize:'14'}}}}},
      	{name:'7.7%',itemStyle:{emphasis:{areaColor:'white'},normal:{label:{textStyle:{color:'black',fontSize:'14'}}}}},
      	
      ],	
       
      type: 'map',
      map: 'world',
           

            itemStyle:{
//          	left:'10%',
 
       
				normal:{
//				    formatter: '{c}',
					areaColor:'#8b415c',//地图颜色 
					label:{
						
							show:true,  //显示文本标签
							textStyle: {
							   color: 'transparent'
								},
													
						  },
					borderColor: '#b8738d',//边界颜色
					borderWidth: 0.5,
							},
							
							
				    emphasis:{
	             
					  areaColor:'#8b415c',	 //区块hover时的颜色
					},		
				},	
     }]
 });    
 

 
 chart.on('click',function(params){
 	var country=params.name;
 	if(country==''){
 		window.location.href='../contury_detail/contury_detail_010.html';
 	}else if(country=='5.3%'){
 		window.location.href='../contury_detail/contury_detail_014.html';
 	}else if(country=='1.2%'){
 		window.location.href='../contury_detail/contury_detail_007.html';
 	}else if(country=='4.5%'){
 		window.location.href='../contury_detail/contury_detail_009.html';
 	}else if(country=='23.7%'){
 		window.location.href='../contury_detail/contury_detail_001.html';
 	}else if(country=='5.8%'){
 		window.location.href='../contury_detail/contury_detail_013.html';
 	}else if(country=='7.5%'){
 		window.location.href='../contury_detail/contury_detail_008.html';
 	}else if(country=='9.5%'){
 		window.location.href='../contury_detail/contury_detail_012.html';
 	}else if(country=='4.4%'){
 		window.location.href='../contury_detail/contury_detail_003.html';
 	}else if(country=='9.9%'){
 		window.location.href='../contury_detail/contury_detail_005.html';
 	}else if(country=='3.4%'){
 		window.location.href='../contury_detail/contury_detail_004.html';
 	}else if(country=='8.9%'){
 		window.location.href='../contury_detail/contury_detail_006.html';
 	}else if(country=='5.6%'){
 		window.location.href='../contury_detail/contury_detail_011.html';
 	}else if(country=='9.4%'){
 		window.location.href='../contury_detail/contury_detail_002.html';
 	}else if(country=='7.7%'){
 		window.location.href='../contury_detail/contury_detail_015.html';
 	}
 })

