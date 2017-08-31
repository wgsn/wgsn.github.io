$.getJSON('../js/shandong.json', function(data) {
			echarts.registerMap('shandong', data);
			var Liang = echarts.init(document.querySelector('.Zhong-l'));
			option = {
				title:{
						x:'center',
//					link:'http://www.baidu.com',  
//					subtext:'假的',
//					itemGap:60
				},
				textStyle:{
					
					color:'#fff',
				},
				
				tooltip:{
					trigger:'item',
					formatter: function(params) {
						var value = params.value + '万美元 ' ;
						return params.seriesName + '<br/>' + params.name + ' : ' + value;
					}
				},
				legend:{
				},
				series:[
				    {
				    	type:'map',
				    	name:'成交总额度',
				    	map:'shandong',
				    	roam:true,//滚轮缩放
				    	scaleLimit:{
				    		min:1,
				    		max:1.5,
				    	},
				    	itemStyle:{
				    		normal:{
				    			areaColor:'#0E345A',
				    			label:{
				    				show:true,
				    				textStyle:{
				    					color:'#fff',
				    					fontSize:15,
				    					fontWeight:'bold',
				    				},
				    			},
				    			borderColor:'#74A0C9',
				    			borderWidth:3,
				    		},
				    		emphasis:{
				    		  areaColor:'#CA9A7A',
				    			label:{
				    				show:true,
				    				textStyle:{
				    					color:'#FFA500',
				    					fontWeight:'bold',
				    					fontSize:15,
				    				}
				    			 },
				    		},
				    	},
				    	data:[
				        {name: '威海市',value: Math.round(Math.random()*1000)},  
                        {name: '烟台市',value: Math.round(Math.random()*1000)},  
                        {name: '东营市',value: Math.round(Math.random()*1000),itemStyle:{normal:{color:'#DACFCB'}}},  
                        {name: '滨州市',value: Math.round(Math.random()*1000)},  
                        {name: '德州市',value: Math.round(Math.random()*1000)},  
                        {name: '济南市',value: Math.round(Math.random()*1000)},  
                        {name: '聊城市',value: Math.round(Math.random()*1000)},  
                        {name: '淄博市',value: Math.round(Math.random()*1000)},  
                        {name: '潍坊市',value: 3142.797},  
                        {name: '青岛市',value: Math.round(Math.random()*1000)},  
                        {name: '泰安市',value: Math.round(Math.random()*1000)},  
                        {name: '莱芜市',value: Math.round(Math.random()*1000)},  
                        {name: '日照市',value: Math.round(Math.random()*1000)},  
                        {name: '临沂市',value: 7828.76},  
                        {name: '菏泽市',value: Math.round(Math.random()*1000)},  
                        {name: '枣庄市',value: Math.round(Math.random()*1000)},  
                        {name: '济宁市',value: Math.round(Math.random()*1000)},  
				        ]
				    }
				],
			}
			Liang.setOption(option);
			Liang.on('click',function(params){
            var city = params.name;
            if( city == '威海市'){
            	window.location.href = 'HaiWei.html';
            }
            if(city == '烟台市'){
            	window.location.href = 'YanTai.html';
            }
            if(city == '东营市'){
            	window.location.href = 'DongYing.html';
            }
            if(city == '滨州市'){
            	window.location.href = 'BingZhou.html';
            }
            if(city == '德州市'){
            	window.location.href = 'DeZho.html';
            }
            if(city == '济南市'){
            	window.location.href = 'JiNan.html';
            }
            if(city == '聊城市'){
            	window.location.href = 'LiaoCheng.html';
            }
            if(city == '淄博市'){
            	window.location.href = 'ZIBo.html';
            }
            if(city == '潍坊市'){
            	window.location.href = 'WeiFang.html';
            }
            if(city == '青岛市'){
            	window.location.href = 'QingTAo.html';
            }
            if(city == '泰安市'){
            	window.location.href = 'TaiAn.html';
            }
            if(city == '莱芜市'){
            	window.location.href = 'LaiWu.html';
            }
            if(city == '日照市'){
            	window.location.href = 'RiZhao.html';
            }
            if(city == '临沂市'){
            	window.location.href = 'LinYi.html';
            }
            if(city == '菏泽市'){
            	window.location.href = 'HeZi.html';
            }
            if(city == '枣庄市'){
            	window.location.href = 'ZaoZhuang.html';
            } 
            if(city == '济宁市'){
            	window.location.href = 'jiNing.html';
            }
			})




var Ming = echarts.init(document.querySelector('.Ming'));
 optionC ={
 	textStyle:{
			color:'#fff',
			fontSize:"15",
		},
 	title:{
 		x:'top',
 		text:'2017年东营市IP访问量趋势图(/次)',
 		textStyle:{
 			color:'#dfb050',
 			fontSize:15,
 		}
 	},
 	tooltip:{
 		trigger:'axis',
 	},
 	legend:{
 		data:['东营市IP访问量'],
 		right:'8%',
 		top:'9%',
 		textStyle:{
 			fontSize:12,
 			color:'#fff',
 		}
 	},
	xAxis:[{
		type:'category',
		data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
	}],
	yAxis:[{
		type:'value',
			min: 5000,
			max: 22000,
			interval: 6000,
	}],
	series:[
	    {
	    	name:'东营市IP访问量',
	    	type:'line',
	    	lineStyle: {
	            normal: {
	                width: 2,
	                 type: 'dashed'
	            }
	        },
	    	itemStyle:{
	    		normal:{
	    			color:'#FF5632',
	    			label:{
	    				show:false,
	    				position:'top'
	    			}
	    		}
	    	},
			data: [5112,6973,16132,21135,20310,19663,17312,18145,15137,10000,10000,10000]
	    }
	   ]
};	
	Ming.setOption(optionC);
	
	
	
	
	
	
var Zha = echarts.init(document.querySelector('.Zha'));
	optionQ= {
		textStyle:{
			color:'#fff',
			fontSize:"15",
		},
		title:{
 		text:'2017东营市成交量趋势图(/单)',
 		textStyle:{
 			color:'#dfb050',
 			fontSize:15,
 		}
 	},
		tooltip:{
			trigger:'axis'
		},
		legend:{
 		data:['用户总数量','成交总数量'],
 		right:'10%',
 		top:'9%',
 		textStyle:{
 			fontSize:12,
 			color:'#fff',
 		}
 	},
		xAxis:[{
			type:'category',
		    data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		}],
		yAxis:[{
			min: 0,
			max: 100,
			interval: 20
		}],
		series:[
		    { 
		    	type:'bar',
		     	name:'用户总数量',
		    	itemStyle:{
		    		normal:{
		    			color:'#FF5632',
		    			label:{
		    				show:false,
		    			color:"#3CD3FF"
		    			}
		    		},
		    	},
		    	barWidth:15,
				data: [15, 21, 26, 59, 52, 41, 47, 41, 42, 50, 50, 50]
		    },
		    {
		    	type:'line',
		    	name:'成交总数量',
		    	lineStyle: {
	            normal: {
	                width: 2,
	                 type: 'dashed'
	            }
	        },
		    	itemStyle:{
		    		normal:{
		    			color:"#3CD3FF"
		    		}
		    	},
				data: [15, 21, 26, 59, 52, 41, 47, 41, 42, 50, 50, 50]
		    }
		  
		]
	}
	Zha.setOption(optionQ);
	
	
	var optionA = {
		title:{
 		text:'2017山东基本数据',
 		top:'2%',
 		left:'2%',
 		textStyle:{
 			color:'#dfb050',
 			fontSize:25,
 		     }
 	        },
 	        tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        align:'left',
		        left:'20%',
		        top:'40%',
		        orient:'vertical',
		        data:['GDP','成交量    ','供货量   ','供货量'],
		        textStyle:{
		        	color:'rgb(255,145,0)',
		        	fontSize:20,
		        },
		        tooltip: {
			        show: true
			    }
		    },
		    calculable : true,
		    series : 
		        {
		            name:'亿美元',
		            type:'pie',
		            radius : '70%',
		            center : ['70%', '50%'],
		            roseType : 'area',
		              label: {
		                normal: {
		                    show:true,
		                    textStyle:{
		                    	color:'rgb(255,145,0)',
		                    	fontSize:20,
		                    }
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: true,
		                    length:4,
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            
		            itemStyle: {
                                normal: {
							        color: function(params) {
                                        // build a color map as your need.
                                        var colorList=[{
									    type: 'linear',
									    colorStops: [{
									        offset: 0,
									        color: '#FDBC16' // 0% 处的颜色
									    }, {
									        offset: 1, 
									        color: '#879560' // 100% 处的颜色
									    }],
									},{
									    type: 'linear',
									    colorStops: [{
									        offset: 0, color: 'green' // 0% 处的颜色
									    }, {
									        offset: 1, color: 'yellow' // 100% 处的颜色
									    }],
									},{
									    type: 'linear',
									    colorStops: [{
									        offset: 0, color: 'silver' // 0% 处的颜色
									    }, {
									        offset: 1, color: 'aqua' // 100% 处的颜色
									    }],
									},{
									    colorStops: [{
									        offset: 0, color: '#005789' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#399cb8' // 100% 处的颜色
									    }],
									}];
                                        return colorList[params.dataIndex]
                                    }
                               },
                            },
		            data:[
		                {value:10, name:'GDP'},
		                {value:5, name:'成交量    '},
		                {value:15, name:'供货量   '},
		                {value:25, name:'供货量'},
		            ]
		        }
	}
	
	
	$('.SASA').on('click',function(){
			$('<div class="MoMo"></div>').appendTo('.FA');
			$('.FA').animate({
				'width': '70%',
				'height': '60%',
				'background': '#2F79BE',
                'right':'15%',
				'position': 'absolute',
				'top': '25%',
				'z-index': '9999999999'
				},300,function(){
			var   MoMo =  echarts.init(document.querySelector('.MoMo'));
			MoMo.setOption(optionA);
				})
			$('.II').css('display','block')
		});
	$('.So').on('click',function(){
			$('.MoMo').remove();
			$('.FA').css('width','0');
			$('.FA').css('height','0');
			$('.II').css('display','none')
		})
})

$('.DADA').on('click',function(){
	$('<div class="GG"></div>').appendTo('.FC');
	$('.FC').animate({
		'width': '70%',
		'height': '60%',
		'background': '#2F79BE',
        'right':'15%',
		'position': 'absolute',
		'top': '25%',
		'z-index': '9999999999'
	},300,function(){
		var   Gb =  echarts.init(document.querySelector('.GG'));
			  Gb.setOption(optionC);
	})
	$('.DD').css('display','block')
})
$('.UU').on('click',function(){
			$('.GG').remove();
			$('.FC').css('width','0');
			$('.FC').css('height','0');
			$('.DD').css('display','none')
	});


$('.SXSX').on('click',function(){
	$('<div class="TU"></div>').appendTo('.FG');
	$('.FG').animate({
		'width': '70%',
		'height': '60%',
		'background': '#2F79BE',
        'right':'15%',
		'position': 'absolute',
		'top': '25%',
		'z-index': '9999999999'
	},300,function(){
		var   Yi =  echarts.init(document.querySelector('.TU'));
			  Yi.setOption(optionQ);
	})
	$('.JJ').css('display','block')
})
$('.YU').on('click',function(){
			$('.TU').remove();
			$('.FG').css('width','0');
			$('.FG').css('height','0');
			$('.JJ').css('display','none')
		})

function sun(){
	var Yi=0;
	var Er=0;
	var Jia = document.querySelectorAll('.JIA');
	var Jie = document.querySelectorAll('.JIA1');
	for(var i=0;i<Jia.length;i++){
		for(var i=0;i<Jie.length;i++){
		Yi += parseInt(Jia[i].innerHTML);
		Er += parseInt(Jie[i].innerHTML);
	   }
		var  he = document.querySelector('.HE');
		var  he1 = document.querySelector('.HE1');
		he.innerHTML = Yi;
		he1.innerHTML = Er;
	}
}
sun();