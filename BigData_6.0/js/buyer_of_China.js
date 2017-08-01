

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
    '韶关': [113.7964,24.7028]
};


var BJData = [
    [{name:'北京'}, {name:'上海',value:95},{color:'#ed8b9a'}],
    [{name:'北京'}, {name:'广州',value:90},{color:'#ed8b9a'}],
    [{name:'北京'}, {name:'大连',value:80},{color:'#FF8C00'}],
    [{name:'北京'}, {name:'南宁',value:70},{color:'#f8d59e'}],
    [{name:'北京'}, {name:'南昌',value:60},{color:'#FFFF00'}],
    [{name:'北京'}, {name:'拉萨',value:50},{color:'#FFFF00'}],
    [{name:'北京'}, {name:'长春',value:40},{color:'#98FB98'}],
    [{name:'北京'}, {name:'包头',value:30},{color:'#7FFF00'}],
    [{name:'北京'}, {name:'重庆',value:20},{color:'#7FFF00'}],
    [{name:'北京'}, {name:'常州',value:10},{color:'#7FFF00'}]
];

var detailData = [
	{area:'上海',aa:1000,bb:800,cc:20000,dd:500,ee:200000000},
	{area:'广州',aa:1000,bb:800,cc:20000,dd:500,ee:200000000},
	{area:'大连',aa:1000,bb:800,cc:20000,dd:500,ee:200000000},
	{area:'南宁',aa:1000,bb:800,cc:20000,dd:500,ee:200000000},
	{area:'南昌',aa:1000,bb:800,cc:20000,dd:500,ee:200000000},
	{area:'拉萨',aa:1000,bb:800,cc:20000,dd:500,ee:200000000},
	{area:'长春',aa:1000,bb:800,cc:20000,dd:500,ee:200000000},
	{area:'包头',aa:1000,bb:800,cc:20000,dd:500,ee:200000000},
	{area:'重庆',aa:1000,bb:800,cc:20000,dd:500,ee:200000000},
	{area:'常州',aa:1000,bb:800,cc:20000,dd:500,ee:200000000}
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
                },
                itemStyle: {
		            normal: {
		            	//圆圈的颜色
		              borderColor: dataItem[2].color,
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
    series.push({
        type: 'lines',
        zlevel: 2,
        effect: {
            show: true,
            period: 2,
            trailLength: 0.4,   //特效尾迹的长度  0~1 数值越大尾迹越大
            color: '#fff',
            symbolSize: 3
        },
        lineStyle: {
            normal: {
            	//路径的颜色
                color: '#FF4X500',
                width: 1,
                curveness: 0.2
            }
        },
        data: convertData(BJData)
    },
    {
        type: 'lines',
        zlevel:3,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            symbol: 'none',
            symbolSize: 15
        },
        
        lineStyle: {
            normal: {
            	//线的颜色     不显示
                width: 0,
                opacity: 0.5,
                curveness: 0.3
            }
        },
        data: convertData(BJData)
    },
    {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 4,
        rippleEffect: {
            brushType: 'fill',
            scale:5,
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
        
            return val[2] / 8;
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
            };
        })
    });

option[0] = {
		title : {
						    text: '2017中国采购量走势图',
						    left: '5%',
							bottom:'1%',
						    textStyle : {
						         color: '#1A1A1A',
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
                        res = '<p>'+detailData[i].area+'</br>商户总数量：'+detailData[i].aa+'</br>ap总数量：'+detailData[i].bb+'</br>用户总数量：'+detailData[i].aa+'</br>广告总数量：'+detailData[i].aa+'</br>广告总数量：'+detailData[i].ee+'</p>';//设置自定义数据的模板，这里的模板是图片               
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
					borderColor: '#afdef0',
					borderWidth: 8,
					shadowColor: 'rgba(0, 0, 0, 0.5)',
   					shadowBlur: 10,
   					shadowOffsetX:15,
   					shadowOffsetY:10
				},
				emphasis:{
					areaColor: 'transparent',
					borderWidth: 2,
					shadowColor: 'transparent'
				}
			}
		},{
        map: 'china',
		left:'10%',
		top:'15%',

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
                areaColor: '#345F93',
                borderColor: '#5384B7',
                borderWidth: '2',
                
            },
         
            emphasis: {
            	opacity:0.5
            }
        }
    }] ,
    series: series
};


		var chart0 = echarts.init(document.querySelector(".China_map"));
		chart0.setOption(option[0]);
		
		//****************************************右图1
		
		option[1] = {
					height:'30%',
					title : {
				    text: '2017中国采购量趋势图（单位：亿美金）',
//				    textAlign:'left',
				    left: '1%',
				    top:'1%',
				    
				    textStyle : {
				         color: '#fff',
				         fontWeight:'lighter',
				         fontSize:15
				     }
				  },
					backgroundColor:'#2f79be',
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['采购量','同期环比曲线'],
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
                        		rotate:45,
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
                            data: ['湖南省','上海市','天津市','湖北省','安徽省','江西省','浙江省','江苏省','辽宁省','黑龙江省','吉林省','广东省','福建省','贵州省','甘肃省']
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
                            min:0,max:2000,
                            interval: 500,
                            axisLabel: {
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
                            name:'采购量',
                            type:'bar',
							itemStyle:{
								normal:{
									color:'#e94f2e',
									 shadowBlur: 1,
       								 shadowColor: '#81677f'
								}
							},
                            barWidth:'30%',
                            data:[700, 1000, 950, 800, 950, 850, 900, 1000, 600, 950, 820, 760, 710, 900, 750]
                        },
                        {
                            name:'同期环比曲线',
                            type:'line',
                            yAxisIndex: 1,
                            symbol:'circle',
                            lineStyle:{
                            	normal:{
                            		type:'dashed',
                            		width:1,
                            		color:'#d9c076'
                            	},
                            },
                            data:[0.5,0.6,0.4,0.5,0.7,0.7,0.8,0.8,0.5,0.6,0.4,0.5,0.3,0.8,0.5]
                        }
                    ]
           };
            var chart1 = echarts.init(document.querySelector('.chart_a'));
            chart1.setOption(option[1]); 
            
            
            //**********右图2
            
            
            option[2] = {
					height:'40%',
					title : {
				    text: '2017中国成交量趋势图（单位：亿美金）',
				    left: '1%',
				    top:'1%',
				    
				    textStyle : {
				         color: '#fff',
				         fontWeight:'lighter',
				         fontSize:15
				     }
				  },
					backgroundColor:'#2f79be',
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
                            interval: 5000,
                            axisLabel: {
                            	interval: 0,
                            	showMaxLabel:false,
                            	showMinLabel:true,
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
                            data:[5700, 10000, 9500, 8000, 9500, 8500, 9000, 11000, 6000, 9500, 8200, 7600]
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
				    text: '主要省份产品偏好程度（%）',
				    left: '1%',
				    top:'1%',
				    textStyle : {
				         color: '#fff',
				         fontWeight:'lighter',
				         fontSize:15,
				     }
				  },
			backgroundColor: '#2f79be',
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        width: '8%',
		        height: '70%',
		        align:'left',
		        right:'4%',
		        top:'20%',
		        orient:'vertical',
		        data:['环保','建筑','能源','有色金属','食品','核能',	'交通','航空航天'],
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
		                {value:10, name:'环保'},
		                {value:5, name:'建筑'},
		                {value:15, name:'能源'},
		                {value:25, name:'有色金属'},
		                {value:20, name:'食品'},
		                {value:35, name:'核能'},
		                {value:40, name:'交通'},
		                {value:30, name:'航空航天'}
		            ]
		        }
		    
		    };
		var chart3 = echarts.init(document.querySelector(".chart_c"));
		chart3.setOption(option[3]);
			
            
            //*******************右图4
            
            option[4] = {
            	height:'40%',
					title : {
				    text: '主要省份产品满意度（%）',
				    left: '1%',
				    top:'1%',
				    textStyle : {
				         color: '#fff',
				         fontWeight:'lighter',
				         fontSize:15,
				     }
				  },
					backgroundColor:'#2f79be',
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
                            data: ['环保','建筑','能源','有色金属','食品','核能','航空航天','交通']
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
                            data:[25, 60, 70, 55, 45, 30, 45, 31]
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
                            yAxisIndex: 1,
                            data:[0.5,0.6,0.4,0.5,0.7,0.7,0.8,0.8]
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
					op.title.top='10%';
					op.legend.right='8%';
					op.legend.itemWidth=50;
					op.legend.itemHeight=20;
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

		
		
		
		
