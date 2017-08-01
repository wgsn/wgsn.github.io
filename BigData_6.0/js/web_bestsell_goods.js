var mapChart = echarts.init(document.getElementById('map-wrap'));

var a=new Date;
var t=a.getTime()-24*60*60*1000;
	  	var aa=new Date(t);
	  	
	  	 var y=aa.getFullYear();
	  	 var m=aa.getMonth()+1;
	  	 var tian=aa.getDate();
		
		 

		  		
		var geoCoordMap = {
			'中国销量': [116.3002283764, 39.9181370976],
			'日本销量': [130.21, 33.39],
			'澳大利亚销量': [140.17, -25.55],
			'印度销量': [78, 27.09],
			'马来西亚销量': [101.42, 5.08],
			'俄罗斯销量': [37.37, 55.45],
			'美国销量': [-77.02, 38.52],
			'墨西哥销量': [-99.56, 20.52],
			'巴西销量': [-47.3, -15.5],
			'西班牙销量': [-2.06, 41.18],
			'法国销量': [3.2, 48.51],
			'德国销量': [10.2, 52.31],
			'英国销量': [0, 55.04],
			'意大利销量': [11.15, 45.28],
			'韩国销量': [126.38, 37.3],
		};
		var geoCoord = {
			'中国': [116., 39.],
			'日本': [130.21, 33.39],
			'澳大利亚': [140.17, -25.55],
			'印度': [78, 27.09],
			'马来西亚': [101.42, 5.08],
			'俄罗斯': [37.37, 55.45],
			'美国': [-77.02, 38.52],
			'墨西哥': [-99.56, 20.52],
			'巴西': [-47.3, -15.5],
			'西班牙': [-2.06, 41.18],
			'法国': [3.2, 48.51],
			'德国': [10.2, 52.31],
			'英国': [0, 55.04],
			'意大利': [11.15, 45.28],
			'韩国': [126.38, 37.3],
		};
		//value  可控制光点大小
		var BJData = [
			[{
				name: '中国'
			}, {
				name: '日本销量',
				value:100,
			}],
			[{
				name: '中国'
			}, {
				name: '印度销量',
				value: 100
			}],
			[{
				name: '中国'
			}, {
				name: '澳大利亚销量',
				value: 100
			}],
			[{
				name: '中国'
			}, {
				name: '马来西亚销量',
				value: 100
			}],
			[{
				name: '中国'
			}, {
				name: '俄罗斯销量',
				value: 100
			}],
			[{
				name: '中国'
			}, {
				name: '美国销量',
				value: 100
			}],
			[{
				name: '中国'
			}, {
				name: '墨西哥销量',
				value: 100
			}],
			[{
				name: '中国'
			}, {
				name: '巴西销量',
				value: 100
			}],
			[{
				name: '中国'
			}, {
				name: '西班牙销量',
				value: 100
			}],
			[{
				name: '中国'
			}, {
				name: '法国销量',
				value: 100
			}],
			[{
				name: '中国'
			}, {
				name: '德国销量',
				value: 100
			}],
			[{
				name: '中国'
			}, {
				name: '英国销量',
				value: 100
			}],
			[{
				name: '中国'
			}, {
				name: '意大利销量',
				value: 100
			}],
			[{
				name: '中国'
			}, {
				name: '中国销量',
				value: 100
			}],
			[{
				name: '中国销量'
			}, {
				name: '韩国销量',
				value: 100
			}],
		];
		var color = ['#fdd442'];
//				var convertData = function(data) {
//					var res = [];
//					for(var i = 0; i < data.length; i++) {
//						var dataItem = data[i];
//						var fromCoord = geoCoordMap[dataItem[0].name];
//						var toCoord = geoCoordMap[dataItem[1].name];
//						if(fromCoord && toCoord) {
//							res.push({
//								fromName: dataItem[0].name,
//								toName: dataItem[1].name,
//								coords: [fromCoord, toCoord]
//							});
//						}
//					}
//					return res;
//				};

		var series = [];
		[
			['中国', BJData]
		].forEach(function(item, i) {
			series.push({
				name: '贸易' + ' Top15',
				type: 'effectScatter',
				coordinateSystem: 'geo',
				zlevel: 2,
				//闪点样式
				rippleEffect: {
					brushType: 'stroke'
				},
				label: {
					//地名，
					normal: {
						show: false,
						position: 'right',
						formatter: '{b}',
						shadowBlur: 2,
						shadowColor: 'rgba(255, 255, 255, 0.8)',
					}
				},
				symbolSize: function(val) {
					return val[2] / 8;
				},
				itemStyle: {
					normal: {
						color: color[0],
						shadowBlur: 10,
						shadowColor: 'rgba(255, 255, 255, 0.8)',
					}
				},
				tooltip:{formatter:function(params){
					return params.name+':'+params.value[2]+'万吨'
				}
					
				},
				data: item[1].map(function(dataItem) {
					return {
						name: dataItem[1].name,
						value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
					};
				})
			});
		});
		option = {
			backgroundColor: '',
			title: {
				//标题
				text: y+'年'+m+'月'+tian+'日网络热销产品走势图', //正标题
				//				subtext:'hello world',副标题
				//              itemGap:'30',主副标题之间的间距
				left: 'center',
				top: '15%',
				textStyle: {
					color: '#fff',
					fontSize: '30',
					fontFamily: '宋体'
				}
			},
			tooltip: {
				trigger: 'item'
			},
			//地图样式
			geo: {
				map: 'world',
				top: '35%',

				//鼠标移至国家地区显示各国家地区名
				label: {
					emphasis: {
						show: false
					}
				},
				//地图可否拖动及放大缩小
				roam: true,
				scaleLimit: {
					min: 1,
					max: 3
				},
				itemStyle: {
					normal: {
						//地图颜色
						areaColor: '#7e93a4',
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
		mapChart.setOption(option);

		var mapzhexian1 = echarts.init(document.querySelector('.world-he1'));
		option = {
			backgroundColor: '#434141',
			width: '90%',
			height: '65%',
			title: {
				text: '热销产品销量走势图(单位:万吨)',
				textStyle: {
					fontWeight: 'normal',
					fontFamily: '宋体',
					fontSize: 8,
					color: 'white',
				},
				left: '2%',
				top: '3%'
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
				data: ['美洲', '非洲', '大洋洲', '', '亚洲', '欧洲'],
				right: '6%',
				top: '3%',
				textStyle: {
					fontSize: 8,
					color: '#F1F1F3',
					fontFamily: '宋体'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				top: '25%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: true,
				axisLabel: {
					interval: 0
				},
				axisTick: {
					show: false,
				},
				axisLine: {
					lineStyle: {
						color: 'white',
						fontSize: 8,
						fontFamily: '宋体',
						fontWeight: 'normal'
					}
				},
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			}],
			yAxis: [{
				min: 0,
				max: 1600,
				interval: 400,
				type: 'value',
				axisTick: {
					show: true,
					inside: true,
					length: 2
				},
				axisLine: {
					lineStyle: {
						color: 'white',
						fontSize: 8,
						fontFamily: '宋体',
						fontWeight: 'normal',

					}
				},
				axisLabel: {
					margin: 10,
					textStyle: {
						fontSize: 8
					}
				},
				splitLine: {
					show: false
				},
			}],
			series: [{
				name: '美洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
					}
				},
				itemStyle: {
					normal: {
						color: 'rgb(137,189,27)'
					}
				},
				data: [960.3, 960.4, 907.5, 905.6, 980.1, 940.8, 890.6, 940.1, 800.1, 520.4, 750.8, 940.7]
			}, {
				name: '非洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
						color: 'rgb(0,136,212)'
					}
				},
				data: [970.3, 909.2, 909.3, 1000.0, 990.6, 900.6, 800.0, 910.5, 690.8, 670.5, 900.4, 840.9]
			}, {
				name: '大洋洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
						color: 'rgb(219,50,251)'
					}
				},
				data: [840.2, 801.0, 607.5, 702.1, 430.7, 808.5, 901.9, 101.8, 790.7, 870.6, 920.9, 0]
			}, {
				name: '亚洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
						color: 'rgb(243,140,61)'
					}
				},
				data: [840.2, 810.0, 607.5, 702.1, 403.7, 880.5, 901.9, 101.8, 709.7, 807.6, 902.9, 0]
			}, {
				name: '欧洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
						color: 'rgb(128,171,204)'
					}
				},
				data: [804.2, 801.0, 607.5, 700.1, 403.7, 808.5, 901.9, 101.8, 790.7, 807.6, 902.9, 0]
			}, ]
		};
		mapzhexian1.setOption(option);

		function box1() {
			mapdivhe1 = echarts.init(document.querySelector('.div-he1'));
			option = {
				backgroundColor: '#3e61aa',
				//			width: '90%',
				//			height: '65%',
				title: {
					text: '热销产品销量走势图(单位:万吨)',
					textStyle: {
						fontWeight: 'normal',
						fontFamily: '宋体',
						fontSize: 25,
						color: 'white',
					},
					left: '2%',
					top: '3%'
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
					data: ['美洲', '非洲', '大洋洲', '', '亚洲', '欧洲'],
					right: '6%',
					top: '3%',
					textStyle: {
						fontSize: 20,
						color: '#F1F1F3',
						fontFamily: '宋体'
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					top: '25%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					boundaryGap: true,
					axisLabel: {
						interval: 0,
						textStyle: {
							fontSize: 16
						}

					},
					axisTick: {
						show: false,
					},
					axisLine: {
						lineStyle: {
							color: 'white',
							fontSize: 8,
							fontFamily: '宋体',
							fontWeight: 'normal'
						}
					},
					data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
				}],
				yAxis: [{
					min: 0,
					max: 1600,
					interval: 400,
					type: 'value',
					axisTick: {
						show: true,
						inside: true,
						length: 2
					},
					axisLine: {
						lineStyle: {
							color: 'white',
							fontSize: 8,
							fontFamily: '宋体',
							fontWeight: 'normal',

						}
					},
					axisLabel: {
						margin: 10,
						textStyle: {
							fontSize: 16
						}
					},
					splitLine: {
						show: false
					},

					//      data: ['400','','800','','1200','','1600']

				}],
				series: [{
					name: '美洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(137,189,27)'
						}
					},
					data: [960.3, 960.4, 907.5, 905.6, 980.1, 940.8, 890.6, 940.1, 800.1, 520.4, 750.8, 940.7]
				}, {
					name: '非洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(0,136,212)'
						}
					},
					data: [970.3, 909.2, 909.3, 1000.0, 990.6, 900.6, 800.0, 910.5, 690.8, 670.5, 900.4, 840.9]
				}, {
					name: '大洋洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(219,50,251)'
						}
					},
					data: [840.2, 801.0, 607.5, 702.1, 430.7, 808.5, 901.9, 101.8, 790.7, 870.6, 920.9, 0]
				}, {
					name: '亚洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(243,140,61)'
						}
					},
					data: [840.2, 810.0, 607.5, 702.1, 403.7, 880.5, 901.9, 101.8, 709.7, 807.6, 902.9, 0]
				}, {
					name: '欧洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(128,171,204)'
						}
					},
					data: [804.2, 801.0, 607.5, 700.1, 403.7, 808.5, 901.9, 101.8, 790.7, 807.6, 902.9, 0]
				}, ]
			};
			mapdivhe1.setOption(option);
		}

		var mapzhexian2 = echarts.init(document.querySelector('.world-he2'));
		option = {
			backgroundColor: '#454e57',
			width: '90%',
			height: '65%',
			title: {
				text: '热销产品价格走势图(加权指数)',
				textStyle: {
					fontWeight: 'normal',
					fontFamily: '宋体',
					fontSize: 8,
					color: 'white',
				},
				left: '2%',
				top: "3%"
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
				data: ['美洲', '非洲', '大洋洲', '', '亚洲', '欧洲'],
				right: '6%',
				top: '3%',
				textStyle: {
					fontSize: 8,
					color: '#F1F1F3',
					fontFamily: '宋体'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				top: '25%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: true,
				axisLabel: {
					interval: 0

				},
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: 'white',
						fontSize: 8,
						fontFamily: '宋体',
						fontWeight: 'normal'
					}
				},
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			}],
			yAxis: [{
				min: 0,
				max: 1600,
				interval: 400,
				type: 'value',
				axisTick: {
					show: true,
					inside: true,
					length: 2
				},
				axisLine: {
					lineStyle: {
						color: 'white',
						fontSize: 8
					}
				},
				axisLabel: {
					margin: 10,
					textStyle: {
						fontSize: 8
					}
				},
				splitLine: {
					show: false
				},
				//      data: ['400','','800','','1200','','1600']

			}],
			series: [{
				name: '美洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
						color: 'rgb(137,189,27)'
					}
				},
				data: [960.3, 960.4, 907.5, 905.6, 980.1, 940.8, 890.6, 940.1, 800.1, 520.4, 750.8, 940.7]
			}, {
				name: '非洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
						color: 'rgb(0,136,212)'
					}
				},
				data: [970.3, 909.2, 909.3, 1000.0, 990.6, 900.6, 800.0, 910.5, 690.8, 670.5, 900.4, 840.9]
			}, {
				name: '大洋洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
						color: 'rgb(219,50,251)'
					}
				},
				data: [840.2, 801.0, 607.5, 702.1, 430.7, 808.5, 901.9, 101.8, 790.7, 870.6, 920.9, 0]
			}, {
				name: '亚洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
						color: 'rgb(243,140,61)'
					}
				},
				data: [840.2, 810.0, 607.5, 702.1, 403.7, 880.5, 901.9, 101.8, 709.7, 807.6, 902.9, 0]
			}, {
				name: '欧洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
						color: 'rgb(128,171,204)'
					}
				},
				data: [804.2, 801.0, 607.5, 700.1, 403.7, 808.5, 901.9, 101.8, 790.7, 807.6, 902.9, 0]
			}, ]
		};
		mapzhexian2.setOption(option);

		function box2() {
			mapdivhe2 = echarts.init(document.querySelector('.div-he2'));
			option = {
				backgroundColor: '#3e61aa',
				width: '90%',
				height: '65%',
				title: {
					text: '热销产品价格走势图(加权指数)',
					textStyle: {
						fontWeight: 'normal',
						fontFamily: '宋体',
						fontSize: 25,
						color: 'white',
					},
					left: '2%',
					top: "3%"
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
					data: ['美洲', '非洲', '大洋洲', '', '亚洲', '欧洲'],
					right: '6%',
					top: '3%',
					textStyle: {
						fontSize: 20,
						color: '#F1F1F3',
						fontFamily: '宋体'
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					top: '25%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					boundaryGap: true,
					axisLabel: {
						interval: 0,
						textStyle: {
							fontSize: 16
						}

					},
					axisTick: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color: 'white',
							fontSize: 8,
							fontFamily: '宋体',
							fontWeight: 'normal'
						}
					},
					data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
				}],
				yAxis: [{
					min: 0,
					max: 1600,
					interval: 400,
					type: 'value',
					axisTick: {
						show: true,
						inside: true,
						length: 2
					},
					axisLine: {
						lineStyle: {
							color: 'white',
							fontSize: 8
						}
					},
					axisLabel: {
						margin: 10,
						textStyle: {
							fontSize: 16
						}
					},
					splitLine: {
						show: false
					},
					//      data: ['400','','800','','1200','','1600']

				}],
				series: [{
					name: '美洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(137,189,27)'
						}
					},
					data: [960.3, 960.4, 907.5, 905.6, 980.1, 940.8, 890.6, 940.1, 800.1, 520.4, 750.8, 940.7]
				}, {
					name: '非洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(0,136,212)'
						}
					},
					data: [970.3, 909.2, 909.3, 1000.0, 990.6, 900.6, 800.0, 910.5, 690.8, 670.5, 900.4, 840.9]
				}, {
					name: '大洋洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(219,50,251)'
						}
					},
					data: [840.2, 801.0, 607.5, 702.1, 430.7, 808.5, 901.9, 101.8, 790.7, 870.6, 920.9, 0]
				}, {
					name: '亚洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(243,140,61)'
						}
					},
					data: [840.2, 810.0, 607.5, 702.1, 403.7, 880.5, 901.9, 101.8, 709.7, 807.6, 902.9, 0]
				}, {
					name: '欧洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(128,171,204)'
						}
					},
					data: [804.2, 801.0, 607.5, 700.1, 403.7, 808.5, 901.9, 101.8, 790.7, 807.6, 902.9, 0]
				}, ]
			};
			mapdivhe2.setOption(option);
		}

		var mapzhexian3 = echarts.init(document.querySelector('.world-he3'));
		option = {
			backgroundColor: '#515e6d',
			width: '90%',
			height: '65%',
			title: {
				text: '产品定价分析',
				subtext: '        产品定价                      ',
				subtextStyle: {
					fontWeight: 'normal',
					fontFamily: '宋体',
					fontSize: 8,
					color: 'white',
				},
				textStyle: {
					fontWeight: 'normal',
					fontFamily: '宋体',
					fontSize: 8,
					color: 'white',
				},
				left: '2%',
				top: '3%',
				itemGap: 20,
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
				data: ['美洲', '非洲', '大洋洲', '', '亚洲', '欧洲'],
				right: '6%',
				top: '3%',
				textStyle: {
					fontSize: 8,
					color: '#F1F1F3',
					fontFamily: '宋体'
				}
			},
			grid: {
				left: '3%',
				right: '4%',
				top: '25%',
				containLabel: true
			},
			xAxis: [{
				type: 'category',
				boundaryGap: true,
				axisLabel: {
					interval: 0

				},
				axisTick: {
					show: false
				},
				axisLine: {
					lineStyle: {
						color: 'white',
						fontSize: 8,
						fontFamily: '宋体',
						fontWeight: 'normal'
					}
				},
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
			}],
			yAxis: [{
				min: 0,
				max: 2000,
				interval: 500,
				type: 'value',
				axisTick: {
					show: true,
					inside: true,
					length: 2
				},
				axisLine: {
					lineStyle: {
						color: 'white',
						fontSize: 8
					}
				},
				axisLabel: {
					margin: 10,
					textStyle: {
						fontSize: 8,
					}
				},
				splitLine: {
					show: false
				},

			}, {
				type: 'value',

				max: 10.0,
				min: -10.0,
				interval: 5.0,
				splitLine: {
					lineStyle: {
						color: '#515e6d',
						textAlign: 'center'
					}
				},
				axisLine: {
					lineStyle: {
						color: 'white',
						fontSize: 8
					}
				},
				axisTick: {
					show: true,
					inside: true,
					length: 2
				},
				axisLabel: {
					margin: 15,
					textStyle: {
						fontSize: 8,
						align: 'center'
					}
				},
			}],

			series: [{
				name: '美洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
						color: 'rgb(137,189,27)'
					}
				},
				data: [960.3, 960.4, 907.5, 905.6, 980.1, 940.8, 890.6, 940.1, 800.1, 520.4, 750.8, 940.7]
			}, {
				name: '非洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
						color: 'rgb(0,136,212)'
					}
				},
				data: [970.3, 909.2, 909.3, 1000.0, 990.6, 900.6, 800.0, 910.5, 690.8, 670.5, 900.4, 840.9]
			}, {
				name: '大洋洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
						color: 'rgb(219,50,251)'
					}
				},
				data: [840.2, 801.0, 607.5, 702.1, 430.7, 808.5, 901.9, 101.8, 790.7, 870.6, 920.9, 0]
			}, {
				name: '亚洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
						color: 'rgb(243,140,61)'
					}
				},
				data: [840.2, 810.0, 607.5, 702.1, 403.7, 880.5, 901.9, 101.8, 709.7, 807.6, 902.9, 0]
			}, {
				name: '欧洲',
				type: 'line',
				symbol: 'none',
				lineStyle: {
					normal: {
						width: 1
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
						color: 'rgb(128,171,204)'
					}
				},
				data: [804.2, 801.0, 607.5, 700.1, 403.7, 808.5, 901.9, 101.8, 790.7, 807.6, 902.9, 0]
			}, ]
		};
		mapzhexian3.setOption(option);

		function box3() {
			var mapdivhe3 = echarts.init(document.querySelector('.div-he3'));
			option = {
				backgroundColor: '#3e61aa',
				width: '90%',
				height: '65%',
				title: {
					text: '产品定价分析',
					subtext: '     产品定价                            ',
					subtextStyle: {
						fontWeight: 'normal',
						fontFamily: '宋体',
						fontSize: 25,
						color: 'white',
					},
					textStyle: {
						fontWeight: 'normal',
						fontFamily: '宋体',
						fontSize: 25,
						color: 'white',
					},
					left: '2%',
					top: '3%',
					itemGap: 55,
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
					data: ['美洲', '非洲', '大洋洲', '', '亚洲', '欧洲'],
					right: '6%',
					top: '3%',
					textStyle: {
						fontSize: 20,
						color: '#F1F1F3',
						fontFamily: '宋体'
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					top: '25%',
					containLabel: true
				},
				xAxis: [{
					type: 'category',
					boundaryGap: true,
					axisLabel: {
						interval: 0,
						textStyle: {
							fontSize: 16
						}

					},
					axisTick: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color: 'white',
							fontSize: 8,
							fontFamily: '宋体',
							fontWeight: 'normal'
						}
					},
					data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
				}],
				yAxis: [{
					min: 0,
					max: 2000,
					interval: 500,
					type: 'value',
					axisTick: {
						show: true,
						inside: true,
						length: 2
					},
					axisLine: {
						lineStyle: {
							color: 'white',
							fontSize: 8
						}
					},
					axisLabel: {
						margin: 10,
						textStyle: {
							fontSize: 16,
						}
					},
					splitLine: {
						show: false
					},

				}, {
					type: 'value',

					max: 10.0,
					min: -10.0,
					interval: 5.0,
					splitLine: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color: 'white',
							fontSize: 8
						}
					},
					axisTick: {
						show: true,
						inside: true,
						length: 2
					},
					axisLabel: {
						margin: 15,
						textStyle: {
							fontSize: 16,
							align: 'center'
						}
					},
				}],

				series: [{
					name: '美洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(137,189,27)'
						}
					},
					data: [960.3, 960.4, 907.5, 905.6, 980.1, 940.8, 890.6, 940.1, 800.1, 520.4, 750.8, 940.7]
				}, {
					name: '非洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(0,136,212)'
						}
					},
					data: [970.3, 909.2, 909.3, 1000.0, 990.6, 900.6, 800.0, 910.5, 690.8, 670.5, 900.4, 840.9]
				}, {
					name: '大洋洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(219,50,251)'
						}
					},
					data: [840.2, 801.0, 607.5, 702.1, 430.7, 808.5, 901.9, 101.8, 790.7, 870.6, 920.9, 0]
				}, {
					name: '亚洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(243,140,61)'
						}
					},
					data: [840.2, 810.0, 607.5, 702.1, 403.7, 880.5, 901.9, 101.8, 709.7, 807.6, 902.9, 0]
				}, {
					name: '欧洲',
					type: 'line',
					symbol: 'none',
					lineStyle: {
						normal: {
							width: 1
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
							color: 'rgb(128,171,204)'
						}
					},
					data: [804.2, 801.0, 607.5, 700.1, 403.7, 808.5, 901.9, 101.8, 790.7, 807.6, 902.9, 0]
				}, ]
			};
			mapdivhe3.setOption(option);
		}

		var maploudou = echarts.init(document.querySelector('.world-he4'));
		var option = {
			backgroundColor: '#6a7889',
			width: '90%',
			height: '65%',
			title: {

				text: '热销产品漏斗图',
				left: '2%',
				top: '3%',
				textStyle: {
					fontSize: 13,
					color: 'white',
					fontFamily: '宋体',
					fontWeight: 'normal',
				}
			},
			legend: {
				data: ['展现', '访问', '邮件', '咨询', '成交'],
				right: '6%',
				itemWidth: 20,
				top: '3%',
				itemHeight: 10,
				itemGap: 3,
				textStyle: {
					fontSize: 8,
					fontFamily: '宋体',
					fontWeight: 'normal',
					color: 'white'
				}
			},
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c}%"
			},
			series: [{
					name: '预期',
					type: 'funnel',
					left: '25%',
					width: '50%',
					height: '60%',
					top: '30%',
					label: {
						normal: {
							formatter: '{b}预期',
							textStyle: {
								fontSize: 8,
								fontWeight: 'normal',
								fontFamily: '宋体',
								color: 'white'
							}
						},
						emphasis: {
							position: 'inside',
							formatter: '{b}预期: {c}%',
							textStyle: {
								fontSize: 8,
								fontWeight: 'normal',
								fontFamily: '宋体',
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					itemStyle: {
						normal: {
							opacity: 0.7
						}
					},
					data: [{
							value: 60,
							name: '邮件',
							itemStyle: {
								normal: {
									color: '#a89028'
								}
							}

						},
						{
							value: 80,
							name: '访问',
							itemStyle: {
								normal: {
									color: '#aa752e'
								}
							}
						},
						{
							value: 100,
							name: '展现',
							itemStyle: {
								normal: {
									color: '#18695a'
								}
							}
						},
						{
							value: 40,
							name: '咨询',
							itemStyle: {
								normal: {
									color: '#5a7041'
								}
							}
						},
						{
							value: 20,
							name: '成交',
							itemStyle: {
								normal: {
									color: '#b62c30'
								}
							}
						}
					]
				},
				{
					name: '实际',
					type: 'funnel',
					left: '25%',
					width: '50%',
					height: '60%',
					top: '30%',
					maxSize: '80%',
					label: {
						normal: {
							position: 'inside',
							formatter: '{c}%',
							textStyle: {
								color: '#fff',
								fontSize: 8,
								fontFamily: '宋体',
								fontWeight: 'normal',
							}
						},
						emphasis: {
							position: 'inside',
							formatter: '{c}%'
						}
					},
					itemStyle: {
						normal: {
							opacity: 0.5,
							borderColor: '#fff',
							borderWidth: 2
						}
					},
					data: [{
							value: 30,
							name: '邮件',
							itemStyle: {
								normal: {
									color: '#b5a617'
								}
							}
						},
						{
							value: 10,
							name: '咨询',
							itemStyle: {
								normal: {
									color: '#5f7439'
								}
							}
						},
						{
							value: 5,
							name: '成交',
							itemStyle: {
								normal: {
									color: '#c62022'
								}
							}
						},
						{
							value: 50,
							name: '访问',
							itemStyle: {
								normal: {
									color: '#cf6b16'
								}
							}
						},
						{
							value: 80,
							name: '展现',
							itemStyle: {
								normal: {
									color: '#0c6944'
								}
							}
						}
					]
				}
			]
		};
		maploudou.setOption(option);

		function box4() {
			var maploudou1 = echarts.init(document.querySelector('.div-he4'));
			var option = {
				backgroundColor: '#3e61aa',
				width: '90%',
				height: '65%',
				title: {

					text: '热销产品漏斗图',
					left: '2%',
					top: '3%',
					textStyle: {
						fontSize: 25,
						color: 'white',
						fontFamily: '宋体',
						fontWeight: 'normal',
					}
				},
				legend: {
					data: ['展现', '访问', '邮件', '咨询', '成交'],
					right: '6%',
					itemWidth: 20,
					top: '3%',
					itemHeight: 10,
					itemGap: 3,
					textStyle: {
						fontSize: 20,
						fontWeight: 'normal',
						color: 'white',
						fontFamily: '宋体',
					}
				},
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b} : {c}%"
				},
				series: [{
						name: '预期',
						type: 'funnel',
						left: '25%',
						width: '50%',
						height: '60%',
						top: '30%',
						label: {
							normal: {
								formatter: '{b}预期',
								textStyle: {
									fontSize: 20,
									fontWeight: 'normal',
									fontFamily: '宋体',
									color: 'white'
								}
							},
							emphasis: {
								position: 'inside',
								formatter: '{b}预期: {c}%'
							}
						},
						labelLine: {
							normal: {
								show: false
							}
						},
						itemStyle: {
							normal: {
								opacity: 0.7
							}
						},
						data: [{
								value: 60,
								name: '邮件',
								itemStyle: {
									normal: {
										color: '#a89028'
									}
								}

							},
							{
								value: 80,
								name: '访问',
								itemStyle: {
									normal: {
										color: '#aa752e'
									}
								}
							},
							{
								value: 100,
								name: '展现',
								itemStyle: {
									normal: {
										color: '#18695a'
									}
								}
							},
							{
								value: 40,
								name: '咨询',
								itemStyle: {
									normal: {
										color: '#5a7041'
									}
								}
							},
							{
								value: 20,
								name: '成交',
								itemStyle: {
									normal: {
										color: '#b62c30'
									}
								}
							}
						]
					},
					{
						name: '实际',
						type: 'funnel',
						left: '25%',
						width: '50%',
						height: '60%',
						top: '30%',
						maxSize: '80%',
						label: {
							normal: {
								position: 'inside',
								formatter: '{c}%',
								textStyle: {
									color: '#fff',
									fontSize: 20,
									fontFamily: '宋体',
									fontWeight: 'normal',
								}
							},
							emphasis: {
								position: 'inside',
								formatter: '{c}%'
							}
						},
						itemStyle: {
							normal: {
								opacity: 0.5,
								borderColor: '#fff',
								borderWidth: 2
							}
						},
						data: [{
								value: 30,
								name: '邮件',
								itemStyle: {
									normal: {
										color: '#b5a617'
									}
								}
							},
							{
								value: 10,
								name: '咨询',
								itemStyle: {
									normal: {
										color: '#5f7439'
									}
								}
							},
							{
								value: 5,
								name: '成交',
								itemStyle: {
									normal: {
										color: '#c62022'
									}
								}
							},
							{
								value: 50,
								name: '访问',
								itemStyle: {
									normal: {
										color: '#cf6b16'
									}
								}
							},
							{
								value: 80,
								name: '展现',
								itemStyle: {
									normal: {
										color: '#0c6944'
									}
								}
							}
						]
					}
				],

			};
			maploudou1.setOption(option);

		}

		$(".fangda1").click(function() {
			$(".ling1").css("display", "block")
			$(".ling1").animate({
				'height': '60%',
				'width': '70%',
				'top': '25%',
				'right': '15%'
			}, 300, function() {
				box1();
			})
			$('.div-he1').css({
				'width': '92%',
				'height': '100%',
				'float': 'left',
				'display': 'block'
			})
			//			
			$('.fangxiao1 ').css({
				'float': 'right',
				'margin-top': '1%',
				'display': 'block'
			})
			$(".gai").css("display", "block")
			//		
		});
		$(".fangxiao1").click(function() {
			$(".ling1").animate({}, 300, function() {
				$(".ling1").css({
					"display": "none",
					'height': '0',
					'width': '0',
				})
			})
			$(".gai").css("display", "none")

		});

		$(".fangda2").click(function() {
			$(".ling2").css("display", "block")
			$(".ling2").animate({
				'height': '60%',
				'width': '70%',
				'top': '25%',
				'right': '15%'
			}, 300, function() {
				box2();
			})
			$('.div-he2').css({
				'width': '92%',
				'height': '100%',
				'float': 'left',
				'display': 'block'
			})
			//			
			$('.fangxiao2 ').css({
				'float': 'right',
				'margin-top': '1%',
				'display': 'block'
			})
			$(".gai").css("display", "block")
			//		
		});
		$(".fangxiao2").click(function() {
			$(".ling2").animate({}, 300, function() {
				$(".ling2").css({
					"display": "none",
					'height': '0',
					'width': '0',
				})
			})
			$(".gai").css("display", "none")

		});

		$(".fangda3").click(function() {
			$(".ling3").css("display", "block")
			$(".ling3").animate({
				'height': '60%',
				'width': '70%',
				'top': '25%',
				'right': '15%'
			}, 300, function() {
				box3();
			})
			$('.div-he3').css({
				'width': '92%',
				'height': '100%',
				'float': 'left',
				'display': 'block'
			})
			//			
			$('.fangxiao3 ').css({
				'float': 'right',
				'margin-top': '1%',
				'display': 'block'
			})
			$(".gai").css("display", "block")
			//		
		});
		$(".fangxiao3").click(function() {
			$(".ling3").animate({}, 300, function() {
				$(".ling3").css({
					"display": "none",
					'height': '0',
					'width': '0',
				})
			})
			$(".gai").css("display", "none")

		});

		$(".fangda4").click(function() {
			$(".ling4").css("display", "block")
			$(".ling4").animate({
				'height': '60%',
				'width': '70%',
				'top': '25%',
				'right': '15%'
			}, 300, function() {
				box4();
			})
			$('.div-he4').css({
				'width': '92%',
				'height': '100%',
				'float': 'left',
				'display': 'block'
			})
			//			
			$('.fangxiao4 ').css({
				'float': 'right',
				'margin-top': '1%',
				'display': 'block'
			})
			$(".gai").css("display", "block")
			//		
		});
		$(".fangxiao4").click(function() {
			$(".ling4").animate({}, 300, function() {
				$(".ling4").css({
					"display": "none",
					'height': '0',
					'width': '0',
				})
			})
			$(".gai").css("display", "none")

		});

		//		})