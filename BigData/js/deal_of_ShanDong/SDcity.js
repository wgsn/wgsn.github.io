$(function(){
    $('.top').load('../top.html')
    $('.footer').load('../footer.html')

    var str =  window.location.href;
    var C_city = str.substring(str.indexOf('#')+1)
    // var yM  = 'http://dsj.lzxqxx.com/';
    var Liang = echarts.init(document.querySelector('.Zhong-l'));
    
    if(C_city == 'weifang'){
        $('.Cucheng .TMspan').html(3142.797+'万美金 ')
    }else if(C_city == 'linyi'){
        $('.Cucheng .TMspan').html(5460.96+'万美金 ')
    }else{
        $('.Cucheng .TMspan').html(0)

    }
    $.ajax({
        url:yM + "index.php/Home/Api/get_sd_info",
        data:{key:C_city},
        success:function(adata){
            $('.TM').css('opacity','1');
            var d = JSON.parse(adata);
            console.log(d)
            $('.SDcity_describe').html(d.info);
            $('.Cucheng p').html(d.city+'促成意向订单总额');
            $('.Yi p').html(d.city+'本年度(2017年1—6月份)累计进出口');
            $('.TMspan').eq(0).html('进出口金额:'+ parseInt(d.out_in_money) +'亿元');
            $('.TMspan').eq(1).html('同比:'+ parseInt(d.out_in_rate) +'%');
            $('.TMspan').eq(2).html('进口金额:'+ parseInt(d.in_money) +'亿元');
            $('.TMspan').eq(3).html('同比:'+ parseInt(d.in_rate) +'%');
            $('.TMspan').eq(4).html('出口金额:'+ parseInt(d.out_money) +'亿元');
            $('.TMspan').eq(5).html('同比:'+ parseInt(d.out_rate) +'%');
            $('.TMspan').eq(6).html('占比:'+ parseInt(d.out_rate_in) +'%');
            $('.TMspan').eq(7).html('增速位次:'+ d.out_su );
            $('.TMspan').eq(8).html('增量位次:'+ d.out_liang );



            //地图获取
            $.getJSON('../js/shandong.json', function(data) {
                    echarts.registerMap('shandong', data);
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
                            roam: true, 
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
              option.series[0].data = [];
              option.series[0].data.push({name:d.city,itemStyle:{normal:{color:'#CA9A7A'}}})
             
              Liang.setOption(option);
           })
           
           //定义方法
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
          //地图获取结束

        },
    })

})