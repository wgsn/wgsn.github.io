
//map
$(function(){
	var myChart = echarts.init(document.getElementById('main'));
var data = [
 {name: '加纳', value: 50},
{name: '安道尔', value: 50},
{name: '挪威', value: 50},
{name: '老挝', value: 50},
{name: '新加坡', value: 50},
{name: '柬埔寨', value: 50},
{name: '越南', value: 50},
{name: '喀麦隆', value: 50},
{name: '文莱', value: 50},
{name: '丹麦', value: 50},
{name: '菲律宾', value: 50},
{name: '印度尼西亚', value: 50},
{name: '奥地利', value: 50},
{name: '利比亚', value: 50},
{name: '安哥拉', value: 50},
{name: '德国', value: 50},
{name: '捷克', value: 50},
{name: '马耳他', value: 50},
{name: '乍得', value: 50},
{name: '巴布亚新几内亚', value: 50},
{name: '刚果', value: 50},
{name: '克罗地亚', value: 50},
{name: '新西兰', value: 50},
{name: '斐济', value: 50},
{name: '瑞典', value: 50},
{name: '南非', value: 50},
{name: '波兰', value: 50},
{name: '匈牙利', value: 50},
{name: '西班牙', value: 50},
{name: '贝宁', value: 50},
{name: '塞尔维亚', value: 50},
{name: '马其顿', value: 50},
{name: '保加利亚', value: 50},
{name: '希腊', value: 50},
{name: '立陶宛', value: 50},
{name: '拉脱维亚', value: 50},
{name: '爱沙尼亚', value: 50},
{name: '芬兰', value:50},
{name: '罗马尼亚', value: 50},
{name: '白俄罗斯', value: 50},
{name: '摩尔多瓦', value: 50},
{name: '布隆迪', value: 50},
{name: '阿尔及利亚', value: 50},
{name: '乌克兰', value: 50},
{name: '埃及', value: 50},
{name: '苏丹', value: 50},
{name: '土耳其', value: 50},
{name: '塞浦路斯', value: 50},
{name: '黎巴嫩', value: 50},
{name: '约旦', value: 50},
{name: '叙利亚', value: 50},
{name: '肯尼亚', value: 50},
{name: '埃塞俄比亚', value: 50},
{name: '沙特阿拉伯', value: 50},
{name: '坦桑尼亚', value: 50},
{name: '比利时', value: 50},
{name: '荷兰', value: 50},
{name: '吉布提', value: 50},
{name: '伊拉克', value: 50},
{name: '也门', value: 50},
{name: '马达加斯加', value: 50},
{name: '科威特', value: 50},
{name: '阿塞拜疆', value: 50},
{name: '巴林', value: 50},
{name: '卡塔尔', value: 50},
{name: '伊朗', value: 50},
{name: '阿联酋', value: 50},
{name: '阿曼', value: 50},
{name: '卢森堡', value: 50},
{name: '塔吉克斯坦', value: 50},
{name: '阿富汗', value: 50},
{name: '尼日利亚', value: 50},
{name: '摩纳哥', value: 50},
{name: '瑞士', value: 50},
{name: '巴基斯坦', value: 50},
{name: '马尔代夫', value: 50},
{name: '哈萨克斯坦', value: 50},
{name: '斯里兰卡', value: 50},
{name: '尼泊尔', value: 50},
{name: '不丹', value: 50},
{name: '意大利', value: 50},
{name: '列支敦士登', value: 50},
{name: '孟加拉国', value: 50},
{name: '缅甸', value: 50},
{name: '布基纳法索', value: 50},
{name: '智利', value: 50},
{name: '英国', value: 50},
{name: '冰岛', value: 50},
{name: '葡萄牙', value: 50},
{name: '巴西', value: 50},
{name: '苏里南', value: 50},
{name: '加拿大', value: 50},
{name: '阿根廷', value: 50},
{name: '巴巴多斯', value: 50},
{name: '爱尔兰', value: 50},
{name: '法国', value: 50},
{name: '法国', value: 50},
{name: '格林纳达', value: 50},
{name: '波多黎各', value: 50},
{name: '委内瑞拉', value: 50},
{name: '玻利维亚', value: 50},
{name: '摩洛哥', value: 50},
{name: '马里', value: 50},
{name: '海地', value: 50},
{name: '哥伦比亚', value: 50},
{name: '牙买加', value: 50},
{name: '秘鲁', value: 50},
{name: '巴哈马', value: 50},
{name: '巴拿马', value: 50},
{name: '古巴', value: 50},
{name: '哥斯达黎加', value: 50},
{name: '厄瓜多尔', value: 50},
{name: '危地马拉', value: 50},
{name: '墨西哥', value: 50},
{name: '阿拉斯加', value: 50},
{name: '阿鲁巴', value: 50},
{name: '安圭拉', value: 50},
{name: '澳门', value: 50},
{name: '巴勒斯坦', value: 50},
{name: '百慕达', value: 50},
{name: '多米尼加共和国', value: 50},
{name: '格鲁吉亚', value: 50},
{name: '吉尔吉斯斯坦', value: 50},
{name: '开曼群岛', value: 50},
{name: '萨摩亚', value: 50},
{name: '圣马丁岛（荷兰）', value: 50},
{name: '斯洛伐克', value: 50},
{name: '特里尼达和多巴哥', value: 50},
{name: '乌兹别克斯坦', value: 50},
{name: '美国', value: 100},
{name: '印度', value: 100},
{name: '泰国', value: 100},
{name: '韩国', value: 100},
{name: '俄罗斯', value: 100},
{name: '马来西亚', value: 100},
{name: '澳大利亚', value: 100},
{name: '日本', value: 100},
{name: '香港', value: 500},
{name: '中国台湾', value: 100},


];
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
'罗马尼亚': [26.1,44.23],
'加纳':[0.15,5.33],
'安道尔':[1.31,42.3],
'挪威':[10.41,59.56],
'老挝':[102.48,18.1],
'柬埔寨':[104.55,11.35],
'越南':[105.53,21.1],
'喀麦隆':[11.31,3.51],
'文莱':[114.58,4.56],
'丹麦':[12.34,55.43],
'菲律宾':[123.54,10.17],
'印度尼西亚':[128.1,4.5],
'奥地利':[13.3,47.54],
'利比亚':[13.12,32.58],
'安哥拉':[13.2,8.5],
'德国':[13.2,52.31],
'捷克':[14.25,50.5],
'马耳他':[14.31,35.53],
'乍得':[14.59,12.1],
'刚果':[15.14,4.14],
'克罗地亚':[15.58,45.49],
'瑞典':[18.,59.23],
'南非':[18.27,33.55],
'波兰':[18.38,54.22],
'匈牙利':[19.15,47.26],
'西班牙':[2.6,41.18],
'贝宁':[2.47,6.3],
'塞尔维亚':[20.28,44.49],
'马其顿':[21.3,41.35],
'保加利亚':[23.2,42.43],
'希腊':[23.44,38.2],
'立陶宛':[23.54,54.54],
'拉脱维亚':[24.5,56.53],
'爱沙尼亚':[24.48,59.22],
'芬兰':[24.53,60.1],
'罗马尼亚':[26.1,44.23],
'白俄罗斯':[27.3,53.51],
'摩尔多瓦':[28.5,47.],
'布隆迪':[29.21,3.22],
'阿尔及利亚':[3.13,36.42],
'乌克兰':[30.29,50.28],
'埃及':[31.12,30.1],
'苏丹':[32.36,15.34],
'土耳其':[32.54,40.2],
'塞浦路斯':[33.23,35.11],
'黎巴嫩':[35.3,33.52],
'约旦':[35.56,31.57],
'叙利亚':[36.19,33.3],
'肯尼亚':[36.49,1.17],
'埃塞俄比亚':[38.42,9.3],
'沙特阿拉伯':[39.1,21.3],
'坦桑尼亚':[39.18,6.51],
'比利时':[4.21,50.51],
'荷兰':[4.52,52.21],
'吉布提':[42.5,12.],
'伊拉克':[44.22,33.14],
'也门':[45.,12.5],
'马达加斯加':[47.31,18.55],
'科威特':[48.,29.2],
'阿塞拜疆':[49.53,40.22],
'巴林':[50.36,26.12],
'卡塔尔':[51.34,25.15],
'伊朗':[51.4,32.42],
'阿联酋':[54.23,24.27],
'阿曼':[58.37,23.36],
'卢森堡':[6.8,49.37],
'塔吉克斯坦':[68.51,38.38],
'阿富汗':[69.1,34.3],
'尼日利亚':[7.11,9.12],
'摩纳哥':[7.25,43.4],
'瑞士':[7.36,47.34],
'巴基斯坦':[73.9,31.25],
'马尔代夫':[73.28,4.1],
'哈萨克斯坦':[76.55,43.19],
'斯里兰卡':[79.52,6.55],
'尼泊尔':[85.19,27.42],
'不丹':[89.4,27.29],
'意大利':[9.1,45.28],
'列支敦士登':[9.31,47.9],
'孟加拉国':[91.48,22.2],
'缅甸':[96.9,16.46],
'布基纳法索':[1.4,12.2],
'智利':[-71.2,-30.5],
'英国':[130.5,25.4],
'冰岛':[21.58,64.9],
'葡萄牙':[28.,38.3],
'巴西':[-60,-15.45],
'苏里南':[-45,-9.52],
'加拿大':[57.8,51.26],
'阿根廷':[-63.3,-33.2],
'爱尔兰':[6.15,53.26],
'法国':[120.32,16.14],
'格林纳达':[-59,15.4],
'波多黎各':[66.8,18.29],
'委内瑞拉':[-70,10.3],
'玻利维亚':[-65,-20.3],
'摩洛哥':[7.37,33.36],
'马里':[7.59,12.4],
'海地':[-72.2,18.32],
'哥伦比亚':[-74.5,7.38],
'牙买加':[-76.48,17.58],
'秘鲁':[-75.55,-12.6],
'巴哈马':[-76.2,25.3],
'巴拿马':[79.3,8.57],
'古巴':[-79,21.8],
'哥斯达黎加':[-50.4,1.59],
'厄瓜多尔':[89.36,0.54],
'危地马拉':[90.22,14.38],
'墨西哥':[99.56,16.51],
'阿拉斯加':[-150,60.28],
'阿鲁巴':[-77,35.18],
'安圭拉':[63.04,18.13],
'澳门':[115.07,21.33],
'巴勒斯坦':[34.28,31.3],
'百慕达':[-60,30.18],
'多米尼加共和国':[-72,19.3],
'格鲁吉亚':[44.48,41.43],
'吉尔吉斯斯坦':[74.46,42.53],
'开曼群岛':[-83,19.20],
'圣马丁岛（荷兰）':[-75,-50.47],
'斯洛伐克':[17.06,48.09],
'特里尼达和多巴哥':[-61.32,10.39],
'乌兹别克斯坦':[69.13,41.16],
'美国':[-100,45.52],
'印度':[78,27.09],
'泰国':[100.29,13.5],
'韩国':[126.38,37.3],
'俄罗斯':[92.46,56.05],
'马来西亚':[101.42,3.08],
'澳大利亚':[121.51,-25.28],
'日本':[135.45,35],
'香港':[114.15,22.15],
'中国台湾':[121,30],
'加拿大':[-115,60.26],
'墨西哥':[-102,25.51],
'巴巴多斯':[-57.37,13.6],

};

var convertData = function (data) {
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

option = {
    backgroundColor: '#030c15',
    title: {
//      text: '量',
        subtext: '',
        sublink: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip : {
        trigger: 'item',
        formatter:function(params){
        		return params.name
        		
        	}

    },
    legend: {
        orient: 'vertical',
        y: 'bottom',
        x:'right',
//      data:['pm2.5'],
        textStyle: {
            color: '#fff'
        }
    },
    geo: {
        map: 'world',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
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
    series : [
        {
//          name: 'pm2.5',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    //100国家光点颜色
                    color: '#ddb926'
                }
            }
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, 10)),
            symbolSize: function (val) {
                return val[2] / 10;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                //光点颜色
                normal: {
                    color: '#f4e925',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
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
  	if(city =='香港'){
       window.location.href = 'country_of_xg.html';
  	}
  	if(city =='中国台湾'){
       window.location.href = 'country_of_tw.html';
  	}
  	if(city =='澳大利亚'){
       window.location.href = 'country_of_adly.html';
  	}
  	if(city =='泰国'){
       window.location.href = 'country_of_tg.html';
  	}
  	if(city =='韩国'){
       window.location.href = 'country_of_hg.html';
  	}
  	if(city =='美国'){
       window.location.href = 'country_of_mg.html';
  	}
  	if(city =='日本'){
       window.location.href = 'country_of_rb.html';
  	}if(city =='俄罗斯'){
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
        text: '国家采购量趋势图(单位:亿美金)',
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
    	formatter:function(params){
        		return params.name
        		
        },

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
                    
        data: ['俄罗斯','美国','日本','泰国','韩国','中国台湾',{value:'香港',textStyle:{color:'red'}},'马来西亚','印度','澳大利亚'],
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
        text: '香港成交量趋势图(单位:亿美金)',
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
    	min:0,max:15,interval:5,
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
            data:[12, 11,12, 15, 11, 11, 12, 14, 15, 13, 12, 11],
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
        data: [0.4,0.5,0.6,0.4,0.3,0.6,0.4,0.2,0.1,0.6,0.8,0.4]
    }, ]
   
};
  myChart.setOption(option);

//box3

			var myChart = echarts.init(document.getElementById('box3'));
	option = {
    title : {
        text: '香港产品偏好程度(%)',
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
    data: ['食用类产品', '电子及家电', '纺织服装,鞋', '机械', '家居装饰品', '建材', '日用消费品', '休闲用品',],
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
            data: [{
						value: 90,
						name: '食用类产品'
					}, {
						value: 80,
						name: '电子及家电'
					}, {
						value: 80,
						name: '纺织服装,鞋'
					}, {
						value: 85,
						name: '机械'
					}, {
						value: 80,
						name: '家居装饰品'
					}, {
						value: 85,
						name: '建材'
					}, {
						value: 90,
						name: '日用消费品'
					}, {
						value: 80,
						name: '休闲用品'
					}]
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
        text: '香港满意度(%)',
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
       data: ['食用类产品', '电子及家电', '纺织服装,鞋', '机械', '家居装饰品', '建材', '日用消费品', '休闲用品',],
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
           data: [85, 90, 85, 85, 80, 85, 90, 85],
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
        data: [0.5,0.6,0.4,0.5,0.3,0.5,0.6,0.5]
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
				text: '国家采购量趋势图(单位:亿美金)',
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
        data: ['俄罗斯','美国','日本','泰国','韩国','中国台湾',{value:'香港',textStyle:{color:'red'}},'马来西亚','印度','澳大利亚'],
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
				text: '香港成交量趋势图(单位:亿美金)',
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
				max: 15,
				interval: 5,
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
				data:[12, 11,12, 15, 11, 11, 12, 14, 15, 13, 12, 11],
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
				data: [0.4,0.5,0.6,0.4,0.3,0.6,0.4,0.2,0.1,0.6,0.8,0.4]
			}, ]

		};
		myChart.setOption(option);
	}

	//box3_big

	function bigbox3() {
		var myChart = echarts.init(document.getElementById('box3_big'));
		option = {
			title: {
				text: '香港产品偏好程度(%)',
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
				height: '130',
				itemWidth: 50,
				itemHeight: 20,
				data: ['食用类产品', '电子及家电', '纺织服装,鞋', '机械', '家居装饰品', '建材', '日用消费品', '休闲用品',],
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
						value: 90,
						name: '食用类产品'
					}, {
						value: 80,
						name: '电子及家电'
					}, {
						value: 80,
						name: '纺织服装,鞋'
					}, {
						value: 85,
						name: '机械'
					}, {
						value: 80,
						name: '家居装饰品'
					}, {
						value: 85,
						name: '建材'
					}, {
						value: 90,
						name: '日用消费品'
					}, {
						value: 80,
						name: '休闲用品'
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
				text: '香港满意度(%)',
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
				data: ['食用类产品', '电子及家电', '纺织服装,鞋', '机械', '家居装饰品', '建材', '日用消费品', '休闲用品',],
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
				data: [85, 90, 85, 85, 80, 85, 90, 85],
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
				data: [0.5,0.6,0.4,0.5,0.3,0.5,0.6,0.5]
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
