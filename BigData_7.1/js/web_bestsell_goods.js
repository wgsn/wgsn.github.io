var mC = echarts.init(box);
var a=new Date;


var xx=fn1[1]+1; 

var xx2=(xx+1)>12?(xx+1)%12:(xx+1);    
var xx3=(xx+2)>12?(xx+2)%12:(xx+2);
var xx4=(xx+3)>12?(xx+3)%12:(xx+3);
var xx5=(xx+4)>12?(xx+4)%12:(xx+4); 
var xx6=(xx+5)>12?(xx+5)%12:(xx+5);
var xx7=(xx+6)>12?(xx+6)%12:(xx+6);
var xx8=(xx+7)>12?(xx+7)%12:(xx+7);
var xx9=(xx+8)>12?(xx+8)%12:(xx+8);
var xx10=(xx+9)>12?(xx+9)%12:(xx+9); 
var xx11=(xx+10)>12?(xx+10)%12:(xx+10);
var xx12=(xx+11)>12?(xx+11)%12:(xx+11);





var t=a.getTime()-24*60*60*1000;
	  	var aa=new Date(t);
	  	
	  	 var y=aa.getFullYear();
	  	 var m=aa.getMonth()+1;
	  	 var tian=aa.getDate();
			$.getJSON('../js/continent_geo.json', function(data){
			     echarts.registerMap('continent',data)	;
			     
			option = {
			
title: {
				text: '全球热销产品走势图', 
				left: 'center',
				top: '15%',
				textStyle: {
					color: '#fff',
					fontSize: '30',
					fontFamily: '宋体'
				}
			},
			
				tooltip: {
					trigger: 'item',
					formatter: function(params) {
						var value = params.value + '万单 ' ;
						return params.seriesName + '<br/>' + params.name + ' : ' + value;
					}
				},
				
				series: [{
					type: 'map',
					top:'30%',
					mapType: 'continent', 
					label: {
					emphasis: {
						show: false
					}
				},
				
				//地图可否拖动及放大缩小
				roam: false,
				scaleLimit: {
					min: 1,
					max: 3
				},
				itemStyle: {
					normal: {
						label:{
							show:false,
							textStyle: {
					fontWeight: 'normal',
					fontFamily:'微软雅黑',
					fontSize: 16,
					color:'white'
				},
						},
						areaColor: '#7e93a4',
						borderColor: '#0f345a'
					},
					emphasis: {
						label:{
							show:false,
									textStyle: {
					fontWeight: 'normal',
					fontFamily:'微软雅黑',
					fontSize: 16,
				},
						},
						areaColor: 'yellow'
					}
				},
//				
					data: [{
						name: '大洋洲',
						value: 33
					}, {
						name: '亚洲',
						value: 592.09
					}, {
						name: '欧洲',
						value: 183.62
					}, {
						name: '北美洲',
						value: 41.63
					}, {
						name: '南美洲',
						value: 10.41
					}, {
						name: '非洲',
						value: 22.5837,
					}],
				
					textFixed: {
						'大洋洲': [265, 0],
						'亚洲': [104, -30],
						'欧洲': [20, 0],
						'北美洲': [0, -10],
						'南美洲': [20, -30],
						'非洲': [200, -10],
					}
				}]
			};

			mC.setOption(option);
			mC.on('click',function(params){
				var zhou=params.name;
				if(zhou=='大洋洲'){
					window.location.href='dayangzhou.html';
				}else if(zhou=='亚洲'){
					window.location.href='yazhou.html'
				}else if(zhou=='非洲'){
					window.location.href='feizhou.html'
				}else if(zhou=='北美洲'){
					window.location.href='beimeizhou.html'
				}else if(zhou=='南美洲'){
					window.location.href='nanmeizhou.html'
				}else if(zhou=='欧洲'){
					window.location.href='ouzhou.html'
				}
			})
			});


//		var mapzhexian1 = echarts.init(document.querySelector('.world-he1'));
//		option = {
//			backgroundColor: '#434141',
//			width: '90%',
//			height: '65%',
//			title: {
//				text: 'Mr-World平台采购总量趋势图(单位:万单)',
//				textStyle: {
//					fontWeight: 'normal',
//					fontFamily: '宋体',
//					fontSize: 8,
//					color: 'white',
//				},
//				left: '2%',
//				top: '3%'
//			},
//			tooltip: {
//				trigger: 'axis',
//				axisPointer: {
//					lineStyle: {
//						color: '#57617B'
//					}
//				}
//			},
//			legend: {
//				icon: 'rect',
//				itemWidth: 20,
//				itemHeight: 1,
//				itemGap: 3,
//				data: ['建材', '大型机械', '家电', '', '轻工业', '纺织服装'],
//				right: '6%',
//				top: '3%',
//				textStyle: {
//					fontSize: 8,
//					color: '#F1F1F3',
//					fontFamily: '宋体'
//				}
//			},
//			grid: {
//				left: '3%',
//				right: '4%',
//				top: '25%',
//				containLabel: true
//			},
//			xAxis: [{
//				type: 'category',
//				boundaryGap: true,
//				axisLabel: {
//					interval: 0
//				},
//				axisTick: {
//					show: false,
//				},
//				axisLine: {
//					lineStyle: {
//						color: 'white',
//						fontSize: 8,
//						fontFamily: '宋体',
//						fontWeight: 'normal'
//					}
//				},
//				data: [xx+'月', xx2+'月', xx3+'月', xx4+'月', xx5+'月', xx6+'月', xx7+'月', xx8+'月', xx9+'月',xx10+'月', xx11+'月', xx12+'月']
//			}],
//			yAxis: [{
//				min: 0,
//				max: 1.5,
//				interval: 0.3,
//				type: 'value',
//				axisTick: {
//					show: true,
//					inside: true,
//					length: 2
//				},
//				axisLine: {
//					lineStyle: {
//						color: 'white',
//						fontSize: 8,
//						fontFamily: '宋体',
//						fontWeight: 'normal',
//
//					}
//				},
//				axisLabel: {
//					margin: 10,
//					textStyle: {
//						fontSize: 8
//					}
//				},
//				splitLine: {
//					show: false
//				},
//			}],
//			series: [{
//				name: '建材',
//				type: 'line',
//				symbol: 'none',
//				lineStyle: {
//					normal: {
//						width: 1
//					}
//				},
//				areaStyle: {
//					normal: {
//						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//							offset: 0,
//							color: 'rgba(0, 0, 0, 0)'
//						}, {
//							offset: 0.8,
//							color: 'rgba(0, 0, 0, 0)'
//						}], false),
//					}
//				},
//				itemStyle: {
//					normal: {
//						color: 'rgb(137,189,27)'
//					}
//				},
//				data: [0.85, 0.83,1.1,1.3,0.47,0.48,1.1,1.3,1.13,0.47,0.88,0.83]
//			}, {
//				name: '大型机械',
//				type: 'line',
//				symbol: 'none',
//				lineStyle: {
//					normal: {
//						width: 1
//					}
//				},
//				areaStyle: {
//					normal: {
//						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//							offset: 0,
//							color: 'rgba(0, 0, 0, 0)'
//						}, {
//							offset: 0.8,
//							color: 'rgba(0, 0, 0, 0)'
//						}], false),
//						shadowColor: 'rgba(0, 0, 0, 0.1)',
//						shadowBlur: 10
//					}
//				},
//				itemStyle: {
//					normal: {
//						color: 'rgb(0,136,212)'
//					}
//				},
//				data: [0.6,0.62,0.69,0.7,0.88,0.58,0.59,0.7,0.97,0.88,0.7,0.55]
//			}, {
//				name: '家电',
//				type: 'line',
//				symbol: 'none',
//				lineStyle: {
//					normal: {
//						width: 1
//					}
//				},
//				areaStyle: {
//					normal: {
//						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//							offset: 0,
//							color: 'rgba(0, 0, 0, 0)'
//						}, {
//							offset: 0.8,
//							color: 'rgba(0, 0, 0, 0)'
//						}], false),
//						shadowColor: 'rgba(0, 0, 0, 0.1)',
//						shadowBlur: 10
//					}
//				},
//				itemStyle: {
//					normal: {
//						color: 'rgb(219,50,251)'
//					}
//				},
//				data: [1.4,1.32,0.95,0.4,1.14,1.14, 0.95,0.4,0.4,1.14, 1.4,1.32]
//			}, {
//				name: '轻工业',
//				type: 'line',
//				symbol: 'none',
//				lineStyle: {
//					normal: {
//						width: 1
//					}
//				},
//				areaStyle: {
//					normal: {
//						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//							offset: 0,
//							color: 'rgba(0, 0, 0, 0)'
//						}, {
//							offset: 0.8,
//							color: 'rgba(0, 0, 0, 0)'
//						}], false),
//						shadowColor: 'rgba(0, 0, 0, 0.1)',
//						shadowBlur: 10
//					}
//				},
//				itemStyle: {
//					normal: {
//						color: 'rgb(243,140,61)'
//					}
//				},
//				data: [0.88,1.3,1.3,0.6,1.23,0.6,1.33,1.3,1.3,0.6,0.6,1.23	]
//			}, {
//				name: '纺织服装',
//				type: 'line',
//				symbol: 'none',
//				lineStyle: {
//					normal: {
//						width: 1
//					}
//				},
//				areaStyle: {
//					normal: {
//						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//							offset: 0,
//							color: 'rgba(0, 0, 0, 0)'
//						}, {
//							offset: 0.8,
//							color: 'rgba(0, 0, 0, 0)'
//						}], false),
//						shadowColor: 'rgba(0, 0, 0, 0.1)',
//						shadowBlur: 10
//					}
//				},
//				itemStyle: {
//					normal: {
//						color: 'rgb(128,171,204)'
//					}
//				},
//				data: [0.56,0.53, 1.5,1.24,1.4,1.4,1.5,1.24,1.25,1.4,0.56, 0.43]
//			}, ]
//		};
//		mapzhexian1.setOption(option);

		function box1() {
			mapdivhe1 = echarts.init(document.querySelector('.div-he1'));
			option = {
				backgroundColor: '#3e61aa',
				//			width: '90%',
				//			height: '65%',
				title: {
					text: 'Mr-World平台采购总量趋势图(单位:万单)',
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
                    data: ['建材', '大型机械', '家电', '', '轻工业', '纺织服装'],
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
					data: [xx+'月', xx2+'月', xx3+'月', xx4+'月', xx5+'月', xx6+'月', xx7+'月', xx8+'月', xx9+'月',xx10+'月', xx11+'月', xx12+'月']
			}],
                yAxis: [{
                    min: 0,
                    max: 1.5,
                    interval: 0.3,
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
                    name: '建材',
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
                    data: [0.85, 0.83,1.1,1.3,0.47,0.48,1.1,1.3,1.13,0.47,0.88,0.83]
                }, {
                    name: '大型机械',
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
                    data: [0.6,0.62,0.69,0.7,0.88,0.58,0.59,0.7,0.97,0.88,0.7,0.55]
                }, {
                    name: '家电',
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
                    data: [1.4,1.32,0.95,0.4,1.14,1.14, 0.95,0.4,0.4,1.14, 1.4,1.32]
                }, {
                    name: '轻工业',
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
                    data: [0.88,1.3,1.3,0.6,1.23,0.6,1.33,1.3,1.3,0.6,0.6,1.23	]
                }, {
                    name: '纺织服装',
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
                    data: [0.56,0.53, 1.5,1.24,1.4,1.4,1.5,1.24,1.25,1.4,0.56, 0.43]
                }, ]
			};
			mapdivhe1.setOption(option);
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
				data: ['建材', '大型机械', '家电', '', '轻工业', '纺织服装'],
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
				data: [xx+'月', xx2+'月', xx3+'月', xx4+'月', xx5+'月', xx6+'月', xx7+'月', xx8+'月', xx9+'月',xx10+'月', xx11+'月', xx12+'月']
			}],
			yAxis: [{
				min: -5,
				max: 15,
				interval: 5,
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
				name: '建材',
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
				data: [3.2, 3.67, 3.88, 5.38, 3.08,2.99, 3.75,4.08,5.45,3.08,3.23,3.77]
			}, {
				name: '大型机械',
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
				data: [3.25, 3.6 ,2.8, 3.04, 4.15, 3.65 ,2.6, 2.84, 3.33 ,4.15, 3.23]
			}, {
				name: '家电',
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
				data: [4.98, 4.49, 3.06, 3.26, 4.98, 4.08, 4.23, 4.96,4.43]
			}, {
				name: '轻工业',
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
				data: [4.31,5.12, 5.05, 4.16,4.81, 6.11, 5.05, 4.69, 4.59, 4.81, 4.29, 5.01]
			}, {
				name: '纺织服装',
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
				data: [3.62, 4.69, 4.89, 5.13, 5.06, 5.36, 4.89, 5.28, 5.29, 5.06, 3.62, 4.59]
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
					data: ['建材', '大型机械', '家电', '', '轻工业', '纺织服装'],
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
					data: [xx+'月', xx2+'月', xx3+'月', xx4+'月', xx5+'月', xx6+'月', xx7+'月', xx8+'月', xx9+'月',xx10+'月', xx11+'月', xx12+'月']
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
					name: '建材',
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
					name: '大型机械',
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
					name: '家电',
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
					name: '轻工业',
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
					name: '纺织服装',
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