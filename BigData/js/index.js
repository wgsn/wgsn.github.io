window.onload = function() {
	//1.地图
	var chart = echarts.init(document.querySelector('.map_detail'));
	var geoCoordMap = {
		'中国': [116.3002283764, 39.9181370976],
		'印度': [78, 27.09],
		'马来西亚': [101.42, 5.08],
		'俄罗斯': [129.51, 62.1],
		'以色列': [35.13, 31.47],
		'斯里兰卡': [79.50, 6.56],
		'哈萨克斯坦': [76.55, 43.19],
		'乌克兰': [30.29, 50.28],
		'也门': [45, 12.5],
		'土耳其': [32.54, 40.02],
		'希腊': [23.44, 38.02],
		'叙利亚': [36.19, 33.3],
		'波兰': [18.38, 54.22],
		'新加坡': [103.45, 1.22],
		'罗马尼亚': [26.1, 44.23]
	};

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
			},
			{
				name: '斯里兰卡',
				value: 60
			}
		],
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
		}],
		[{
			name: '中国'
		}, {
			name: '罗马尼亚',
			value: 60
		}],
	];
	//value  可控制光点大小	

	var mapData = [{
			name: 'Afghanistan',
			value: 0
		}, {
			name: 'Angola',
			value: 1.4
		}, {
			name: 'Albania',
			value: 0
		}, {
			name: 'United Arab Emirates',
			value: 0
		}, {
			name: 'Argentina',
			value: 2.4
		}, {
			name: 'Armenia',
			value: 0
		}, {
			name: 'French Southern and Antarctic Lands',
			value: 0
		}, {
			name: 'Australia',
			value: 2.2
		}, {
			name: 'Austria',
			value: 0.9
		}, {
			name: 'Azerbaijan',
			value: 0
		}, {
			name: 'Burundi',
			value: 2
		}, {
			name: 'Belgium',
			value: 1.6
		}, {
			name: 'Benin',
			value: 1.2
		}, {
			name: 'Burkina Faso',
			value: 1.4
		}, {
			name: 'Bangladesh',
			value: 0
		}, {
			name: 'Bulgaria',
			value: 0
		}, {
			name: 'The Bahamas',
			value: 1.8
		}, {
			name: 'Bosnia and Herzegovina',
			value: 0
		}, {
			name: 'Belarus',
			value: 0
		}, {
			name: 'Belize',
			value: 0
		}, {
			name: 'Bermuda',
			value: 1.7
		}, {
			name: 'Bolivia',
			value: 1.9
		}, {
			name: 'Brazil',
			value: 2.1
		}, {
			name: 'Brunei',
			value: 0
		}, {
			name: 'Bhutan',
			value: 0
		}, {
			name: 'Botswana',
			value: 0
		}, {
			name: 'Central African Republic',
			value: 0
		}, {
			name: 'Canada',
			value: 2.4
		}, {
			name: 'Switzerland',
			value: 1.4
		}, {
			name: 'Chile',
			value: 1.5
		}, {
			name: 'China',
			value: 0
		}, {
			name: 'Ivory Coast',
			value: 0
		}, {
			name: 'Cameroon',
			value: 1.2
		}, {
			name: 'Democratic Republic of the Congo',
			value: 1.3
		}, {
			name: 'Republic of the Congo',
			value: 0
		}, {
			name: 'Colombia',
			value: 1.9
		}, {
			name: 'Costa Rica',
			value: 1.2
		}, {
			name: 'Cuba',
			value: 1.9
		}, {
			name: 'Northern Cyprus',
			value: 0
		}, {
			name: 'Cyprus',
			value: 1.9
		}, {
			name: 'Czech Republic',
			value: 0
		}, {
			name: 'Germany',
			value: 1.9
		}, {
			name: 'Djibouti',
			value: 1.4
		}, {
			name: 'Denmark',
			value: 1.2
		}, {
			name: 'Dominican Republic',
			value: 0
		}, {
			name: 'Algeria',
			value: 2.1
		}, {
			name: 'Ecuador',
			value: 0.9
		}, {
			name: 'Egypt',
			value: 0
		}, {
			name: 'Eritrea',
			value: 0
		}, {
			name: 'Spain',
			value: 1.2
		}, {
			name: 'Estonia',
			value: 0
		}, {
			name: 'Ethiopia',
			value: 1.9
		}, {
			name: 'Finland',
			value: 1.6
		}, {
			name: 'Fiji',
			value: 1.5
		}, {
			name: 'Falkland Islands',
			value: 0
		}, {
			name: 'France',
			value: 1.7
		}, {
			name: 'Gabon',
			value: 0
		}, {
			name: 'United Kingdom',
			value: 2.1
		}, {
			name: 'Georgia',
			value: 1.5
		}, {
			name: 'Ghana',
			value: 1.8
		}, {
			name: 'Guinea',
			value: 0
		}, {
			name: 'Gambia',
			value: 0
		}, {
			name: 'Guinea Bissau',
			value: 0
		}, {
			name: 'Equatorial Guinea',
			value: 0
		}, {
			name: 'Greece',
			value: 1.1
		}, {
			name: 'Greenland',
			value: 0
		}, {
			name: 'Guatemala',
			value: 1.2
		}, {
			name: 'French Guiana',
			value: 0
		}, {
			name: 'Guyana',
			value: 0
		}, {
			name: 'Honduras',
			value: 0
		}, {
			name: 'Croatia',
			value: 0
		}, {
			name: 'Haiti',
			value: 1.3
		}, {
			name: 'Hungary',
			value: 0
		}, {
			name: 'Indonesia',
			value: 0
		}, {
			name: 'India',
			value: 0
		}, {
			name: 'Ireland',
			value: 1.4
		}, {
			name: 'Iran',
			value: 0
		}, {
			name: 'Iraq',
			value: 0
		}, {
			name: 'Iceland',
			value: 1.3
		}, {
			name: 'Israel',
			value: 0
		}, {
			name: 'Italy',
			value: 1.7
		}, {
			name: 'Jamaica',
			value: 2.1
		}, {
			name: 'Jordan',
			value: 0
		}, {
			name: 'Japan',
			value: 1.5
		}, {
			name: 'Kazakhstan',
			value: 0
		}, {
			name: 'Kenya',
			value: 2.1
		}, {
			name: 'Kyrgyzstan',
			value: 0.8
		}, {
			name: 'Cambodia',
			value: 0
		}, {
			name: 'South Korea',
			value: 2
		}, {
			name: 'Kosovo',
			value: 0
		}, {
			name: 'Kuwait',
			value: 0
		}, {
			name: 'Laos',
			value: 0
		}, {
			name: 'Lebanon',
			value: 0
		}, {
			name: 'Liberia',
			value: 0
		}, {
			name: 'Libya',
			value: 0
		}, {
			name: 'Sri Lanka',
			value: 0
		}, {
			name: 'Lesotho',
			value: 0
		}, {
			name: 'Lithuania',
			value: 0
		}, {
			name: 'Luxembourg',
			value: 0.8
		}, {
			name: 'Latvia',
			value: 0
		}, {
			name: 'Morocco',
			value: 1.4
		}, {
			name: 'Moldova',
			value: 0
		}, {
			name: 'Madagascar',
			value: 2.2
		}, {
			name: 'Mexico',
			value: 2.4
		}, {
			name: 'Macedonia',
			value: 0
		}, {
			name: 'Mali',
			value: 1.6
		}, {
			name: 'Myanmar',
			value: 0
		}, {
			name: 'Montenegro',
			value: 0
		}, {
			name: 'Mongolia',
			value: 0
		}, {
			name: 'Mozambique',
			value: 0
		}, {
			name: 'Mauritania',
			value: 0
		}, {
			name: 'Malawi',
			value: 0
		}, {
			name: 'Malaysia',
			value: 0
		}, {
			name: 'Namibia',
			value: 0
		}, {
			name: 'New Caledonia',
			value: 0
		}, {
			name: 'Niger',
			value: 0
		}, {
			name: 'Nigeria',
			value: 1.3
		}, {
			name: 'Nicaragua',
			value: 0
		}, {
			name: 'Netherlands',
			value: 1.4
		}, {
			name: 'Norway',
			value: 1.7
		}, {
			name: 'Nepal',
			value: 0
		}, {
			name: 'New Zealand',
			value: 2.1
		}, {
			name: 'Oman',
			value: 0
		}, {
			name: 'Pakistan',
			value: 0
		}, {
			name: 'Panama',
			value: 2.2
		}, {
			name: 'Peru',
			value: 1.4
		}, {
			name: 'Philippines',
			value: 0
		}, {
			name: 'Papua New Guinea',
			value: 1.2
		}, {
			name: 'Poland',
			value: 0
		}, {
			name: 'Puerto Rico',
			value: 1.2
		}, {
			name: 'North Korea',
			value: 0
		}, {
			name: 'Portugal',
			value: 1.3
		}, {
			name: 'Paraguay',
			value: 0
		}, {
			name: 'Qatar',
			value: 0
		}, {
			name: 'Romania',
			value: 0
		}, {
			name: 'Russia',
			value: 0
		}, {
			name: 'Rwanda',
			value: 0
		}, {
			name: 'Western Sahara',
			value: 0
		}, {
			name: 'Saudi Arabia',
			value: 0
		}, {
			name: 'Sudan',
			value: 0
		}, {
			name: 'South Sudan',
			value: 0
		}, {
			name: 'Senegal',
			value: 0
		}, {
			name: 'Solomon Islands',
			value: 0
		}, {
			name: 'Sierra Leone',
			value: 0
		}, {
			name: 'El Salvador',
			value: 0
		}, {
			name: 'Somaliland',
			value: 0
		}, {
			name: 'Somalia',
			value: 0
		}, {
			name: 'Republic of Serbia',
			value: 0
		}, {
			name: 'Suriname',
			value: 0.9
		}, {
			name: 'Slovakia',
			value: 0
		}, {
			name: 'Slovenia',
			value: 0
		}, {
			name: 'Sweden',
			value: 1.8
		}, {
			name: 'Swaziland',
			value: 0
		}, {
			name: 'Syria',
			value: 0
		}, {
			name: 'Chad',
			value: 1.3
		}, {
			name: 'Togo',
			value: 0
		}, {
			name: 'Thailand',
			value: 0
		}, {
			name: 'Tajikistan',
			value: 0
		}, {
			name: 'Turkmenistan',
			value: 0
		}, {
			name: 'East Timor',
			value: 0
		}, {
			name: 'Trinidad and Tobago',
			value: 1.5
		}, {
			name: 'Tunisia',
			value: 0
		}, {
			name: 'Turkey',
			value: 1.8
		}, {
			name: 'United Republic of Tanzania',
			value: 0
		}, {
			name: 'Uganda',
			value: 0
		}, {
			name: 'Ukraine',
			value: 0
		}, {
			name: 'Uruguay',
			value: 0
		}, {
			name: 'United States of America',
			value: 2.6
		}, {
			name: 'Uzbekistan',
			value: 0
		}, {
			name: 'Venezuela',
			value: 1.3
		}, {
			name: 'Vietnam',
			value: 2.2
		}, {
			name: 'Vanuatu',
			value: 0
		}, {
			name: 'West Bank',
			value: 0
		}, {
			name: 'Yemen',
			value: 0
		}, {
			name: 'South Africa',
			value: 0
		}, {
			name: 'Zambia',
			value: 0
		}, {
			name: 'Zimbabwe',
			value: 0
		},
		//里面没有的
		{
			name: 'The United Arab Emirates',
			value: 0
		},
		{
			name: 'Palestine',
			value: 0
		},
		{
			name: 'Bahrain',
			value: 1.6
		},
		{
			name: 'Timor-Leste',
			value: 0
		}, {
			name: 'The Philippines',
			value: 0
		}, {
			name: 'Maldives',
			value: 0
		}, {
			name: "The People's Republic of Bangladesh",
			value: 0
		}, {
			name: 'Turkmenistan',
			value: 0
		}, {
			name: "Singapore",
			value: 0
		},
	];

	var nameMap = {
		'The United Arab Emirates': '阿联酋',
		'Palestine': '巴勒斯坦',
		'Bahrain': '巴林',
		'Timor-Leste': '东帝汶',
		'The Philippines': '菲律宾',
		'Maldives': '马尔代夫',
		"The People's Republic of Bangladesh": '孟加拉国',
		'Turkmenistan': '土库曼斯坦',
		'Singapore': '新加坡',
		'Afghanistan': '阿富汗',
		'Angola': '安哥拉',
		'Albania': '阿尔巴尼亚',
		'United Arab Emirates': '阿联酋',
		'Argentina': '阿根廷',
		'Armenia': '亚美尼亚',
		'French Southern and Antarctic Lands': '法属南半球和南极领地',
		'Australia': '澳大利亚',
		'Austria': '奥地利',
		'Azerbaijan': '阿塞拜疆',
		'Burundi': '布隆迪',
		'Belgium': '比利时',
		'Benin': '贝宁',
		'Burkina Faso': '布基纳法索',
		'Bangladesh': '孟加拉国',
		'Bulgaria': '保加利亚',
		'The Bahamas': '巴哈马',
		'Bosnia and Herzegovina': '波斯尼亚和黑塞哥维那',
		'Belarus': '白俄罗斯',
		'Belize': '伯利兹',
		'Bermuda': '百慕大',
		'Bolivia': '玻利维亚',
		'Brazil': '巴西',
		'Brunei': '文莱',
		'Bhutan': '不丹',
		'Botswana': '博茨瓦纳',
		'Central African Republic': '中非共和国',
		'Canada': '加拿大',
		'Switzerland': '瑞士',
		'Chile': '智利',
		'China': '中国',
		'Ivory Coast': '象牙海岸',
		'Cameroon': '喀麦隆',
		'Democratic Republic of the Congo': '刚果民主共和国',
		'Republic of the Congo': '刚果共和国',
		'Colombia': '哥伦比亚',
		'Costa Rica': '哥斯达黎加',
		'Cuba': '古巴',
		'Northern Cyprus': '北塞浦路斯',
		'Cyprus': '塞浦路斯',
		'Czech Republic': '捷克共和国',
		'Germany': '德国',
		'Djibouti': '吉布提',
		'Denmark': '丹麦',
		'Dominican Republic': '多明尼加共和国',
		'Algeria': '阿尔及利亚',
		'Ecuador': '厄瓜多尔',
		'Egypt': '埃及',
		'Eritrea': '厄立特里亚',
		'Spain': '西班牙',
		'Estonia': '爱沙尼亚',
		'Ethiopia': '埃塞俄比亚',
		'Finland': '芬兰',
		'Fiji': '斐济',
		'Falkland Islands': '福克兰群岛',
		'France': '法国',
		'Gabon': '加蓬',
		'United Kingdom': '英国',
		'Georgia': '格鲁吉亚',
		'Ghana': '加纳',
		'Guinea': '几内亚',
		'Gambia': '冈比亚',
		'Guinea Bissau': '几内亚比绍',
		'Equatorial Guinea': '赤道几内亚',
		'Greece': '希腊',
		'Greenland': '格陵兰',
		'Guatemala': '危地马拉',
		'French Guiana': '法属圭亚那',
		'Guyana': '圭亚那',
		'Honduras': '洪都拉斯',
		'Croatia': '克罗地亚',
		'Haiti': '海地',
		'Hungary': '匈牙利',
		'Indonesia': '印尼',
		'India': '印度',
		'Ireland': '爱尔兰',
		'Iran': '伊朗',
		'Iraq': '伊拉克',
		'Iceland': '冰岛',
		'Israel': '以色列',
		'Italy': '意大利',
		'Jamaica': '牙买加',
		'Jordan': '约旦',
		'Japan': '日本',
		'Kazakhstan': '哈萨克斯坦',
		'Kenya': '肯尼亚',
		'Kyrgyzstan': '吉尔吉斯斯坦',
		'Cambodia': '柬埔寨',
		'South Korea': '韩国',
		'Kosovo': '科索沃',
		'Kuwait': '科威特',
		'Laos': '老挝',
		'Lebanon': '黎巴嫩',
		'Liberia': '利比里亚',
		'Libya': '利比亚',
		'Sri Lanka': '斯里兰卡',
		'Lesotho': '莱索托',
		'Lithuania': '立陶宛',
		'Luxembourg': '卢森堡',
		'Latvia': '拉脱维亚',
		'Morocco': '摩洛哥',
		'Moldova': '摩尔多瓦',
		'Madagascar': '马达加斯加',
		'Mexico': '墨西哥',
		'Macedonia': '马其顿',
		'Mali': '马里',
		'Myanmar': '缅甸',
		'Montenegro': '黑山',
		'Mongolia': '蒙古',
		'Mozambique': '莫桑比克',
		'Mauritania': '毛里塔尼亚',
		'Malawi': '马拉维',
		'Malaysia': '马来西亚',
		'Namibia': '纳米比亚',
		'New Caledonia': '新喀里多尼亚',
		'Niger': '尼日尔',
		'Nigeria': '尼日利亚',
		'Nicaragua': '尼加拉瓜',
		'Netherlands': '荷兰',
		'Norway': '挪威',
		'Nepal': '尼泊尔',
		'New Zealand': '新西兰',
		'Oman': '阿曼',
		'Pakistan': '巴基斯坦',
		'Panama': '巴拿马',
		'Peru': '秘鲁',
		'Philippines': '菲律宾',
		'Papua New Guinea': '巴布亚新几内亚',
		'Poland': '波兰',
		'Puerto Rico': '波多黎各',
		'North Korea': '北朝鲜',
		'Portugal': '葡萄牙',
		'Paraguay': '巴拉圭',
		'Qatar': '卡塔尔',
		'Romania': '罗马尼亚',
		'Russia': '俄罗斯',
		'Rwanda': '卢旺达',
		'Western Sahara': '西撒哈拉',
		'Saudi Arabia': '沙特阿拉伯',
		'Sudan': '苏丹',
		'South Sudan': '南苏丹',
		'Senegal': '塞内加尔',
		'Solomon Islands': '所罗门群岛',
		'Sierra Leone': '塞拉利昂',
		'El Salvador': '萨尔瓦多',
		'Somaliland': '索马里兰',
		'Somalia': '索马里',
		'Republic of Serbia': '塞尔维亚共和国',
		'Suriname': '苏里南',
		'Slovakia': '斯洛伐克',
		'Slovenia': '斯洛文尼亚',
		'Sweden': '瑞典',
		'Swaziland': '斯威士兰',
		'Syria': '叙利亚',
		'Chad': '乍得',
		'Togo': '多哥',
		'Thailand': '泰国',
		'Tajikistan': '塔吉克斯坦',
		'Turkmenistan': '土库曼斯坦',
		'East Timor': '东帝汶',
		'Trinidad and Tobago': '特里尼达和多巴哥',
		'Tunisia': '突尼斯',
		'Turkey': '土耳其',
		'United Republic of Tanzania': '坦桑尼亚联合共和国',
		'Uganda': '乌干达',
		'Ukraine': '乌克兰',
		'Uruguay': '乌拉圭',
		'United States of America': '美国',
		'Uzbekistan': '乌兹别克斯坦',
		'Venezuela': '委内瑞拉',
		'Vietnam': '越南',
		'Vanuatu': '瓦努阿图',
		'West Bank': '西岸',
		'Yemen': '也门',
		'South Africa': '南非',
		'Zambia': '赞比亚',
		'Zimbabwe': '津巴布韦'
	};

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
					scale: 6,
					color: 'red'
				},
				tooltip: {
					show: false
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

				tooltip: {
					show: true,
				},
				label: {
					emphasis: {
						show: false,
					}
				},
				data: mapData
			}
			///
		);
	});
	option = {
		title: {
			text: '全球采购商分布图',
			x: '5%',
			y: '80%',
			textStyle: {
				color: 'white',
				fontSize: 14,
				fontWeight: 100,
				fontFamily: '宋体'
			},

		},
		tooltip: {
			trigger: 'item',
			fontSize: 12,
			formatter: function(params) {
				return nameMap[params.name] + '<br/>' + '采购商' + ':' + params.data.value + '万';
			},

		},
		visualMap: {
			//type: 'continuous',
			show: false,
			realtime: false,
			calculable: false,
			color: ['orange', 'pink', 'yellow', 'lightskyblue', 'teal', '#999'],

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
			roam: false,
			scaleLimit: {
				max: 3,
				min: 1
			},
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

	var option111 = {
		title: {
			text: '全球采购商分布图',
			x: '5%',
			y: '80%',
			textStyle: {
				color: 'white',
				fontSize: 14,
				fontWeight: 100,
				fontFamily: '宋体'
			},
		},
		tooltip: {
			trigger: 'item',
			formatter: function(params) {
				return nameMap[params.name] + '<br/>' + '采购商' + ':' + params.data.value + '万';
			},
		},
		//		toolbox: {
		//			show: true,
		//			orient: 'vertical',
		//			left: 'right',
		//			top: 'center',
		//			feature: {
		//				dataView: {
		//					readOnly: false
		//				},
		//				restore: {},
		//				saveAsImage: {}
		//			}
		//		},
		visualMap: {
			min: 0,
			max: 3,
			text: ['High', 'Low'],
			realtime: false,
			calculable: true,
			inRange: {
				color: ['skyblue', 'lightgreen', '#f66']
			}
		},
		series: [{
				name: '贸易' + ' Top15',
				type: 'effectScatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				rippleEffect: {
					brushType: 'stroke',
					scale: 6,
					color: 'red'
				},
				tooltip: {
					show: false
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
				}
//				,
//				data: item[1].map(function(dataItem) {
//					return {
//						name: dataItem[1].name,
//						value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
//						//value:geoCoordMap[dataItem[1].name]
//
//					};
//
//				})
			}

			, {
				name: 'World Population (2010)',
				type: 'map',
				mapType: 'world',
				roam: true,
				itemStyle: {
					emphasis: {
						label: {
							show: false
						}
					}
				},
				data: mapData
			}
		]
	};

	chart.setOption(option111);
	//点击地图跳转
	chart.on('click', function(params) {
		var country = params.name;
		console.log(country);
		if(country == 'Russia') {
			window.location.href = 'contury_detail/contury_detail_001.html';

		} else if(country == 'Kazakhstan') {
			window.location.href = 'contury_detail/contury_detail_002.html';
		} else if(country == 'Sri Lanka') {
			window.location.href = 'contury_detail/contury_detail_003.html';
		} else if(country == 'Israel') {
			window.location.href = 'contury_detail/contury_detail_004.html';
		} else if(country == 'Ukraine') {
			window.location.href = 'contury_detail/contury_detail_005.html';
		} else if(country == 'Yemen') {
			window.location.href = 'contury_detail/contury_detail_006.html';
		} else if(country == 'Turkey') {
			window.location.href = 'contury_detail/contury_detail_007.html';
		} else if(country == "The People's Republic of Bangladesh") {
			window.location.href = 'contury_detail/contury_detail_008.html';
		} else if(country == 'India') {
			window.location.href = 'contury_detail/contury_detail_009.html';
		} else if(country == 'China') {
			window.location.href = 'contury_detail/contury_detail_010.html';
		} else if(country == 'Syria') {
			window.location.href = 'contury_detail/contury_detail_011.html';
		} else if(country == 'poland') {
			window.location.href = 'contury_detail/contury_detail_012.html';
		} else if(country == 'Malaysia') {
			window.location.href = 'contury_detail/contury_detail_013.html';
		} else if(country == 'Romania') {
			window.location.href = 'contury_detail/contury_detail_014.html';
		} else if(country == 'Singapore') {
			window.location.href = 'contury_detail/contury_detail_015.html';
		} else if(country == 'Indonesia') {
			window.location.href = 'contury_detail/contury_detail_016.html';
		} else if(country == 'Myanmar') {
			window.location.href = 'contury_detail/contury_detail_017.html';
		} else if(country == 'Thailand ') {
			window.location.href = 'contury_detail/contury_detail_018.html';
		} else if(country == 'Laos') {
			window.location.href = 'contury_detail/contury_detail_019.html';
		} else if(country == 'Cambodia') {
			window.location.href = 'contury_detail/contury_detail_020.html';
		} else if(country == 'Vietnam') {
			window.location.href = 'contury_detail/contury_detail_021.html';
		} else if(country == 'Macedonia') {
			window.location.href = 'contury_detail/contury_detail_022.html';
		} else if(country == '菲律宾') {
			window.location.href = 'contury_detail/contury_detail_023.html';
		} else if(country == 'Iran') {
			window.location.href = 'contury_detail/contury_detail_024.html';
		} else if(country == 'Iraq') {
			window.location.href = 'contury_detail/contury_detail_025.html';
		} else if(country == 'Mongolia') {
			window.location.href = 'contury_detail/contury_detail_026.html';
		} else if(country == 'Jordan') {
			window.location.href = 'contury_detail/contury_detail_027.html';
		} else if(country == 'Lebanon') {
			window.location.href = 'contury_detail/contury_detail_028.html';
		} else if(country == 'Palestine') {
			window.location.href = 'contury_detail/contury_detail_029.html';
		} else if(country == 'Saudi Arabia') {
			window.location.href = 'contury_detail/contury_detail_030.html';
		} else if(country == 'Oman') {
			window.location.href = 'contury_detail/contury_detail_031.html';
		} else if(country == 'The United Arab Emirates') {
			window.location.href = 'contury_detail/contury_detail_032.html';
		} else if(country == 'Qatar') {
			window.location.href = 'contury_detail/contury_detail_033.html';
		} else if(country == 'Kuwait') {
			window.location.href = 'contury_detail/contury_detail_034.html';
		} else if(country == 'Bahrain') {
			window.location.href = 'contury_detail/contury_detail_035.html';
		} else if(country == 'Egypt') {
			window.location.href = 'contury_detail/contury_detail_036.html';
		} else if(country == 'Belarus') {
			window.location.href = 'contury_detail/contury_detail_037.html';
		} else if(country == 'Montenegro') {
			window.location.href = 'contury_detail/contury_detail_038.html';
		} else if(country == 'Pakistan') {
			window.location.href = 'contury_detail/contury_detail_039.html';
		} else if(country == 'Timor-Leste') {
			window.location.href = 'contury_detail/contury_detail_040.html';
		} else if(country == 'Afghanistan') {
			window.location.href = 'contury_detail/contury_detail_041.html';
		} else if(country == 'Maldives') {
			window.location.href = 'contury_detail/contury_detail_042.html';
		} else if(country == 'Nepal') {
			window.location.href = 'contury_detail/contury_detail_043.html';
		} else if(country == 'Bhutan') {
			window.location.href = 'contury_detail/contury_detail_044.html';
		} else if(country == 'Uzbekistan') {
			window.location.href = 'contury_detail/contury_detail_045.html';
		} else if(country == 'Turkmenistan') {
			window.location.href = 'contury_detail/contury_detail_046.html';
		} else if(country == 'Tajikistan') {
			window.location.href = 'contury_detail/contury_detail_047.html';
		} else if(country == 'Kyrgyzstan') {
			window.location.href = 'contury_detail/contury_detail_048.html';
		} else if(country == 'Georgia') {
			window.location.href = 'contury_detail/contury_detail_049.html';
		} else if(country == 'Azerbaijan') {
			window.location.href = 'contury_detail/contury_detail_050.html';
		} else if(country == 'Armenia') {
			window.location.href = 'contury_detail/contury_detail_051.html';
		} else if(country == 'Moldova') {
			window.location.href = 'contury_detail/contury_detail_052.html';
		} else if(country == 'Lithuania') {
			window.location.href = 'contury_detail/contury_detail_053.html';
		} else if(country == 'Estonia') {
			window.location.href = 'contury_detail/contury_detail_054.html';
		} else if(country == 'Latvia') {
			window.location.href = 'contury_detail/contury_detail_055.html';
		} else if(country == 'Czech') {
			window.location.href = 'contury_detail/contury_detail_056.html';
		} else if(country == 'Slovakia') {
			window.location.href = 'contury_detail/contury_detail_057.html';
		} else if(country == 'Hungary') {
			window.location.href = 'contury_detail/contury_detail_058.html';
		} else if(country == 'Slovenia') {
			window.location.href = 'contury_detail/contury_detail_059.html';
		} else if(country == 'Republic of Serbia') {
			window.location.href = 'contury_detail/contury_detail_060.html';
		} else if(country == 'Albania') {
			window.location.href = 'contury_detail/contury_detail_061.html';
		} else if(country == 'Bulgaria') {
			window.location.href = 'contury_detail/contury_detail_062.html';
		} else if(country == 'Brunei') {
			window.location.href = 'contury_detail/contury_detail_063.html';
		} else if(country == 'Croatia') {
			window.location.href = 'contury_detail/contury_detail_064.html';
		} else if(country == 'Bosnia and Herzegovina') {
			window.location.href = 'contury_detail/contury_detail_065.html';
		}
	})

	/**
	 * 图2 询盘邮件趋势图（折柱图）
	 * 
	 */
	$(function() {
		var countryData = [
			'香港<br/>美国<br/>印度<br/>',
			'日本<br/>印度<br/>香港<br/>',
			'香港<br/>印度<br/>美国<br/>',
			'美国<br/>日本<br/>香港<br/>',
			'香港<br/>印度<br/>美国<br/>',
			'日本<br/>印度<br/>香港<br/>',
			'美国<br/>印度<br/>香港<br/>',
			'印度<br/>日本<br/>香港<br/>',
			'香港<br/>美国<br/>日本<br/>',
			'美国<br/>香港<br/>日本<br/>',
			'香港<br/>日本<br/>美国<br/>',
			'美国<br/>日本<br/>香港<br/>',

		]
		var topbar = echarts.init(document.querySelector('.top_bar'));
		topbar.setOption({
			color: ["white"],
			height: '100%',
			title: [{
				text: '询盘邮件趋势图（单位：万封）',
				x: '10%',
				y: "3%",
				textStyle: {
					color: "white",
					fontSize: 14,
					fontWeight: 100,
					fontFamily: '宋体'
				}
			}],
			tooltip: {
				trigger: 'axis',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				},
				formatter: function(params, ticket, callback) {

					for(var i = 0, l = params.length; i < l; i++) {
						res = '本月询盘数量top3国家：' + '<br/>' + countryData[i] + params[i].seriesName + ' : ' + params[i].value;
					}
					setTimeout(function() {
						// 仅为了模拟异步回调
						callback(ticket, res);
					}, 20)
					return 'loading';
				}
			},
			grid: {
				left: '2%',
				bottom: '5%',
				containLabel: true,
				//width:300,
				height: 120
			},
			xAxis: [{
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				axisLabel: {
					interval: 0, //显示所有标签
					textStyle: {
						color: 'white', //坐标值得具体的颜色
					}
				}
			}],
			yAxis: [{
				type: 'value',
				min: 0,
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
			series: [
				//		{
				//			name: '国家',
				//			type: 'bar',
				//			data: countryData,
				//		}, 
				{
					name: '峰值IP',
					type: 'bar',
					stack: '总量',
					barWidth: '30%',
					data: [1580, 1550, 1560, 1650, 1580, 1520, 1480, 1450, 1710, 1680, 1520, 1450]
				},
				{
					name: '同期环比',
					type: 'line',
					stack: '总量',
					data: [550, 412, 501, 354, 290, 330, 210, 590, 530, 520, 233, 344, 349, 588],
					symbol: 'none', //拐点样式
					//symbolSize: 10,//拐点大小
					itemStyle: {
						normal: {
							lineStyle: {
								width: 1, //折线宽度
								color: "orange" //折线颜色
							}
						}
					},
				},
			]
		});

	})

	/*************************************折线图*****************************************/
	$(function() {
		//IP访问量1
		var bottomline = echarts.init(document.querySelector('.bottom_line'));
		bottomline.setOption({
			title: {
				text: 'IP访问量趋势图（单位：万次）',
				x: '12%',
				y: '1%',
				textStyle: {
					color: 'white',
					fontSize: 14,
					fontWeight: 100,
					fontFamily: '宋体'
				},
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				},
				formatter: '{c}' + '(万次)'
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
				data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13',
					'14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'
				],
				axisLabel: {
					textStyle: {
						color: 'white', //坐标值得具体的颜色
					}
				}
			}],
			yAxis: [{
				type: 'value',
				min: 0,
				max: 300,
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
					data: [120, 95, 150, 90, 82, 85, 95, 100, 85, 70, 78, 85, 95, 100, 130, 100, 120, 95, 85, 100, 120, 93, 90, 100],
					symbol: 'none', //拐点样式
					//symbolSize: 10,//拐点大小
					itemStyle: {
						normal: {
							lineStyle: {
								width: 1, //折线宽度
								color: "orange" //折线颜色
							}
						}
					},
				},
				//{
				//				name: 'xxx',
				//				type: 'line',
				//				data: [20, 32, 101, 134, 190, 130,
				//				210,118,255,222,144,155,
				//				133,234,156,155,177,199,
				//				156,166,355,144,123,190],
				//				symbol: 'none', //拐点样式
				//				//symbolSize: 10,//拐点大小
				//				itemStyle: {
				//					normal: {
				//						lineStyle: {
				//							width: 1, //折线宽度
				//							color: "white" //折线颜色
				//						}
				//					}
				//				},
				//			}, {
				//				name: 'xxx',
				//				type: 'line',
				//				data: [120, 232, 101, 234, 90, 230,
				//				210,118,255,122,144,255,
				//				133,234,156,155,177,199,
				//				156,166,255,144,223,190],
				//				symbol: 'none', //拐点样式
				//				//symbolSize: 10,//拐点大小
				//				itemStyle: {
				//					normal: {
				//						lineStyle: {
				//							width: 1, //折线宽度
				//							color: "#ED6F0E" //折线颜色
				//						}
				//					}
				//				},
				//			},

			]
		});

		//IP访问量2
		var bottomline1 = echarts.init(document.querySelector('.bottom_line1'));
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
		}
		bottomline1.setOption({
			title: {
				text: 'IP访问量趋势图（单位：万次）',
				x: '12%',
				y: '1%',
				textStyle: {
					color: 'white',
					fontSize: 14,
					fontWeight: 100,
					fontFamily: '宋体'
				},
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				},
				formatter: '{c}' + '(万次)'
			},
			grid: {
				left: '3%',
				top: '16%',
				containLabel: true,
				width: '100%',
				height: '77%',
			},
			xAxis: [{
				type: 'category',

				data: ['2016.11', '2016.12', '2017.1', '2017.2', '2017.3', '2017.4', '2017.5', '2017.6', '2017.7',
					'2017.8', '2017.9', '2017.1'
				],
				axisLabel: {
					textStyle: {
						color: 'white', //坐标值得具体的颜色
					}
				}
			}],
			yAxis: [{
				type: 'value',
				boundaryGap: ['20%', '10%'],
				min: 0,
				max: 5000,
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
					data: [3200, 1700, 1500, 1900, 2200, 2500, 2800, 3200, 3700, 4000, 3300, 3500],
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
				},

			]
		});

		//IP访问量3
		var bottomline2 = echarts.init(document.querySelector('.bottom_line2'));

		bottomline2.setOption({
			title: {
				text: 'IP访问量趋势图（单位：万次）',
				x: '12%',
				y: '1%',
				textStyle: {
					color: 'white',
					fontSize: 14,
					fontWeight: 100,
					fontFamily: '宋体'
				},
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				},
				formatter: '{c}' + '(万次)'
			},
			grid: {
				left: '2%',
				top: '20%',
				containLabel: true,
				width: '100%',
				height: '77%',
			},
			xAxis: [{
				type: 'category',
				data: ['2017', '2016', '2015', '2014',
					'2013', '2012', '2011', '2010'
				],
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
			series: [{
					name: 'xxx',
					type: 'line',
					data: [17800, 35000, 33000, 31500, 30000, 28500, 28000, 27500],
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
				},
				//			{
				//				name: 'xxx',
				//				type: 'line',
				//				data: linedata2,
				//				symbol: 'none', //拐点样式
				//				//symbolSize: 10,//拐点大小
				//				itemStyle: {
				//					normal: {
				//						lineStyle: {
				//							width: 1, //折线宽度
				//							color: "white" //折线颜色
				//						}
				//					}
				//				},
				//			}, {
				//				name: 'xxx',
				//				type: 'line',
				//				data: linedata3,
				//				symbol: 'none', //拐点样式
				//				//symbolSize: 10,//拐点大小
				//				itemStyle: {
				//					normal: {
				//						lineStyle: {
				//							width: 1, //折线宽度
				//							color: "#ED6F0E" //折线颜色
				//						}
				//					}
				//				},
				//			},

			]
		});

		//点击事件
		$(".chart-btn").click(function() {
			var btn = $(this).index();
			console.log(btn)
			$(".cline").css('visibility', 'hidden').eq(btn).css('visibility', 'visible')
		})

	})

	/*********************************南丁格尔图******************************************************/
	$(function() {
		var lpie = echarts.init(document.querySelector('.lpie'));
		lpie.setOption({
			title: [{
				text: '5大热销产品',
				x: '10%',
				y: "80%",
				textStyle: {
					color: "white",
					fontSize: "0.14rem",
					fontWeight: 100,
					fontFamily: '宋体'
				}
			}],
			legend: [{
				orient: 'vertical',
				data: ['1.建筑', '2.能源', '3.有色金属', '4.食品', '5.核能'],
				itemWidth: 10,
				itemHeight: 10,
				itemGap: 4,
				top: '20%',
				right: '3%',
				//position: "inner",
				textStyle: {
					color: "white",
					fontSize: 12,
					fontFamily: '宋体'
				}
			}],
			tooltip: [{
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			}],
			series: [{
				name: '5大热销产品',
				type: 'pie',
				radius: '45%',
				center: ['33%', '45%'],
				labelLine: {
					normal: {
						show: true,
						length: 0,
					}
				},
				label: {
					normal: {
						show: true,
						position: "right",

					}
				},
				data: [{
					value: 199,
					name: '1.建筑',
					itemStyle: {
						normal: {
							color: '#B93C20'
						}
					}
				}, {
					value: 180,
					name: '2.能源',
					itemStyle: {
						normal: {
							color: '#F2CB09'
						}
					}
				}, {
					value: 175,
					name: '3.有色金属',
					itemStyle: {
						normal: {
							color: '#9E2223'
						}
					}
				}, {
					value: 160,
					name: '4.食品',
					itemStyle: {
						normal: {
							color: '#218C3B'
						}
					}
				}, {
					value: 135,
					name: '5.核能',
					itemStyle: {
						normal: {
							color: '#E46606'
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
	})

	/******************表格上下滚动*****************/
	$(function() {
		var tb1 = document.querySelector('.tble-left');
		var tb2 = document.querySelector('.tble-right');
		var step1 = 0;
		var step2 = 0;

		function fn() {
			//			if(step1 == -282)(step1 = 0);
			if(step1 == -292)(step1 = 0);
			step1 -= 1;
			tb1.style.top = step1 + 'px';
		}

		function fn2() {
			//			if(step2 == -282)(step2 = 0);
			if(step2 == -292)(step2 = 0);
			step2 -= 1;
			tb2.style.top = step2 + 'px';
		}
		var t1 = setInterval(fn, 50);
		var t2 = setInterval(fn2, 50);

		var tr1 = document.querySelectorAll('.tble-left tr');
		var tr2 = document.querySelectorAll('.tble-right tr');

		//		function ff(obj, num, count) {
		//			for(var i = 0; i < obj.length; i++) {
		//				for(var j = 0; j < i; j++) {
		//					obj[i].onmouseover = function() {
		//						clearInterval(num);
		//					}
		//					obj[j].onmouseleave = function() {
		//						num = setInterval(count, 50);
		//					}
		//				}
		//			}
		//		}
		//		ff(tr1, t1, fn);
		//		ff(tr2, t2, fn2);
	})

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

	//	//font-change
	//		$(window).resize(function() {
	//			var x = $(window).innerWidth();
	//			var px = (100 * x) / 2400;
	//			$("html").css("font-size", px + 'px')
	//		});

}

//json

function jh(data) {
	//console.log(data.result)
	var jinri = document.querySelectorAll('.jinriwaihui ul');

	for(var i = 0; i < data.result.length; i++) {
		jinri[0].innerHTML = '<li>' + data.result[i].lat + '</li>';
	}
}

//
var atop = 0;
var jinritimer = setInterval(jinri, 150)

function jinri() {
	if(atop < -170) {
		atop = 0
	}
	atop -= 2;
	$('.jinriwaihui ul:nth-child(1)').css('margin-top', atop)

}
$('.jinriwaihui ul li').hover(function() {
	//	clearInterval(jinritimer);
	console.log($(this).index('.jinriwaihui ul li'))
	$('.jinriwaihui ul li').eq($(this).index('.jinriwaihui ul li')).css('color', 'orange')
}, function() {
	//	jinritimer = setInterval(jinri, 90)
	$('.jinriwaihui ul li').css("color", "white")
})