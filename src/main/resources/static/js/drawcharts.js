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
        type: "post",
        url: "/add",
        data: {},
        dataType: "json",
        success: function (userData){
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
                var series = this.series[0],
                    chart = this;
                setInterval(function () {
                    var x = (new Date()).getTime(),
                        y = number;
                    series.addPoint([x, y], true, true);
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
            for (i = -19; i <= 0; i += 1) {
               data.push({
                    x: time + i * 5000,
                    y: 0
                });
            }
            return data;
        }())
    }]
}, function(c) {
    activeLastPointToolip(c)
});
