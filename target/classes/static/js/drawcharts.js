Highcharts.setOptions({
    global: {
        useUTC: false
    }
});
var userName;
var userText;
var time;
var total = 0;
var number = 0;
function get(){
    $.ajax({
        type: "post", //向后台发送get请求
        url: "/add", //发送的目的地
        data: {}, //发送的数据
        dataType: "json", //发送数据的类型
        success: function (userData){ //当请求成功后台成功返回数据是做的操作
            if(userData != null ){
                userName = userData.name;
                userText = userData.text;
                time = (new Date()).toLocaleTimeString();
                total++;
                $("#contentBody").append("<tr align='center'><td>"+total+"</td><td>"+time+"</td><td>"+userName+"</td><td>"+userText+"</td></tr>");
                number++;
            }
        }
    });
    setTimeout("get()",4)
}
// setInterval("get()",100)
Highcharts.setOptions({
    global: {
        useUTC: false
    }
});
function activeLastPointToolip(chart) {
    var points = chart.series[0].points;
    chart.tooltip.refresh(points[points.length -1]);
}
$('#container').highcharts({
    chart: {
        type: 'spline',
        animation: Highcharts.svg,
        marginRight: 10,
        events: {
            load: function () {
                // set up the updating of the chart each second
                var series = this.series[0],
                    chart = this;
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = number;
                    series.addPoint([x, y], true, true);//Object options, [Boolean redraw], [Boolean shift]
                    activeLastPointToolip(chart);
                    number = 0;
                }, 5000);
            }
        }
    },
    title: {
        text: '五秒弹幕量'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 100
    },
    yAxis: {
        title: {
            text: '值'
        }},
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: '弹幕数',
        data: (function () {
            var data = [],
                time = (new Date()).getTime(),
                i;
            for (i = -19; i <= 0; i += 1) {//初始表上的数据，20个
               data.push({
                    x: time + i * 5000,//最后一个数据是当前时间， 则第一个数据是最后一个数据的时间减去19秒
                    y: 0
                });
            }
            return data;
        }())
    }]
}, function(c) {
    activeLastPointToolip(c)
});
