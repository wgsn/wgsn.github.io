$.ajax({
	url:yM + "index.php/Home/Api/get_sd_info",
	data:{key:'shandong'},
	success:function(data){
       var d = JSON.parse(data);
       console.log(d)
            $('.describe').html(d.info);
            $('.Cucheng p').html(d.city+'促成意向订单总额');
            $('.Yi p').html(d.city+'本年度(2017年1—6月份)累计进出口');
            $('.TMspan').eq(0).html('进出口金额:'+ d.out_in_money +'亿元');
            $('.TMspan').eq(1).html('同比:'+ d.out_in_rate +'%');
            $('.TMspan').eq(2).html('进口金额:'+ d.in_money +'亿元');
            $('.TMspan').eq(3).html('同比:'+ d.in_rate +'%');
            $('.TMspan').eq(4).html('出口金额:'+d.out_money +'亿元');
            $('.TMspan').eq(5).html('同比:'+ d.out_rate +'%');
            $('.TMspan').eq(6).html('占比:'+ d.out_rate_in +'%');
	}
})
$('.top').load('../top.html');
$('.footer').load('../footer.html');
//加载前十位出口市场
$.ajax({
	url:yM + "index.php/Home/Api/get_sd_out_top",
	success:function(data){
       var d = JSON.parse(data);
       for(var i = 0;i< d.length;i++){
          	var Tab_str = '<tr><td>'+(i+1)+'</td><td>'+d[i].name +'</td><td>'+d[i].money+ '</td><td>'+d[i].rate+'%</td><td>'+d[i].rate_in+'%</td></tr>'
       	   $('.dTab:eq(0) tbody')[0].innerHTML+=Tab_str;
       }
       
	}
})
//山东省二十大类出口商品
$.ajax({
	url:yM + "index.php/Home/Api/get_sd_product_out",
	success:function(data){
       var d = JSON.parse(data);
       console.log(d)
       for(var i = 0 ; i< (d.length/2);i++){
       	    var ai= i+1;
            var Tab_str = '<tr><td>'+d[i].name +'</td><td>'+ parseInt(d[i].money)+ '</td><td>'+d[i].rate+'%</td><td>'+d[ai].name +'</td><td>'+parseInt(d[ai].money)+ '</td><td>'+d[ai].rate+'%</td></tr>'
       	    $('.dTab:eq(1) tbody')[0].innerHTML+=Tab_str;
       	    i++;
       }

       for(var i = 0 ; i< d.length;i++){
       	    var ai= i+1;
            var Tab_str = '<tr><td>'+d[i].name +'</td><td>'+ parseInt(d[i].money)+ '</td><td>'+d[i].rate+'%</td><td>'+d[ai].name +'</td><td>'+parseInt(d[ai].money)+ '</td><td>'+d[ai].rate+'%</td></tr>'
       	    $('.bigdTab:eq(0) tbody')[0].innerHTML+=Tab_str;
       	    i++;
       }
       
	}
})

//加载地图
$.getJSON('../js/shandong.json', function(data) {
	echarts.registerMap('shandong', data);
	var Liang = echarts.init(document.querySelector('.Zhong-l'));
	option = {
		title: {
			x: 'center',
		},
		textStyle: {
			color: '#fff',
		},

		tooltip: {
			trigger: 'item',
			formatter: '{b}'
		},
		legend: {},
		series: [{
			type: 'map',
			name: '成交总额度 ',
			map: 'shandong',
			roam: true, //滚轮缩放
			scaleLimit: {
				min: 1,
				max: 1.5,
			},
			itemStyle: {
				normal: {
					areaColor: '#0E345A',
					label: {
						show: true,
						textStyle: {
							color: '#fff',
							fontSize: 15,
							fontWeight: 'bold',
						},
					},
					borderColor: '#74A0C9',
					borderWidth: 3,
				},
				emphasis: {
					areaColor: '#CA9A7A',
					label: {
						show: true,
						textStyle: {
							color: '#ddd',
							fontWeight: 'bold',
							fontSize: 15,
						}
					},
				},
			},
			
		}],
	}
   
 	Liang.setOption(option);
	Liang.on('click', function(params) {
		var city = params.name;
		location.reload()
		if(city == '威海市') {
			window.location.href = 'deal_of_SDcity.html#weihai';
		}
		if(city == '烟台市') {
			window.location.href = 'deal_of_SDcity.html#yantai';
		}
		if(city == '东营市') {
			window.location.href = 'deal_of_SDcity.html#dongying';
		}
		if(city == '滨州市') {
			window.location.href = 'deal_of_SDcity.html#binzhou';
		}
		if(city == '德州市') {
			window.location.href = 'deal_of_SDcity.html#dezhou';
		}
		if(city == '济南市') {
			window.location.href = 'deal_of_SDcity.html#jinan';
		}
		if(city == '聊城市') {
			window.location.href = 'deal_of_SDcity.html#liaocheng';
		}
		if(city == '淄博市') {
			window.location.href = 'deal_of_SDcity.html#zibo';
		}
		if(city == '潍坊市') {
			window.location.href = 'deal_of_SDcity.html#weifang';
		}
		if(city == '青岛市') {
			window.location.href = 'deal_of_SDcity.html#qingdao';
		}
		if(city == '泰安市') {
			window.location.href = 'deal_of_SDcity.html#taian';
		}
		if(city == '莱芜市') {
			window.location.href = 'deal_of_SDcity.html#laiwu';
		}
		if(city == '日照市') {
			window.location.href = 'deal_of_SDcity.html#rizhao';
		}
		if(city == '临沂市') {
			window.location.href = 'deal_of_SDcity.html#linyi';
		}
		if(city == '菏泽市') {
			window.location.href = 'deal_of_SDcity.html#heze';
		}
		if(city == '枣庄市') {
			window.location.href = 'deal_of_SDcity.html#zaozhuang';
		}
		if(city == '济宁市') {
			window.location.href = 'deal_of_SDcity.html#jining';
		}
	})

  })
//模态框
    $('.SASA').on('click', function(e) {
		$('.II').css('display', 'block')

    	console.log(window.innerHeight-e.clientY)
		$('.FA').css({'right':(window.innerWidth-e.clientX)+'px',top:(e.clientY)+'px'})
		$('.FA').animate({
			'width': '70%',
			'height': '50%',
			'background': '#2F79BE',
			'right': '15%',
			'position': 'absolute',
			'top': '25%',
			'z-index': '9999999999'
		}, 300, function() {
			
			
		})
	});
	$('.So').on('click', function() {
		$('.MoMo').remove();
		$('.FA').css('width', '0');
		$('.FA').css('height', '0');
		$('.II').css('display', 'none')
	})


