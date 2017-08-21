

			var option=[];
		
	
	//************地图
var geoCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028],
    '茂名': [110.19,21.22],
    '赣州': [113.54,24.29],
    '湛江': [110.30,21.20],

};


var BJData = [
    [{name:'潍坊'}, {name:'广州',value:95},{color:'#ed8b9a'}],
    [{name:'潍坊'}, {name:'深圳',value:90},{color:'#ed8b9a'}],
    [{name:'潍坊'}, {name:'佛山',value:80},{color:'#FF8C00'}],
    [{name:'潍坊'}, {name:'中山',value:70},{color:'#f8d59e'}],
    [{name:'潍坊'}, {name:'湛江',value:60},{color:'#FFFF00'}],
    [{name:'潍坊'}, {name:'赣州',value:50},{color:'#FFFF00'}],
    [{name:'潍坊'}, {name:'东莞',value:40},{color:'#98FB98'}],
    [{name:'潍坊'}, {name:'茂名',value:30},{color:'#7FFF00'}],
    [{name:'潍坊'}, {name:'珠海',value:50},{color:'#7FFF00'}],
    [{name:'潍坊'}, {name:'南昌',value:60},{color:'#7FFF00'}]
];

var detailData = [
	{area:'广州',aa:9998,bb:800},
	{area:'深圳',aa:8751,bb:800},
	{area:'佛山',aa:7633,bb:800},
	{area:'中山',aa:5321,bb:800},
	{area:'湛江',aa:4214,bb:800},
	{area:'赣州',aa:4122,bb:800},
	{area:'东莞',aa:3123,bb:800},
	{area:'茂名',aa:2896,bb:800},
	{area:'珠海',aa:2567,bb:800},
	{area:'南昌',aa:2314,bb:800}
];

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        var ccolor = dataItem[2].color;
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord],
                lineStyle: {
                	normal:{
                		//线的颜色
		                color: dataItem[2].color,
                		
                	}
                }
            });
        }
    }
    return res;
};
var convertData_b = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};
var color = ['#ed8b9a', '#ed8b9a', '#FF8C00','#f8d59e','#FFFF00','#FFFF00','#98FB98','#7FFF00','#7FFF00','#7FFF00'];
var series = [];
    series.push(
    {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 4,
        rippleEffect: {
            brushType: 'fill',
            scale:8,
        },
        label: {
            normal: {
                show: true,
                position: 'bottom',
                textStyle:{
                	fontSize:16,
                },

                
            },
        },
        symbolSize: function (val) {
        
            return val[2] / 16;
        },
        data: BJData.map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
                itemStyle: {
		            normal: {
		 			 	color: dataItem[2].color,
		            }
		        },
		        label: {
		            normal: {
		                textStyle:{
		                	color:'dataItem[2].color'   //数字
		                }
		            },
		            emphasis: {
		            	show:false,
		            }
		        },
            }
        })
        
    });

option[0] = {
		title : {
						    text: '2017中国供应量走势图',
						    left: '5%',
							bottom:'1%',
						    textStyle : {
						         color: '#fff',
						         fontWeight:'normal',
						         fontSize:26
						     }
						 },

	tooltip : {
            trigger: 'item',
            padding: [10, 20],
            formatter: function (params,ticket,callback){
                var pna = params.name;
                var res = '';
                for(var i = 0;i<detailData.length;i++){
                    if(detailData[i].area == pna){
                        res = '<p>'+detailData[i].area+'</br>供应商上限数：'+detailData[i].aa+'</br>交易量：'+detailData[i].bb+'</p>';//设置自定义数据的模板，这里的模板是图片               
                        break;
                    }
                }
                
                setTimeout(function (){
                    // 仅为了模拟异步回调
                    callback(ticket, res);//回调函数，这里可以做异步请求加载的一些代码
                }, 500)
                return 'loading';
            }
        },
    geo:[{
			map: 'china-contour',
			silent:true,
			left:'10%',
			top:'15%',

			label: {
				normal: {
					show: false,
				},
				emphasis:{
					show: false,
				}
			},
			itemStyle: {
				normal:{
					borderColor: '#0F345A',
					borderWidth: 10,
					shadowColor: 'rgba(255, 255, 255, 0.5)',
   					shadowBlur: 10,
   					shadowOffsetX:5,
   					shadowOffsetY:5
				},
			}
		},{
        map: 'china',
		left:'10%',
		top:'15%',
		regions:[{
			name:'广东',
			selected:true,
		}],
        label: {
            emphasis: {
                show: true,
                textStyle:{
                	color:'#345F93',
                	fontWeight:'bold',
                	fontSize:16
                }
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#0E345A',
                borderColor: '#ccc',
                borderWidth: '1',
                
            },
         
            emphasis: {
            	opacity:0.5,
            	areaColor: '#CA9A7A',
            }
        }
    }] ,
    series: series
};

		 var oDetail_a = document.querySelector(".China_map_detail_a"); 
		 var oDetail_b = document.querySelector(".China_map_detail_b"); 
		 var chart0 = echarts.init(document.querySelector(".China_map"));
		 chart0.setOption(option[0]);
		
		 var province = ['广东','江西'];
//		 info1_0 = [400, 290, 300, 232, 256, 767, 1356, 622, 326, 200, 640, 330];
		
		 chart0.on('click',function(params){
		 	for(var i=0;i<province.length;i++){
	             if( params.name == '广东'){
		 			$(".China_map").addClass("China_map_change");
		 			$(".China_map_detail_a").addClass("China_map_detail_change");
		 			$(".map_reduce").addClass("map_reduce_change");
		 			
	            };
	            if( params.name == '江西'){
		 			$(".China_map").addClass("China_map_change");
		 			$(".China_map_detail_b").addClass("China_map_detail_change");
		 			$(".map_reduce").addClass("map_reduce_change");
	            }
				
		 	}
			
     	 });
     	 $(".map_reduce").on("click",function(){
     	 	$(".China_map").removeClass("China_map_change");
		 	$(".China_map_detail_a").removeClass("China_map_detail_change");
		 	$(".China_map_detail_b").removeClass("China_map_detail_change");
		 	$(".map_reduce").removeClass("map_reduce_change");
     	 })
		

        //*************地图具体省份图
        var city = ['广州市','深圳市','佛山市','中山市','湛江市','赣州市','东莞市','茂名市','珠海市','南昌市'];
        $.getJSON('../js/guangdong.json', function (data) {
            echarts.registerMap('guangdong', data);
            var chart_detail = echarts.init(oDetail_a);
            chart_detail.setOption({
                series: [{
                    type: 'map',
                    map: 'guangdong',
					zoom:1.2,
                    label: {
			            normal: {
			                show: false,
			                textStyle:{
			                	color:'#000',
			                	fontSize:16
			                }
			            },
			            emphasis:{
			            	textStyle:{
			                	color:'#fff',
			                	fontWeight:'bold',
			                	fontSize:18
			                }
			            }
			        },
                    itemStyle: {
			            normal: {
			                areaColor: '#0E345A',
			                borderColor: '#ccc',
			                borderWidth: '1',
			                
			            },
			            emphasis: {
			            	areaColor:'#FF8C00',
			            }
			        },
			        data:[ 
                        {name: '茂名市',selected:true},  
				        ]
                }]
            });
            chart_detail.on('click',function(params){
		 	for(var i=0;i<city.length;i++){
	             if( params.name == city[i]){
		 			window.location.href=i+1+'.html';
	            }
				
		 	}
			
      });
        });
        
        $.getJSON('../js/jiangxi.json', function (data) {
            echarts.registerMap('jiangxi', data);
            var chart_detail = echarts.init(oDetail_b);
           chart_detail.setOption({
                series: [{
                    type: 'map',
                    map: 'jiangxi',
					zoom:1.2,
                    label: {
			            normal: {
			                show: false,
			                textStyle:{
			                	color:'#000',
			                	fontSize:16
			                }
			            },
			            emphasis:{
			            	textStyle:{
			                	color:'#fff',
			                	fontWeight:'bold',
			                	fontSize:18
			                }
			            }
			        },
                    itemStyle: {
			            normal: {
			                areaColor: '#0E345A',
			                borderColor: '#ccc',
			                borderWidth: '1',
			                
			            },
			            emphasis: {
			            	areaColor:'#FF8C00',
			            }
			        }
                }]
            });
            chart_detail.on('click',function(params){
		 	for(var i=0;i<city.length;i++){
		 		console.log(params.name)
	             if( params.name == city[i]){
		 			window.location.href=i+1+'.html';
	            }
				
		 	}
			
      });
        });
		
		//****************************************右图1
		

			option[1] = {
    backgroundColor: '#3d3734',
//  width:'100%',
    height:'40%',
    title: {
        text: 'top10供应商上线走势图(单位:家)',
        textStyle: {
//          fontWeight: 'normal',
            fontWeight:'lighter',
			fontSize:15,
            color:'white',
        },
        left: '2%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
                        data:['采购量','同期环比曲线'],
                        top:'12%',
                        right:'4%',
                        textStyle:{
				        	color:'#fff',
				        },
                 },
    xAxis: [{
    	minInterval:0.5,
        type: 'category',
        boundaryGap: true,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'white',
                fontSize:'50%',
            }
        },
        axisLabel:{  
                         interval:0,
                         rotate:45,
                         textStyle:{
                         	fontSize:'50%',
                         }
                    },  
                    

		data: ['广州','深圳','佛山','中山','湛江','赣州','东莞','茂名','珠海','南昌']
		
    }],
    yAxis: [
     {
    	min:0,interval:2500,
        type: 'value',
        axisTick: {
             inside:true,
            length:3
        },
        axisLine: {
            lineStyle: {
               color: 'white',
                fontSize:'50%',
            }
        },
        axisLabel:{
            interval:0,   //强制显示所有坐标 
            textStyle:{
                         	fontSize:'50%',
                         }
         },
         labelLine: {
                        normal: {
                            show: true,
                            length:1,
                        },
                        emphasis: {
                            show: true
                        }
                    },
        splitLine: {
            show:false
        },
    },
    {
    	min:0,max:1,interval:0.1,
            show:false,
        },
   ],
    series: [ {
            name:'采购量',
            type:'bar',
            barWidth:'30%',
            data:[9998,8751,7633,5321,4214,4122,3123,2896,2567,2314],
             itemStyle: {
            normal: {
                color: '#e94f2e',
                width:0.5,
            },
            borderWidth:100
        },
       },
    {
        name: '同期环比曲线',
        type: 'line',
         yAxisIndex: 1,
        lineStyle: {
            normal: {
                width: 1,
                 type: 'dashed',
                 color:'#d9c076',
            }
        },
        itemStyle: {
            normal: {
                color: '#fff',
            }
        },
        data: [0.5,0.6,0.4,0.5,0.7,0.7,0.8,0.1,0.5,0.6]
    }, ]
   
};
            var chart1 = echarts.init(document.querySelector('.chart_a'));
            chart1.setOption(option[1]); 
            
            
            //**********右图2
            
            
            option[2] = {
					height:'40%',
					title : {
				    text: '茂名市供应量走势图（单位：单）',
				    left: '1%',
				    top:'1%',
				    
				    textStyle : {
				         color: '#fff',
				         fontWeight:'lighter',
				         fontSize:15
				     }
				  },
					backgroundColor:'#3D3733',
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['成交量','同期环比曲线'],
                        top:'16%',
                        right:'4%',
                        textStyle:{
				        	color:'#fff',
				     
				        	
				        },
                    },
                    xAxis: [
                        {
							axisTick:{
								show:false    
							},
                        	axisLabel:{
                        		interval:0,   //强制显示所有坐标
//                      		rotate:45,
                        		textStyle:{
                        			fontWeight:'lighter',
                        			fontSize:'50%',
                        		}
                        	},
							axisLine:{
								lineStyle:{
									color:'#fff'
								}
							},
                            type: 'category',
                            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                        }
                    ],
                    yAxis: [
                        {
                        	axisTick:{
								inside:true,
								length:3
							},
                        	axisLine:{
								lineStyle:{
									color:'#fff'
								}
							},
							splitLine:{
								show:false
							},
                            type: 'value',
                            interval: 2500,
                            axisLabel: {
                            	interval: 0,
                            	// showMinLabel:true,
                            	margin:2,
                            	textStyle:{
                            		fontSize:'50%',
                            	},
                                formatter: '{value} '
                            }
                        },
                        {
                        	min:0,max:1,interval:0.1,
            				show:false,
                        }
                    ],
                    series: [
                         
                        {
                            name:'成交量',
                            type:'bar',
							itemStyle:{
								normal:{
									color:'#e94f2e',
									 shadowBlur: 1,
       								 shadowColor: '#81677f'
								}
							},
                            barWidth:'26%',
                            data:[421, 679, 1236, 2356, 1899, 1766, 1532, 1489, 1787, 2857, 2654, 678]
                            
                        },
                        {
                            name:'同期环比曲线',
                            type:'line',
                            symbol:'circle',
                            lineStyle:{
                            	normal:{
                            		type:'dashed',
                            		width:1,
                            		color:'#d9c076',
                            	},
                            },
                            itemStyle: {
					            normal: {
					                color: '#fff',
					            }
					        },
                            yAxisIndex: 1,
                            data:[0.5,0.6,0.4,0.5,0.7,0.7,0.8,0.8,0.5,0.6,0.4,0.5]
                            
                        }
                    ]
          }; 
            var chart2 = echarts.init(document.querySelector('.chart_b'));
            chart2.setOption(option[2]); 
            
            //**************右图3
            option[3] = {
            	
			title : {
				    text: '茂名市产品偏好程度（%）',
				    left: '1%',
				    top:'1%',
				    textStyle : {
				         color: '#fff',
				         fontWeight:'lighter',
				         fontSize:15,
				     }
				  },
			backgroundColor: '#3D3733',
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        width: '8%',
		        height: '70%',
		        align:'left',
		        right:'1%',
		        top:'20%',
		        orient:'vertical',
		        data:['纺织服装、鞋','食品类产品','家居装饰品','建材','五金工具','日用消费品','电子及家电','休闲用品'],
		        textStyle:{
		        	color:'#fff',
		        },
		        tooltip: {
			        show: true
			    }
		    },
		    calculable : true,
		    series : 
		        {
		            name:'面积模式',
		            type:'pie',
		            radius : '70%',
		            center : ['35%', '60%'],
		            roseType : 'area',
		              label: {
		                normal: {
		                    show:true,
		                    textStyle:{
		                    	color:'#fff',
		                    }
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: true,
		                    length:1,
		                },
		                emphasis: {
		                    show: true
		                }
		            },
		            
		            itemStyle: {
                                normal: {
							        color: function(params) {
                                        var colorList=[{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#cd3c21' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#c6ae43' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									},{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#a94a45' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#ea821a' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									},{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#d03a56' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#d58985' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									},{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#1a655b' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#368db9' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									},{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#8f1c2c' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#c4432f' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									},{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#358da8' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#68c1d5' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									},{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#8e1c2c' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#be172c' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									},{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#005789' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#399cb8' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									}];
                                        return colorList[params.dataIndex]
                                    }
//									
                                    
                               },
                            },
		            data:[
		                {value:95, name:'纺织服装、鞋'},
		                {value:85, name:'食品类产品'},
		                {value:80, name:'家居装饰品'},
		                {value:90, name:'建材'},
		                {value:85, name:'五金工具'},
		                {value:90, name:'日用消费品'},
		                {value:85, name:'电子及家电'},
		                {value:80, name:'休闲用品'}
		            ]
		        }
		    
		    };
		var chart3 = echarts.init(document.querySelector(".chart_c"));
		chart3.setOption(option[3]);
			
            
            //*******************右图4
            
            option[4] = {
            	height:'30%',
					title : {
				    text: '茂名市产品满意度（%）',
				    left: '1%',
				    top:'1%',
				    textStyle : {
				         color: '#fff',
				         fontWeight:'lighter',
				         fontSize:15,
				     }
				  },
					backgroundColor:'#3D3733',
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['采购量','同期环比曲线'],
                        top:'14%',
                        right:'4%',
                        textStyle:{
				        	color:'#fff',
				        },
                    },
                    xAxis: [
                        {
							axisTick:{
								show:false    
							},
                        	axisLabel:{
                        		interval:0,   //强制显示所有坐标
//                      		rotate:15,
                        		textStyle:{
                        			fontWeight:'lighter'
                        		}
                        	},
							axisLine:{
								lineStyle:{
									color:'#fff',
									fontSize:'50%',
								}
							},
                            type: 'category',
		        			data:['纺织服装、鞋','食品类产品','家居装饰品','建材','五金工具','日用消费品','电子及家电','休闲用品'],
		        			
                            }
                    ],
                    yAxis: [
                        {
                        	axisTick:{
								inside:true,
								length:3,
							},
                        	axisLine:{
								lineStyle:{
									color:'#fff'
								}
							},
							splitLine:{
								show:false
							},
                            type: 'value',
                            interval: 20,
                            max:100,
                            min:0,
                            axisLabel: {
                            	show:true,
                            	interval:0,
                            	showMaxLabel:false,
                            	showMinLabel:true,
                            	margin:4,
                            	textStyle:{
                            		fontSize:'50%',
                            	},
                            }
                        },
                        {
                        	min:0,max:1,interval:0.1,
            				show:false,
                        }
                    ],
                    series: [
                         
                        {
                            name:'采购量',
                            type:'bar',
                            itemStyle: {
                                normal: {
							        color: function(params) {
                                        var colorList=[{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#cd3c21' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#c6ae43' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									},{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#a94a45' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#ea821a' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									},{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#d03a56' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#d58985' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									},{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#1a655b' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#368db9' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									},{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#8f1c2c' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#c4432f' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									},{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#358da8' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#68c1d5' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									},{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#8e1c2c' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#be172c' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									},{
									    type: 'linear',
									    x: 0,
									    y: 0,
									    x2: 1,
									    y2: 0,
									    colorStops: [{
									        offset: 0, color: '#005789' // 0% 处的颜色
									    }, {
									        offset: 1, color: '#399cb8' // 100% 处的颜色
									    }],
									    globalCoord: false // 缺省为 false
									}];
                                        return colorList[params.dataIndex]
                                   }
                                    
                               },
                            },
                            
                            barWidth:'28%',
                            data:[85, 90, 85, 80, 85, 90, 85, 85]
                        },
                        {
                            name:'同期环比曲线',
                            type:'line',
                            symbol:'circle',
                            lineStyle:{
                            	normal:{
                            		type:'dashed',
                            		width:1,
                            		color:'#d9c076'
                            	},
                            },
                            itemStyle: {
					            normal: {
					                color: '#fff',
					            }
					        },
                            yAxisIndex: 1,
                            data:[0.5,0.6,0.5,0.7,0.6,0.4,0.6,0.5]
                        }
                    ]
           };
            var chart4 = echarts.init(document.querySelector('.chart_d'));
            chart4.setOption(option[4]);
		
		
		
		
		//放大镜功能
		var oShade = document.querySelector(".shade");
		var oShadeInner = document.querySelector(".shade_inner");
		var oReduce = document.querySelector("img.reduce");
		var oEnlarge=document.querySelectorAll(".enlarge img");
		var oDiv=document.querySelector(".box div");
		var oSection = document.querySelectorAll(".right section");
		var oRedu = document.querySelector("#redu");
		for(var i=0;i<oEnlarge.length;i++){
			oEnlarge[i].index=i;
			oEnlarge[i].onclick = function(){
				var that = this.index;
				var node=document.createElement("div");
				node.setAttribute("class","box");
				oShadeInner.appendChild(node);
				var oShadeWidth = oSection[this.index].getBoundingClientRect().right-oSection[this.index].getBoundingClientRect().left;
				var oShadeHeight = oSection[this.index].getBoundingClientRect().bottom-oSection[this.index].getBoundingClientRect().top;
				oShadeInner.style.left=oSection[this.index].getBoundingClientRect().left+oShadeWidth/2+"px";
				oShadeInner.style.top=oSection[this.index].getBoundingClientRect().top+oShadeHeight/2+"px";
				oShadeInner.style.width=0;
				oShadeInner.style.height=0;
				oShade.setAttribute("class","shade");
				oShadeInner.setAttribute("class","shade_inner shade_inner_animate");
				setTimeout(Enlarge,500);
				function Enlarge(){
					var chart5 = echarts.init(node);
					var op=option[that+1];
					op.height='70%';
					op.width='80%';
					op.title.textStyle.fontSize=24;
					op.legend.textStyle.fontSize=16;
					op.title.left='10%';
					op.title.top='3%';
					op.legend.right='8%';
					op.legend.top='8%';
					op.legend.itemWidth=50;
					op.legend.itemHeight=20;
					op.backgroundColor='#2f79be';
					if(that==2){
						op.series.label.normal.textStyle.fontSize=16;
						
					}else{
						op.xAxis[0].axisLabel.textStyle.fontSize='100%';
						op.yAxis[0].axisLabel.textStyle.fontSize='100%';
					};
					chart5.setOption(option[that+1]);
					oRedu.setAttribute("class","reduce");
					
				}
			}
		}
		oReduce.onclick = function(){
			oShade.setAttribute("class","shade hide");
			var oBox = document.querySelector(".box");
			oShadeInner.removeChild(oBox);
			oRedu.setAttribute("class","reduce hidden");
		}

		
		
		
		
