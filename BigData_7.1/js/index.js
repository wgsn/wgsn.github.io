window.onload = function() {
	//1.地图
	var chart = echarts.init(document.querySelector('.map_detail'));
var geoCoordMap = {
 '中国': [116.3002283764,39.9181370976],
'印度': [78,27.09],
 '马来西亚': [101.42,5.08],
'俄罗斯': [129.51,62.1],
'以色列': [35.13,31.47],
'斯里兰卡': [79.50,6.56],
'哈萨克斯坦': [76.55,43.19],
'乌克兰': [30.29,50.28],
'也门': [45,12.5],
'土耳其': [32.54,40.02],
'希腊': [23.44,38.02],
'叙利亚': [36.19,33.3],
'波兰': [18.38,54.22],
'新加坡': [103.45,1.22],
'罗马尼亚': [26.1,44.23]};

var BJData = [
		[{
			name: '中国'
		}, {
			name: '中国',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '印度',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '马来西亚',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '俄罗斯',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '马来西亚',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '俄罗斯',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '以色列',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '斯里兰卡',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '哈萨克斯坦',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '乌克兰',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '也门',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '土耳其',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '希腊',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '叙利亚',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '波兰',
			value: 60
		}],
		[{
			name: '中国'
		}, {
			name: '新加坡',
			value: 60
		}],[{
			name: '中国'
		}, {
			name: '罗马尼亚',
			value: 60
		}],
	];
	//value  可控制光点大小	

	var convertData = function(data) {
		var res = [];
		for(var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if(fromCoord && toCoord) {
				res.push({
					fromName: dataItem[0].name,
					toName: dataItem[1].name,
					coords: [fromCoord, toCoord]
				});
			}
		}
		return res;
	};
	//var color = ['#fdd442', '#ffa022', '#46bee9'];
	var series = [];
	[
		['中国', BJData]
	].forEach(function(item, i) {
		series.push({
			name: '贸易' + ' Top15',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke',
				scale:6,
				color:'red'
			},
			label: {
				//地名
				normal: {
					show: false,
					position: 'right',
					formatter: '{b}',
					shadowBlur: 2,
					shadowColor: 'rgba(255, 255, 255, 0.8)',
				}
			},
			symbolSize: function(val) {
				return val[2] / 10;
			},
			itemStyle: {
				normal: {
					color: 'yellow',
					shadowBlur: 100,
					shadowColor: 'rgba(255, 255, 255, 0.8)',
				}
			},
			data: item[1].map(function(dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
					//value:geoCoordMap[dataItem[1].name]
				};
				
			})
		},
		
		///
		{
			type: 'map',
            mapType: 'world',
            tooltip:{show:false},
            label: {emphasis:{show:false}},
			data:[
                {name : 'Afghanistan', value : 283.812},
                {name : 'Angola', value : 195.124},
                {name : 'Albania', value : 315.143},
                {name : 'United Arab Emirates', value : 441.537},
                {name : 'Argentina', value : 403.224},
                {name : 'Armenia', value : 296.496},
                {name : 'French Southern and Antarctic Lands', value : 268.065},
                {name : 'Australia', value : 224.488},
                {name : 'Austria', value : 401.924},
                {name : 'Azerbaijan', value : 94.718},
                {name : 'Burundi', value : 232.753},
                {name : 'Belgium', value : 101.288},
                {name : 'Benin', value : 509.798},
                {name : 'Burkina Faso', value : 150.284},
                {name : 'Bangladesh', value : 151.475},
                {name : 'Bulgaria', value : 789.175},
                {name : 'The Bahamas', value : 402.316},
                {name : 'Bosnia and Herzegovina', value : 345.929},
                {name : 'Belarus', value : 491.07},
                {name : 'Belize', value : 308.595},
                {name : 'Bermuda', value : 64.951},
                {name : 'Bolivia', value : 716.939},
                {name : 'Brazil', value : 210.154},
                {name : 'Brunei', value : 27.223},
                {name : 'Bhutan', value : 716.939},
                {name : 'Botswana', value : 196.341},
                {name : 'Central African Republic', value : 349.921},
                {name : 'Canada', value : 126.24},
                {name : 'Switzerland', value : 730.534},
                {name : 'Chile', value : 170.76},
                {name : 'China', value : 135.465},
                {name : 'Ivory Coast', value : 508.978},
                {name : 'Cameroon', value : 624.343},
                {name : 'Democratic Republic of the Congo', value : 191.161},
                {name : 'Republic of the Congo', value : 373.024},
                {name : 'Colombia', value : 444.798},
                {name : 'Costa Rica', value : 469.685},
                {name : 'Cuba', value : 112.768},
                {name : 'Northern Cyprus', value : 1.468},
                {name : 'Cyprus', value : 103.685},
                {name : 'Czech Republic', value : 103.701},
                {name : 'Germany', value : 317.404},
                {name : 'Djibouti', value : 34.036},
                {name : 'Denmark', value : 550.959},
                {name : 'Dominican Republic', value : 10016.797},
                {name : 'Algeria', value : 62.82},
                {name : 'Ecuador', value : 151.072},
                {name : 'Egypt', value : 775.705},
                {name : 'Eritrea', value : 541.159},
                {name : 'Spain', value : 462.038},
                {name : 'Estonia', value : 298.533},
                {name : 'Ethiopia', value : 95.281},
                {name : 'Finland', value : 367.693},
                {name : 'Fiji', value : 860.559},
                {name : 'Falkland Islands', value : 49.581},
                {name : 'France', value : 230.866},
                {name : 'Gabon', value : 156.222},
                {name : 'United Kingdom', value : 666.35},
                {name : 'Georgia', value : 488.674},
                {name : 'Ghana', value : 242.901},
                {name : 'Guinea', value : 106.033},
                {name : 'Gambia', value : 160.64},
                {name : 'Guinea Bissau', value : 176.033},
                {name : 'Equatorial Guinea', value : 696.167},
                {name : 'Greece', value : 109.999},
                {name : 'Greenland', value : 56.546},
                {name : 'Guatemala', value : 141.576},
                {name : 'French Guiana', value : 231.169},
                {name : 'Guyana', value : 786.126},
                {name : 'Honduras', value : 721.204},
                {name : 'Croatia', value : 48.027},
                {name : 'Haiti', value : 96.4},
                {name : 'Hungary', value : 114.633},
                {name : 'Indonesia', value : 276.485},
                {name : 'India', value : 120.648},
                {name : 'Ireland', value : 447.561},
                {name : 'Iran', value : 246.485},
                {name : 'Iraq', value : 302.38},
                {name : 'Iceland', value : 318.042},
                {name : 'Israel', value : 420.368},
                {name : 'Italy', value : 608.978},
                {name : 'Jamaica', value : 241.485},
                {name : 'Jordan', value : 454.554},
                {name : 'Japan', value : 152.833},
                {name : 'Kazakhstan', value : 121.127},
                {name : 'Kenya', value : 409.194},
                {name : 'Kyrgyzstan', value : 334.223},
                {name : 'Cambodia', value : 364.931},
                {name : 'South Korea', value : 142.352},
                {name : 'Kosovo', value : 97.743},
                {name : 'Kuwait', value : 991.58},
                {name : 'Laos', value : 395.713},
                {name : 'Lebanon', value : 341.092},
                {name : 'Liberia', value : 397.99},
                {name : 'Libya', value : 40.612},
                {name : 'Sri Lanka', value : 258.779},
                {name : 'Lesotho', value : 208.921},
                {name : 'Lithuania', value : 308.457},
                {name : 'Luxembourg', value : 507.885},
                {name : 'Latvia', value : 200.519},
                {name : 'Morocco', value : 316.36},
                {name : 'Moldova', value : 103.619},
                {name : 'Madagascar', value : 219.532},
                {name : 'Mexico', value : 186.404},
                {name : 'Macedonia', value : 507.885},
                {name : 'Mali', value : 135.961},
                {name : 'Myanmar', value : 531.231},
                {name : 'Montenegro', value : 620.078},
                {name : 'Mongolia', value : 271.738},
                {name : 'Mozambique', value : 267.265},
                {name : 'Mauritania', value : 369.42},
                {name : 'Malawi', value : 113.694},
                {name : 'Malaysia', value : 275.835},
                {name : 'Namibia', value : 217.967},
                {name : 'New Caledonia', value : 246.379},
                {name : 'Niger', value : 1593.746},
                {name : 'Nigeria', value : 177.78},
                {name : 'Nicaragua', value : 522.209},
                {name : 'Netherlands', value : 615.243},
                {name : 'Norway', value : 491.251},
                {name : 'Nepal', value : 266.016},
                {name : 'New Zealand', value : 438.136},
                {name : 'Oman', value : 282.768},
                {name : 'Pakistan', value : 149.306},
                {name : 'Panama', value : 368.128},
                {name : 'Peru', value : 292.83},
                {name : 'Philippines', value : 944.322},
                {name : 'Papua New Guinea', value : 858.945},
                {name : 'Poland', value : 388.754},
                {name : 'Puerto Rico', value : 370.671},
                {name : 'North Korea', value : 1.468},
                {name : 'Portugal', value : 189.792},
                {name : 'Paraguay', value : 69.721},
                {name : 'Qatar', value : 179.713},
                {name : 'Romania', value : 261.476},
                {name : 'Russia', value : 261.476},
                {name : 'Rwanda', value : 136.732},
                {name : 'Western Sahara', value : 514.648},
                {name : 'Saudi Arabia', value : 258.387},
                {name : 'Sudan', value : 352.002},
                {name : 'South Sudan', value : 940.929},
                {name : 'Senegal', value : 150.564},
                {name : 'Solomon Islands', value : 526.447},
                {name : 'Sierra Leone', value : 551.976},
                {name : 'El Salvador', value : 618.195},
                {name : 'Somaliland', value : 636.173},
                {name : 'Somalia', value : 936.173},
                {name : 'Republic of Serbia', value : 373.024},
                {name : 'Suriname', value : 524.96},
                {name : 'Slovakia', value : 533.437},
                {name : 'Slovenia', value : 254.232},
                {name : 'Sweden', value : 82.297},
                {name : 'Swaziland', value : 1193.148},
                {name : 'Syria', value : 730.534},
                {name : 'Chad', value : 120.781},
                {name : 'Togo', value : 66.014},
                {name : 'Thailand', value : 602.316},
                {name : 'Tajikistan', value : 767.326},
                {name : 'Turkmenistan', value : 541.995},
                {name : 'East Timor', value : 116.797},
                {name : 'Trinidad and Tobago', value : 128.095},
                {name : 'Tunisia', value : 131.83},
                {name : 'Turkey', value : 137.546},
                {name : 'United Republic of Tanzania', value : 473.33},
                {name : 'Uganda', value : 387.213},
                {name : 'Ukraine', value : 450.22},
                {name : 'Uruguay', value : 371.982},
                {name : 'United States of America', value : 127.116},
                {name : 'Uzbekistan', value : 769.27},
                {name : 'Venezuela', value : 236.299},
                {name : 'Vietnam', value : 47.397},
                {name : 'Vanuatu', value : 236.299},
                {name : 'West Bank', value : 13.565},
                {name : 'Yemen', value : 763.008},
                {name : 'South Africa', value : 51452.352},
                {name : 'Zambia', value : 216.985},
                {name : 'Zimbabwe', value : 3076.978}
            ]
		}
		///
		);
	});
	option = {
		title:{
			text:'全球采购商分布图',
			x:'5%',
			y:'80%',
			textStyle:{
				color:'white',
				fontSize:14,
				fontWeight:100,
				fontFamily:'宋体'
			},
			
		},
		tooltip: {
				trigger: 'item',
				height:200,
				width:200,
				fontSize:12,
				formatter: function(params){
					return params.name+'<br/>'+'交易量'+':'+params.value[2]
				},
		},
		visualMap: {
        type: 'continuous',
       show:false,
//   min: 0,
//    max: 1200,
        realtime: false,
        calculable : false,
        color: ['orange','pink','yellow','lightskyblue','teal','#999']
    },
		//地图样式
		geo: {
			map: 'world',
			top: '10%',
			label: {
				emphasis: {
					show: false
				}
			},
			//地图可否拖动
			roam: true,
			scaleLimit:{max:3, min:1},
			itemStyle: {
				normal: {
					//地图颜色
					areaColor: 'white',
					borderColor: '#0f345a'
				},
				emphasis: {
					//hover时颜色
					areaColor: '#0f345a'
				}
			}
		},
		series: series
	};
	chart.setOption(option);
//点击地图跳转
	chart.on('click',function(params){
 	var country=params.name;
 	if(country=='马来西亚'){
 		window.location.href='contury_detail/contury_detail_013.html';
 	}else if(country=='中国'){
 		window.location.href='contury_detail/contury_detail_010.html';
 	}else if(country=='印度 '){
 		window.location.href='contury_detail/contury_detail_009.html';
 	}else if(country=='俄罗斯'){
 		window.location.href='contury_detail/contury_detail_001.html';
 	}else if(country=='以色列'){
 		window.location.href='contury_detail/contury_detail_004.html';
 	}else if(country=='斯里兰卡'){
 		window.location.href='contury_detail/contury_detail_003.html';
 	}else if(country=='哈萨克斯坦'){
 		window.location.href='contury_detail/contury_detail_002.html';
 	}else if(country=='乌克兰'){
 		window.location.href='contury_detail/contury_detail_005.html';
 	}else if(country=='也门'){
 		window.location.href='contury_detail/contury_detail_006.html';
 	}else if(country=='土耳其'){
 		window.location.href='contury_detail/contury_detail_007.html';
 	}else if(country=='希腊'){
 		window.location.href='contury_detail/contury_detail_008.html';
 	}else if(country=='叙利亚'){
 		window.location.href='contury_detail/contury_detail_011.html';
 	}else if(country=='波兰'){
 		window.location.href='contury_detail/contury_detail_012.html';
 	}else if(country=='新加坡'){
 		window.location.href='contury_detail/contury_detail_015.html';
 	}else if(country=='罗马尼亚'){
 		window.location.href='contury_detail/contury_detail_014.html';
 	}
 })

/***************************************柱状图***********************************************************/
	var topbar = echarts.init(document.querySelector('.top_bar'));
	topbar.setOption({
		color: ["white", "red", "tan"],
		height:'100%',
		title: [{
			text: '询盘邮件趋势图（单位：万封）',
			x: '10%',
			y: "3%",
			textStyle: {
				color: "white",
				fontSize: 14,
				fontWeight: 100,
				fontFamily:'宋体'
			}
		}],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: [{
			orient: 'vertical',
			right: 'right',
			data: ['8:00~20:00', '20:00~8:00', '峰值IP', '同期环比', ],
			itemWidth: 20,
			itemHeight: 10,
			align: "right",
			itemGap: 4,
			padding: [5, 10, 0, 0],
			textStyle: {
				color: "white",
				fontSize: 12,
				fontFamily:'宋体'
			}
		}],
		grid: {
			left: '2%',
			bottom: '5%',
			containLabel: true,
			//width:300,
			height: 120
		},
		xAxis: [{
			type: 'category',
			data: ['俄罗斯', '印度', '马来西亚', '以色列', '斯里兰卡', '也门', '土耳其','希腊', '波兰', '罗马尼亚' ],
			axisLabel: {
				interval:0,//显示所有标签
				textStyle: {
					color: 'white', //坐标值得具体的颜色
				}
			}
		}],
		yAxis: [{
			type: 'value',
			min:0,
			splitLine: {
				show: false
			},
			boundaryGap: ['20%', '10%'],
			//splitArea : {show : true},//保留网格区域
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色
				}
			}
		}],
		series: [{
				name: '8:00~20:00',
				type: 'bar',
				stack: '总量',
				barWidth: '30%',
				data: [520, 502, 501, 534, 590, 530, 520,190, 230, 210]
			}, {
				name: '20:00~8:00',
				type: 'bar',
				stack: '总量',
				barWidth: '30%',
				data: [520, 432, 301, 234, 190, 230, 210,590, 530, 520]
			}, {
				name: '峰值IP',
				type: 'bar',
				stack: '总量',
				barWidth: '30%',
				data: [420, 482, 491, 434, 490, 470, 410,590, 530, 520]
			}, {
				name: '同期环比',
				type: 'line',
				stack: '总量',
				data: [550, 412, 501, 354, 290, 330, 210,590, 530, 520],
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "#8F8E8E" //折线颜色
						}
					}
				},
			},
		]
	});
/*************************************折线图*****************************************/
	//IP访问量1
	var bottomline = echarts.init(document.querySelector('.bottom_line'));
	bottomline.setOption({
		title:{
			text:'IP访问量趋势图（单位：万封）',
			x:'12%',
			y:'1%',
			textStyle:{
				color:'white',
				fontSize:14,
				fontWeight:100,
				fontFamily:'宋体'
			},
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '10%',
			top: '9%',
			//containLabel: true,
			//width:'100%',
			height: '77%',
		},
		xAxis: [{
			type: 'category',
			data: ['0', '1','2','3', '4', '5','6', '7','8','9', '10', '11','12', '13',
			'14', '15','16', '17','18', '19','20','21', '22', '23','24'],
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色
				}
			}
		}],
		yAxis: [{
			type: 'value',
			splitLine: {
				show: false
			},
			//splitArea : {show : true},//保留网格区域
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色
				}
			}
		}],
		series: [
			{
				name: 'xxx',
				type: 'line',
				data: [220, 232, 101, 234, 190, 230,
				110,118,155,322,144,355,
				133,234,156,155,177,199,
				156,166,155,144,123,190],
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "#84BCC4" //折线颜色
						}
					}
				},
			}, {
				name: 'xxx',
				type: 'line',
				data: [20, 32, 101, 134, 190, 130,
				210,118,255,222,144,155,
				133,234,156,155,177,199,
				156,166,355,144,123,190],
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "white" //折线颜色
						}
					}
				},
			}, {
				name: 'xxx',
				type: 'line',
				data: [120, 232, 101, 234, 90, 230,
				210,118,255,122,144,255,
				133,234,156,155,177,199,
				156,166,255,144,223,190],
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "#ED6F0E" //折线颜色
						}
					}
				},
			},

		]
	});

	//IP访问量2
	var bottomline1 = echarts.init(document.querySelector('.bottom_line1'));

	bottomline1.setOption({
		color: ["white", "red", "tan"],
		title:{
			text:'IP访问量趋势图（单位：万封）',
			x:'12%',
			y:'1%',
			textStyle:{
				color:'white',
				fontSize:14,
				fontWeight:100,
				fontFamily:'宋体'
			},
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '4%',
			top: '16%',
			containLabel: true,
			width:'100%',
			height: '77%',
		},
		xAxis: [{
			type: 'category',
			data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色
				}
			}
		}],
		yAxis: [{
			type: 'value',
			boundaryGap: ['20%', '10%'],
			splitLine: {
				show: false
			},
			//splitArea : {show : true},//保留网格区域
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色
				}
			}
		}],
		series: [{
				name: 'xxx',
				type: 'line',
				data: [520, 432, 301, 234, 190, 230, 210],
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "#84BCC4" //折线颜色
						}
					}
				},
			}, {
				name: 'xxx',
				type: 'line',
				data: [520, 432, 301, 234, 190, 530, 710],
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "white" //折线颜色
						}
					}
				},
			}, {
				name: 'xxx',
				type: 'line',
				data: [220, 232, 201, 234, 390, 530, 610],
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "#ED6F0E" //折线颜色
						}
					}
				},
			},

		]
	});

	//IP访问量3
	var bottomline2 = echarts.init(document.querySelector('.bottom_line2'));
	var linedata = [];
	var linedata1 = [];
	var linedata2 = [];
	var linedata3 = [];
	var date = new Date();
	var m = date.getMonth();
	var y = date.getYear();
	var curMonthDays = new Date(y, (m + 1), 0).getDate();
	for(var i = 0; i <= curMonthDays; i++) {
		linedata.push(i);
		linedata1.push(i * Math.random() * 15);
		linedata2.push(i * Math.random() * 33);
		linedata3.push(i * Math.random() * 12);
	}

	bottomline2.setOption({
		color: ["white", "red", "tan"],
		title:{
			text:'IP访问量趋势图（单位：万封）',
			x:'12%',
			y:'1%',
			textStyle:{
				color:'white',
				fontSize:14,
				fontWeight:100,
				fontFamily:'宋体'
			},
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '2%',
			top: '20%',
			containLabel: true,
			width:'100%',
			height: '77%',
		},
		xAxis: [{
			type: 'category',
			data: linedata,
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色
				}
			}
		}],
		yAxis: [{
			type: 'value',
			//nameGap:-2,
			splitLine: {
				show: false
			},
			//splitArea : {show : true},//保留网格区域
			axisLabel: {
				textStyle: {
					color: 'white', //坐标值得具体的颜色
				}
			}
		}],
		series: [
			{
				name: 'xxx',
				type: 'line',
				data: linedata1,
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "#84BCC4" //折线颜色
						}
					}
				},
			}, {
				name: 'xxx',
				type: 'line',
				data: linedata2,
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "white" //折线颜色
						}
					}
				},
			}, {
				name: 'xxx',
				type: 'line',
				data: linedata3,
				symbol: 'none', //拐点样式
				//symbolSize: 10,//拐点大小
				itemStyle: {
					normal: {
						lineStyle: {
							width: 1, //折线宽度
							color: "#ED6F0E" //折线颜色
						}
					}
				},
			},

		]
	});

	//点击事件
	$(".chart-btn").click(function(){
		var btn=$(this).index();
		console.log(btn)
		$(".cline").css('visibility','hidden').eq(btn).css('visibility','visible')
	})
	
/*********************************南丁格尔图******************************************************/
	var lpie = echarts.init(document.querySelector('.lpie'));
	lpie.setOption({
		title: [{
			text: '10大热销产品',
			x: '10%',
			y: "80%",
			textStyle: {
				color: "white",
				fontSize: 14,
				fontWeight: 100,
				fontFamily:'宋体'
			}
		}],
		legend: [{
			orient: 'vertical',
			data: ['1.建筑', '2.能源', '3.有色金属', '4.食品', '5.核能', '6.航空航天', '7.交通', '8.IT', '9.医药', '10.机械电子'],
			itemWidth: 10,
			itemHeight: 10,
			itemGap: 4,
			top:'20%',
			right:'3%',
			//position: "inner",
			textStyle: {
				color: "white",
				fontSize:12,
				fontFamily:'宋体'
			}
		}],
		tooltip: [{
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		}],
		series: [{
			name: '10大热销产品',
			type: 'pie',
			radius: '45%',
			center: ['33%', '45%'],
			labelLine: {
				normal: {
					show: true,
					length:0,
				}
			},
			label: {
				normal: {
					show: true,
					position: "right",
					
				}
			},
			data: [{
				value: 99,
				name: '1.建筑',
				itemStyle: {
					normal: {
						color: '#B93C20'
					}
				}
			}, {
				value: 80,
				name: '2.能源',
				itemStyle: {
					normal: {
						color: '#F2CB09'
					}
				}
			}, {
				value: 95,
				name: '3.有色金属',
				itemStyle: {
					normal: {
						color: '#9E2223'
					}
				}
			}, {
				value: 80,
				name: '4.食品',
				itemStyle: {
					normal: {
						color: '#218C3B'
					}
				}
			}, {
				value: 55,
				name: '5.核能',
				itemStyle: {
					normal: {
						color: '#E46606'
					}
				}
			}, {
				value: 60,
				name: '6.航空航天',
				itemStyle: {
					normal: {
						color: '#E38F18'
					}
				}
			}, {
				value: 75,
				name: '7.交通',
				itemStyle: {
					normal: {
						color: '#E38F18'
					}
				}
			}, {
				value: 83,
				name: '8.IT',
				itemStyle: {
					normal: {
						color: '#7DB927'
					}
				}
			}, {
				value: 80,
				name: '9.医药',
				itemStyle: {
					normal: {
						color: '#C39C69'
					}
				}
			}, {
				value: 88,
				name: '10.机械电子',
				itemStyle: {
					normal: {
						color: '#94592E'
					}
				}
			}],
			roseType: 'angle',
			 itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
			
		}]
	})
	
/******************表格上下滚动*****************/
	var tb1=document.querySelector('.tble-left');
	var tb2=document.querySelector('.tble-right');
	var step1=0;
	var step2=0;
    function fn(){
    	if(step1==-282)(step1=0);
    	step1-=3;
    	tb1.style.top=step1+'px';
    }
    function fn2(){
    	if(step2==-282)(step2=0);
    	step2-=3;
    	tb2.style.top=step2+'px';
    }
    var t1=setInterval(fn,250);
	var t2=setInterval(fn2,250);
	
	var tr1=document.querySelectorAll('.tble-left tr');
	var tr2=document.querySelectorAll('.tble-right tr');

	function ff(obj,num,count){
		for (var i = 0; i < obj.length; i++) {
		for (var j = 0; j < i; j++) {
		obj[i].onmouseover=function(){
		clearInterval(num);
	}
		obj[j].onmouseleave=function(){
		num=setInterval(count,150);
		}
		}}
	}
	ff(tr1,t1,fn);
	ff(tr2,t2,fn2);

	//各个图表的点击跳转
	var se1 = document.querySelector(".map"),
		se2 = document.querySelector(".chart_top"),
		se3 = document.querySelector(".bottom_line1"),
		se4 = document.querySelector(".left_pie"),
		se5 = document.querySelector(".center_chart_left"),
		se6 = document.querySelector(".center_chart_right"),
		se7 = document.querySelectorAll(".right_trade>div");
	se5.onclick = function() {
		window.location.href = "country_of_buyer/country_of_buyer.html";
	}
	se6.onclick = function() {
		window.location.href = "buyer_of_China/buyer_of_China.html";
	}
	
	
	//font-change
	$(window).resize(function(){
		var x=$(window).innerWidth();
		var px =(100*x)/2400;
		$("html").css("font-size",px+'px')
		});
	
	
}