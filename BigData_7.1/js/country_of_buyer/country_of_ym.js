
//map
$(function(){
	var myChart = echarts.init(document.getElementById('main'));
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
'罗马尼亚': [26.1,44.23],
};
//value  可控制光点大小
var BJData = [
    [{name:'中国'}, {name:'印度',value:90}],
    [{name:'中国'}, {name:'马来西亚',value:90}],
    [{name:'中国'}, {name:'俄罗斯',value:90}],
    [{name:'中国'}, {name:'以色列',value:90}],
    [{name:'中国'}, {name:'斯里兰卡',value:90}],
    [{name:'中国'}, {name:'哈萨克斯坦',value:90}],
    [{name:'中国'}, {name:'也门',value:90}],
    [{name:'中国'}, {name:'土耳其',value:90}],
    [{name:'中国'}, {name:'波兰',value:90}],
    [{name:'中国'}, {name:'中国',value:90}],
    [{name:'中国'}, {name:'罗马尼亚',value:90}],
  ];
var RBData = [
    [{name:'印度'}, {name:'马来西亚',value:0}],
    [{name:'印度'}, {name:'俄罗斯',value:0}],
    [{name:'印度'}, {name:'以色列',value:0}],
    [{name:'印度'}, {name:'斯里兰卡',value:0}],
    [{name:'印度'}, {name:'哈萨克斯坦',value:0}],
    [{name:'印度'}, {name:'也门',value:0}],
    [{name:'印度'}, {name:'土耳其',value:0}],
    [{name:'印度'}, {name:'波兰',value:0}],
    [{name:'印度'}, {name:'中国',value:0}],
    [{name:'印度'}, {name:'新加坡',value:0}],
    [{name:'印度'}, {name:'罗马尼亚',value:0}],
];
var YDData = [
    [{name:'马来西亚'}, {name:'印度',value:0}],
    [{name:'马来西亚'}, {name:'俄罗斯',value:0}],
    [{name:'马来西亚'}, {name:'以色列',value:0}],
    [{name:'马来西亚'}, {name:'斯里兰卡',value:0}],
    [{name:'马来西亚'}, {name:'哈萨克斯坦',value:0}],
    [{name:'马来西亚'}, {name:'也门',value:0}],
    [{name:'马来西亚'}, {name:'土耳其',value:0}],
    [{name:'马来西亚'}, {name:'波兰',value:0}],
    [{name:'马来西亚'}, {name:'罗马尼亚',value:0}],
    [{name:'马来西亚'}, {name:'中国',value:0}],

];
var ADData = [
    [{name:'俄罗斯'}, {name:'印度',value:0}],
    [{name:'俄罗斯'}, {name:'马来西亚',value:0}],
    [{name:'俄罗斯'}, {name:'以色列',value:0}],
    [{name:'俄罗斯'}, {name:'斯里兰卡',value:0}],
    [{name:'俄罗斯'}, {name:'哈萨克斯坦',value:0}],
    [{name:'俄罗斯'}, {name:'也门',value:0}],
    [{name:'俄罗斯'}, {name:'土耳其',value:0}],
    [{name:'俄罗斯'}, {name:'波兰',value:0}],
    [{name:'俄罗斯'}, {name:'中国',value:0}],
    [{name:'俄罗斯'}, {name:'罗马尼亚',value:0}],
];
var MLData = [
    [{name:'以色列'}, {name:'印度',value:0}],
    [{name:'以色列'}, {name:'马来西亚',value:0}],
    [{name:'以色列'}, {name:'俄罗斯',value:0}],
    [{name:'以色列'}, {name:'斯里兰卡',value:0}],
    [{name:'以色列'}, {name:'哈萨克斯坦',value:0}],
    [{name:'以色列'}, {name:'也门',value:0}],
    [{name:'以色列'}, {name:'罗马尼亚',value:0}],
    [{name:'以色列'}, {name:'土耳其',value:0}],
    [{name:'以色列'}, {name:'波兰',value:0}],
    [{name:'以色列'}, {name:'中国',value:0}],
];
var ELSData = [
    [{name:'斯里兰卡'}, {name:'印度',value:0}],
    [{name:'斯里兰卡'}, {name:'马来西亚',value:0}],
    [{name:'斯里兰卡'}, {name:'俄罗斯',value:0}],
    [{name:'斯里兰卡'}, {name:'以色列',value:0}],
    [{name:'斯里兰卡'}, {name:'哈萨克斯坦',value:0}],
    [{name:'斯里兰卡'}, {name:'也门',value:0}],
    [{name:'斯里兰卡'}, {name:'罗马尼亚',value:0}],
    [{name:'斯里兰卡'}, {name:'土耳其',value:0}],
    [{name:'斯里兰卡'}, {name:'波兰',value:0}],
    [{name:'斯里兰卡'}, {name:'中国',value:0}],
];
var MGData = [
    [{name:'哈萨克斯坦'}, {name:'印度',value:0}],
    [{name:'哈萨克斯坦'}, {name:'马来西亚',value:0}],
    [{name:'哈萨克斯坦'}, {name:'罗马尼亚',value:0}],
    [{name:'哈萨克斯坦'}, {name:'俄罗斯',value:0}],
    [{name:'哈萨克斯坦'}, {name:'以色列',value:0}],
    [{name:'哈萨克斯坦'}, {name:'斯里兰卡',value:0}],
    [{name:'哈萨克斯坦'}, {name:'也门',value:0}],
    [{name:'哈萨克斯坦'}, {name:'土耳其',value:0}],
    [{name:'哈萨克斯坦'}, {name:'波兰',value:0}],
    [{name:'哈萨克斯坦'}, {name:'中国',value:0}],
];
var BXData = [
    [{name:'也门'}, {name:'印度',value:0}],
    [{name:'也门'}, {name:'马来西亚',value:0}],
    [{name:'也门'}, {name:'俄罗斯',value:0}],
    [{name:'也门'}, {name:'以色列',value:0}],
    [{name:'也门'}, {name:'斯里兰卡',value:0}],
    [{name:'也门'}, {name:'罗马尼亚',value:0}],
    [{name:'也门'}, {name:'哈萨克斯坦',value:0}],
    [{name:'也门'}, {name:'土耳其',value:0}],
    [{name:'也门'}, {name:'波兰',value:0}],
    [{name:'也门'}, {name:'中国',value:0}],
 ];
var XBYData = [
    [{name:'土耳其'}, {name:'印度',value:0}],
    [{name:'土耳其'}, {name:'马来西亚',value:0}],
    [{name:'土耳其'}, {name:'俄罗斯',value:0}],
    [{name:'土耳其'}, {name:'罗马尼亚',value:0}],
    [{name:'土耳其'}, {name:'以色列',value:0}],
    [{name:'土耳其'}, {name:'斯里兰卡',value:0}],
    [{name:'土耳其'}, {name:'哈萨克斯坦',value:0}],
    [{name:'土耳其'}, {name:'也门',value:0}],
    [{name:'土耳其'}, {name:'波兰',value:0}],
    [{name:'土耳其'}, {name:'中国',value:0}],
];
var YGData = [
    [{name:'波兰'}, {name:'印度',value:0}],
    [{name:'波兰'}, {name:'马来西亚',value:0}],
    [{name:'波兰'}, {name:'罗马尼亚',value:0}],
    [{name:'波兰'}, {name:'俄罗斯',value:0}],
    [{name:'波兰'}, {name:'以色列',value:0}],
    [{name:'波兰'}, {name:'斯里兰卡',value:0}],
    [{name:'波兰'}, {name:'哈萨克斯坦',value:0}],
    [{name:'波兰'}, {name:'也门',value:0}],
    [{name:'波兰'}, {name:'土耳其',value:0}],
    [{name:'波兰'}, {name:'中国',value:0}],
];
/*var YDLData = [
    [{name:'新加坡'}, {name:'印度',value:0}],
    [{name:'新加坡'}, {name:'马来西亚',value:0}],
    [{name:'新加坡'}, {name:'俄罗斯',value:0}],
    [{name:'新加坡'}, {name:'以色列',value:0}],
    [{name:'新加坡'}, {name:'斯里兰卡',value:0}],
    [{name:'新加坡'}, {name:'哈萨克斯坦',value:0}],
    [{name:'新加坡'}, {name:'也门',value:0}],
    [{name:'新加坡'}, {name:'土耳其',value:0}],
    [{name:'新加坡'}, {name:'波兰',value:0}],
    [{name:'新加坡'}, {name:'中国',value:0}],
    [{name:'新加坡'}, {name:'罗马尼亚',value:0}],
];*/
var LMNYData = [
    [{name:'罗马尼亚'}, {name:'印度',value:0}],
    [{name:'罗马尼亚'}, {name:'马来西亚',value:0}],
    [{name:'罗马尼亚'}, {name:'俄罗斯',value:0}],
    [{name:'罗马尼亚'}, {name:'以色列',value:0}],
    [{name:'罗马尼亚'}, {name:'斯里兰卡',value:0}],
    [{name:'罗马尼亚'}, {name:'哈萨克斯坦',value:0}],
    [{name:'罗马尼亚'}, {name:'也门',value:0}],
    [{name:'罗马尼亚'}, {name:'土耳其',value:0}],
    [{name:'罗马尼亚'}, {name:'波兰',value:0}],
    [{name:'罗马尼亚'}, {name:'中国',value:0}],
    [{name:'罗马尼亚'}, {name:'新加坡',value:0}],
];
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem[0].name];
        var toCoord = geoCoordMap[dataItem[1].name];
        if (fromCoord && toCoord) {
            res.push({
                fromName: dataItem[0].name,
                toName: dataItem[1].name,
                coords: [fromCoord, toCoord]
            });
        }
    }
    return res;
};
var series = [];
				[
				['中国', BJData],
				['日本', RBData],
//				['意大利', YDLData],
				['罗马尼亚',LMNYData],
				['英国', YGData],
				['印度', YDData],
				['澳大利亚', ADData],
				['西班牙', XBYData],
				['马来西亚', MLData],
				['俄罗斯', ELSData],
				['美国', MGData],
				['巴西', BXData]
				].forEach(function (item, i) {
    series.push({
        name: '贸易' + ' Top15',
        type: 'lines',
        zlevel: 10,
        //光标样式
        effect: {
                constantSpeed: 50,
                show: true,
                trailLength: 0.3,
                symbolSize: 2.2,
                color: '#fff',
            },
        
        lineStyle: {
            normal: {
                color: '#fff',
                width: 0,
                curveness: 0,
            }
        },
        data: convertData(item[1])
    },
    {
        name:'',
        type: 'lines',
        zlevel: 2,  
        symbolSize: 15,
            //线样式
        lineStyle: {
            normal: {
                color: '#fff',
                width: 0.5,
                opacity:0.5,
            }
        }, 
        data: convertData(item[1])
    },
    {
        name: '',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        label: {
            //地名
            normal: {
                show: true,
                position: 'right',
                formatter: '{b}',
                 shadowBlur: 2,
                 shadowColor: 'rgba(255, 255, 255, 0.8)',
            }
        },
        symbolSize: function (val) {
            return val[2] / 8;
        },
        itemStyle: {
            normal: {
                color: 'aqua',
                shadowBlur: 10,
                 shadowColor: 'rgba(255, 255, 255, 0.8)',
            },
         },
        tooltip:{
        	formatter:function(params){
        		return params.name+":"+params.value[2]+"(亿美元)"
        		
        	}
        },
        data: item[1].map(function (dataItem) {
            return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
            };
        })
    });
});

option = {
    backgroundColor: '',
    title : {
    	//标题
        text: '',
        subtext: '',
        left: 'center',
        textStyle : {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item'
    },
    //地图样式
    geo: {
        map: 'world',
        label: {
            emphasis: {
                show:false
            }
        },
        //地图可否拖动
        roam: true,
        scaleLimit:{
        	'min':'1',
        	'max':'3'
        },
        itemStyle: {
            normal: {
                //地图颜色
                areaColor: '#0f345a',
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
  myChart.setOption(option);

  myChart.on('click',function(params){
  	var city = params.name;
  	if(city =='印度'){
       window.location.href = 'country_of_yd.html';
  	}
  	if(city =='马来西亚'){
       window.location.href = 'country_of_mlxy.html';
  	}
  	if(city =='斯里兰卡'){
       window.location.href = 'country_of_sllk.html';
  	}
  	if(city =='哈萨克斯坦'){
       window.location.href = 'country_of_hskst.html';
  	}
  	if(city =='土耳其'){
       window.location.href = 'country_of_teq.html';
  	}
  	if(city =='波兰'){
       window.location.href = 'country_of_bl.html';
  	}
  	if(city =='以色列'){
       window.location.href = 'country_of_ysl.html';
  	}
  	if(city =='罗马尼亚'){
       window.location.href = 'country_of_lmny.html';
  	}
  	if(city =='俄罗斯'){
       window.location.href = 'country_of_buyer.html';
  	}
  })
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//box1


	var myChart = echarts.init(document.getElementById('box1'));

		option = {
    backgroundColor: '#3d3734',
    width:'95%',
    height:'55%',
    title: {
        text: '也门采购量趋势图(单位:亿美金)',
        textStyle: {
            fontWeight: 'normal',
            fontFamily:'宋体',
            fontSize: 8,
            color: 'white',
        },
        left: '2%',
    },
    data:['采购量','同期环比曲线'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 20,
        itemHeight: 1,
        itemGap: 3,
        right: '3%',
        top:10,
        textStyle: {
            fontSize: 8,
            color: '#F1F1F3',
            fontFamily:'宋体'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        top: 35,
        containLabel: true,
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
                fontSize:5
            }
        },
        axisLabel:{  
                         interval:0,
                         rotate:45,
                    },  
                    
        data: ['俄罗斯','马来西亚','斯里兰卡',{value:'也门',textStyle:{color:'red'}},'以色列','土耳其','波兰','哈萨克斯坦','印度','罗马尼亚'],
    }],
    yAxis: [
     {
    	min:0,max:1500,interval:500,
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
               color: 'white',
                fontSize:8
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 8
            }
        },
        splitLine: {
            lineStyle: {
                color: '#434141'
            }
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
            barWidth:'15',
            data:[200, 490, 700, 232, 256, 767, 622, 640, 330,300],
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
        smooth: true,
        lineStyle: {
            normal: {
                width: 1,
                 type: 'dashed'
            }
        },
         areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 0, 0, 0)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 0, 0, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(128,171,204)',
            }
        },
        data: [0.5,0.6,0.4,0.5,0.7,0.7,0.8,0.4,0.5,0.3]
    }, ]
   
};
  myChart.setOption(option);
//box2
		var myChart = echarts.init(document.getElementById('box2'));

		option = {
    backgroundColor: '#3d3734',
    width:'95%',
    height:'60%',
    data:['成交量','同期环比曲线'],
    title: {
        text: '也门成交量趋势图(单位:亿美金)',
        textStyle: {
            fontWeight: 'normal',
            fontFamily:'宋体',
            fontSize: 8,
            color: 'white',
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
        icon: 'rect',
        itemWidth: 10,
        itemHeight: 1,
        itemGap: 3,
        right: '3%',
        top:10,
        textStyle: {
            fontSize: 8,
            color: '#F1F1F3',
            fontFamily:'宋体'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        top: 35,
        containLabel: true,
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
                fontSize:5
            }
        }, 
         axisLabel:{  
                         interval:0,
                    },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [
     {
    	min:0,max:1500,interval:500,
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
               color: 'white',
                fontSize:8
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 8
            }
        },
        splitLine: {
            lineStyle: {
                color: '#434141'
            }
        },
    },
    {
    	min:0,max:1,interval:0.1,
            show:false,
        },
   ],
    series: [ {
            name:'成交量',
            type:'bar',
            barWidth:'15',
            data:[780, 560, 1100, 232, 786, 767, 356, 622, 926, 400, 870, 1430],
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
        smooth: true,
        lineStyle: {
            normal: {
                width: 1,
                 type: 'dashed'
            }
        },
         areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 0, 0, 0)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 0, 0, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(128,171,204)',
            }
        },
        data: [0.3,0.4,0.6,0.8,0.5,0.3,0.5,0.2,0.3,0.5,0.2,0.7]
    }, ]
   
};
  myChart.setOption(option);

//box3

			var myChart = echarts.init(document.getElementById('box3'));
	option = {
    title : {
        text: '也门产品偏好程度(%)',
        textStyle:{
            color:'white',
            fontSize:'10'
        },
        x:'45%',
        y:'5%'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x : 'right',
        y : 'center',
        height:'100',
        data:['有色金属','航空航天','环保','食品','建筑','核能','能源','交通'],
        textStyle:{
            color:'white'
        },
    }, 
    calculable : true,
    backgroundColor:'#3d3734',
    width:'95%',
    height:'60%',
    series : [
        {
            name:'偏好程度',
            type:'pie',
            radius : '55%',//图片占据canvas的大小   
            center : ['25%', '55%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: true
                },
                emphasis: {
                    show: true
                }
            },
             labelLine: {  
                    normal: {
                        smooth: 0.2,    
                        length: 7,   
                        length2: 7//线条下一节的长度    
                    }    
               },
            data:[
                {value:10, name:'环保'},
                {value:8, name:'食品'},
                {value:15, name:'建筑'},
                {value:25, name:'核能'},
                {value:20, name:'能源'},
                {value:35, name:'航空航天'},
                {value:30, name:'有色金属'},
                {value:30, name:'交通'}
            ]
        },
        
    ]
};
  myChart.setOption(option);
//box4

			var myChart = echarts.init(document.getElementById('box4'));
		option = {
    backgroundColor: '#3d3734',
    width:'95%',
    height:'60%',
    title: {
        text: '也门满意度(%)',
        textStyle: {
            fontWeight: 'normal',
            fontFamily:'宋体',
            fontSize: 8,
            color: 'white',
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
        icon: 'rect',
        itemWidth: 20,
        itemHeight: 1,
        itemGap: 3,
        right: '3%',
        top:10,
        textStyle: {
            fontSize: 8,
            color: '#F1F1F3',
            fontFamily:'宋体'
        },
        data:['满意度','同期环比曲线']
    },
    grid: {
        left: '3%',
        right: '4%',
        top: 35,
        containLabel: true,
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
                fontSize:5,
            }
        },
        axisLabel:{  
                         interval:0,
                         rotate:20,
                    },  
        data:['有色金属','航空航天','环保','食品','建筑','核能','能源','交通'],
    }],
    yAxis: [
     {
    	min:0,max:100,interval:20,
        type: 'value',
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
               color: 'white',
                fontSize:8
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 8
            }
        },
        splitLine: {
            lineStyle: {
                color: '#434141'
            }
        },
    },
    {
    	min:0,max:1,interval:0.1,
            show:false,
        },
   ],
    series: [ {
            name:'满意度',
            type:'bar',
            barWidth:'20',
            data:[20, 49, 70, 23, 25, 76, 80, 66],
             itemStyle: {
            normal: {
                color: function(params) {
                                        // build a color map as your need.
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

                                   },

                width:0.5,
            },
            borderWidth:100
        },
       },
    {
        name: '同期环比曲线',
        type: 'line',
         yAxisIndex: 1,
        smooth: true,
        lineStyle: {
            normal: {
                width: 1,
                 type: 'dashed'
            }
        },
         areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 0, 0, 0)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 0, 0, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(128,171,204)',
            }
        },
        data: [0.5,0.6,0.4,0.5,0.7,0.7,0.8,0.1]
    }, ]
   
};
  myChart.setOption(option);
  
 
//big_box1
	function bigbox1() {
		var myChart = echarts.init(document.getElementById('box1_big'));

		option = {
			backgroundColor: '#3e61aa',
			width: '95%',
			height: '80%',
			top: '10%',
			title: {
				text: '也门采购量趋势图(单位:亿美金)',
				textStyle: {
					fontWeight: 'normal',
					fontFamily: '宋体',
					fontSize: 20,
					color: 'white',
				},
				left: '2%',
			},
			data: ['采购量', '同期环比曲线'],
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					lineStyle: {
						color: '#57617B'
					}
				}
			},
			legend: {
				icon: 'rect',
				itemWidth: 25,
				itemHeight: 1,
				itemGap: 3,
				right: '3%',
				top: 10,
				textStyle: {
					fontSize: 20,
					color: '#F1F1F3',
					fontFamily: '宋体'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				top: 45,
				containLabel: true,
			},
			xAxis: [{
				minInterval: 0.5,
				type: 'category',
				boundaryGap: true,
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: 'white',
						fontSize: 16
					}
				},
				axisLabel: {
					interval: 0,
					rotate: 30,
					textStyle: {
						fontSize: 16
					}
				},
        data: ['俄罗斯','马来西亚','新加坡','斯里兰卡','也门','以色列','土耳其','罗马尼亚','哈萨克斯坦','波兰']
				 
			}],
			yAxis: [{
				min: 0,
				max: 1500,
				interval: 500,
				type: 'value',
				axisTick: {
					show: true
				},
				axisLine: {
					lineStyle: {
						color: 'white',
						fontSize: 16
					}
				},
				axisLabel: {
					margin: 10,
					textStyle: {
						fontSize: 16
					}
				},
				splitLine: {
					lineStyle: {
						color: '#434141'
					}
				},
			}, {
				min: 0,
				max: 1,
				interval: 0.1,
				show: false,
			}, ],
			series: [{
				name: '采购量',
				type: 'bar',
				x: 'right',
				y: 'center',
				barWidth: '15',
				data: [200, 490, 700, 232, 256, 767, 1356, 640, 330, 300],
				itemStyle: {
					normal: {
						color: '#e94f2e',
						width: 0.5,
					},
					borderWidth: 100
				},
			}, {
				name: '同期环比曲线',
				type: 'line',
				yAxisIndex: 1,
				smooth: true,
				lineStyle: {
					normal: {
						width: 1,
						type: 'dashed'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(0, 0, 0, 0)'
						}, {
							offset: 0.8,
							color: 'rgba(0, 0, 0, 0)'
						}], false),
						shadowColor: 'rgba(0, 0, 0, 0.1)',
						shadowBlur: 10
					}
				},
				itemStyle: {
					normal: {
						color: 'rgb(128,171,204)',
					}
				},
				data: [0.5, 0.6, 0.4, 0.5, 0.7, 0.7, 0.8, 0.4, 0.5, 0.3]
			}, ]

		};
		myChart.setOption(option);

	}

	//box2_big

	function bigbox2() {
		var myChart = echarts.init(document.getElementById('box2_big'));

		option = {
			backgroundColor: '#3e61aa',
			width: '95%',
			height: '80%',
			data: ['成交量', '同期环比曲线'],
			title: {
				text: '也门成交量趋势图(单位:亿美金)',
				textStyle: {
					fontWeight: 'normal',
					fontFamily: '宋体',
					fontSize: 20,
					color: 'white',
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
				icon: 'rect',
				itemWidth: 10,
				itemHeight: 1,
				itemGap: 3,
				right: '3%',
				top: 10,
				textStyle: {
					fontSize: 20,
					color: '#F1F1F3',
					fontFamily: '宋体'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				top: 45,
				containLabel: true,
			},
			xAxis: [{
				minInterval: 0.5,
				type: 'category',
				boundaryGap: true,
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: 'white',
						fontSize: 20
					}
				},
				axisLabel: {
					interval: 0,
					textStyle: {
						fontSize: 16
					}
				},
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			}],
			yAxis: [{
				min: 0,
				max: 1500,
				interval: 500,
				type: 'value',
				axisTick: {
					show: true
				},
				axisLine: {
					lineStyle: {
						color: 'white',
						fontSize: 16
					}
				},
				axisLabel: {
					margin: 10,
					textStyle: {
						fontSize: 16
					}
				},
				splitLine: {
					lineStyle: {
						color: '#434141'
					}
				},
			}, {
				min: 0,
				max: 1,
				interval: 0.1,
				show: false,
			}, ],
			series: [{
				name: '成交量',
				type: 'bar',
				barWidth: '15',
				data: [780, 560, 1100, 232, 786, 767, 356, 622, 926, 400, 870, 1430],
				itemStyle: {
					normal: {
						color: '#e94f2e',
						width: 0.5,
					},
					borderWidth: 100
				},
			}, {
				name: '同期环比曲线',
				type: 'line',
				yAxisIndex: 1,
				smooth: true,
				lineStyle: {
					normal: {
						width: 1,
						type: 'dashed',
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(0, 0, 0, 0)'
						}, {
							offset: 0.8,
							color: 'rgba(0, 0, 0, 0)'
						}], false),
						shadowColor: 'rgba(0, 0, 0, 0.1)',
						shadowBlur: 10
					}
				},
				itemStyle: {
					normal: {
						color: 'rgb(128,171,204)',
					}
				},
				data: [0.3, 0.4, 0.6, 0.8, 0.5, 0.3, 0.5, 0.2, 0.3, 0.5, 0.2, 0.7]
			}, ]

		};
		myChart.setOption(option);
	}

	//box3_big

	function bigbox3() {
		var myChart = echarts.init(document.getElementById('box3_big'));
		option = {
			title: {
				text: '也门产品偏好程度(%)',
				textStyle: {
					color: 'white',
					fontSize: '30'
				},
				x: '45%',
				y: '5%'
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},
			legend: {
				orient: 'vertical',
				x: 'right',
				y: 'center',
				height: '150',
				itemWidth: 50,
				itemHeight: 20,
				data: ['有色金属', '航空航天', '环保', '食品', '建筑', '核能', '机械电子', '能源', '交通', '医药'],
				textStyle: {
					color: 'white',
					fontSize: '16'
				},
			},
			calculable: true,
			backgroundColor: '#3e61aa',
			width: '95%',
			height: '60%',
			series: [{
					name: '偏好程度',
					type: 'pie',
					radius: '70%', //图片占据canvas的大小   
					center: ['30%', '55%'],
					roseType: 'radius',
					label: {
						normal: {
							show: true,
							textStyle: {
								fontSize: '20'
							}
						},
						emphasis: {
							show: true
						}
					},

					labelLine: {
						normal: {
							smooth: 0.2,
							length: 20,
							length2: 10 //线条下一节的长度    
						}
					},
					data: [{
						value: 10,
						name: '环保'
					}, {
						value: 8,
						name: '食品'
					}, {
						value: 15,
						name: '建筑'
					}, {
						value: 25,
						name: '核能'
					}, {
						value: 20,
						name: '能源'
					}, {
						value: 35,
						name: '航空航天'
					}, {
						value: 30,
						name: '有色金属'
					}, {
						value: 30,
						name: '交通'
					}, {
						value: 25,
						name: '医药',
						itemStyle: {
					normal: {
						color: '#B93C20'
					}
				}
					}, {
						value: 18,
						name: '机械电子',
						itemStyle: {
					normal: {
						color: '#E46606'
					}
				}
					}]
				},

			]
		};
		myChart.setOption(option);

	}

	//box4_big

	function bigbox4() {

		var myChart = echarts.init(document.getElementById('box4_big'));
		option = {
			backgroundColor: '#3e61aa',
			width: '95%',
			height: '80%',
			title: {
				text: '也门满意度(%)',
				textStyle: {
					fontWeight: 'normal',
					fontFamily: '宋体',
					fontSize: 20,
					color: 'white',
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
				icon: 'rect',
				itemWidth: 20,
				itemHeight: 1,
				itemGap: 3,
				right: '3%',
				top: 10,
				textStyle: {
					fontSize: 16,
					color: '#F1F1F3',
					fontFamily: '宋体'
				},
				data: ['满意度', '同期环比曲线']
			},
			grid: {
				left: '3%',
				right: '4%',
				top: 45,
				containLabel: true,
			},
			xAxis: [{
				minInterval: 0.5,
				type: 'category',
				boundaryGap: true,
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: 'white',
						fontSize: 20,
					}
				},
				axisLabel: {
					interval: 0,
					rotate: 20,
					textStyle: {
						fontSize: 16
					}
				},
				data: ['有色金属', '航空航天', '环保', '食品', '建筑', '核能', '能源', '交通','医药','机械电子'],
			}],
			yAxis: [{
				min: 0,
				max: 100,
				interval: 20,
				type: 'value',
				axisTick: {
					show: true
				},
				axisLine: {
					lineStyle: {
						color: 'white',
						fontSize: 16
					}
				},
				axisLabel: {
					margin: 10,
					textStyle: {
						fontSize: 16
					}
				},
				splitLine: {
					lineStyle: {
						color: '#434141'
					}
				},
			}, {
				min: 0,
				max: 1,
				interval: 0.1,
				show: false,
			}, ],
			series: [{
				name: '满意度',
				type: 'bar',
				barWidth: '20',
				data: [20, 49, 70, 23, 25, 76, 80, 66,38,84],
				itemStyle: {
					normal: {
						color: function(params) {
							// build a color map as your need.
							var colorList = [{
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#cd3c21' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#c6ae43' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}, {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#a94a45' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#ea821a' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}, {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#d03a56' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#d58985' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}, {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#1a655b' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#368db9' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}, {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#8f1c2c' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#c4432f' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}, {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#358da8' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#68c1d5' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}, {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#8e1c2c' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#be172c' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}, {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 1,
								y2: 0,
								colorStops: [{
									offset: 0,
									color: '#005789' // 0% 处的颜色
								}, {
									offset: 1,
									color: '#399cb8' // 100% 处的颜色
								}],
								globalCoord: false // 缺省为 false
							}];

							return colorList[params.dataIndex]

						},

						width: 0.5,
					},
					borderWidth: 100
				},
			}, {
				name: '同期环比曲线',
				type: 'line',
				yAxisIndex: 1,
				smooth: true,
				lineStyle: {
					normal: {
						width: 1,
						type: 'dashed'
					}
				},
				areaStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(0, 0, 0, 0)'
						}, {
							offset: 0.8,
							color: 'rgba(0, 0, 0, 0)'
						}], false),
						shadowColor: 'rgba(0, 0, 0, 0.1)',
						shadowBlur: 10
					}
				},
				itemStyle: {
					normal: {
						color: 'rgb(128,171,204)',
					}
				},
				data: [0.5, 0.6, 0.4, 0.5, 0.7, 0.7, 0.8, 0.1,0.3,0.5]
			}, ]

		};
		myChart.setOption(option);

	}
  
  //点击事件
  
  $(".fangda1").click(function() {
		$(".box_small").eq(0).css("display", "block")
		$(".box_small").eq(0).animate({
			'opacity': '1',
			'height': '60%',
			'width': '70%',
			'top': '50%',
			'left': '50%'
		}, 300, function() {
			bigbox1();
		})
	}); $(".box_small img").eq(0).click(function() {
		$(".box_small").eq(0).animate({
			'opacity': '0'
		}, 300, function() {
			$(".box_small").eq(0).css({
				"display": "none",
				'height': '0',
				'width': '0',
				'top': '9%',
				'left': '97%'
			})
		})
	}); $(".fangda2").click(function() {
		$(".box_small").eq(1).css("display", "block")
		$(".box_small").eq(1).animate({
			'opacity': '1',
			'height': '60%',
			'width': '70%',
			'top': '50%',
			'left': '50%'
		}, 300, function() {
			bigbox2()
		})
	}); $(".box_small img").eq(1).click(function() {
		$(".box_small").eq(1).animate({
			'opacity': '0'
		}, 300, function() {
			$(".box_small").eq(1).css({
				"display": "none",
				'height': '0',
				'width': '0',
				'top': '31%',
				'left': '97%'
			})
		})
	}); $(".fangda3").click(function() {
		$(".box_small").eq(2).css("display", "block")
		$(".box_small").eq(2).animate({
			'opacity': '1',
			'height': '60%',
			'width': '70%',
			'top': '50%',
			'left': '50%'
		}, 300, function() {
			bigbox3()
		})
	}); $(".box_small img").eq(2).click(function() {
		$(".box_small").eq(2).animate({
			'opacity': '0'
		}, 300, function() {
			$(".box_small").eq(2).css({
				"display": "none",
				'height': '0',
				'width': '0',
				'top': '53%',
				'left': '97%'
			})
		})
	}); $(".fangda4").click(function() {
		$(".box_small").eq(3).css("display", "block")
		$(".box_small").eq(3).animate({
			'opacity': '1',
			'height': '60%',
			'width': '70%',
			'top': '50%',
			'left': '50%'
		}, 300, function() {
			bigbox4()
		})
	}); $(".box_small img").eq(3).click(function() {

		$(".box_small").eq(3).animate({
			'opacity': '0'
		}, 300, function() {
			$(".box_small").eq(3).css({
				"display": "none",
				'height': '0',
				'width': '0',
				'top': '75%',
				'left': '97%'
			})
		})
	});

	$(".fangda").click(function() {
		$(".menban").css("display", "block")
		$(".menban").animate({
			'opacity': '0.4'
		}, 300)
	}); $(".box_small img").click(function() {
		$(".menban").animate({
			'opacity': '0'
		}, 300, function() {
			$(".menban").css("display", "none")
		})
	});
})
