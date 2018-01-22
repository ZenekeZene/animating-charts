window.chartColors = {
	red: 'rgb(255, 99, 132)',
	orange: 'rgb(255, 159, 64)',
	yellow: 'rgb(255, 205, 86)',
	green: 'rgb(75, 192, 192)',
	blue: 'rgb(54, 162, 235)',
	purple: 'rgb(153, 102, 255)',
	versia: 'rgb(232,78,15)',
	grey: 'rgb(201, 203, 207)'
};

var lineChartData = {
  labels: ["CMG1", "CMG1", "CMG1"],
  datasets: [{
    label: "My First dataset",
    borderColor: window.chartColors.red,
    backgroundColor: window.chartColors.red,
    fill: false,
    data: [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor()
    ],
    yAxisID: "y-axis-1"
  }, {
    label: "My Second dataset",
    borderColor: window.chartColors.blue,
    backgroundColor: window.chartColors.blue,
    fill: false,
    data: [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor()
    ],
    yAxisID: "y-axis-2"
  }],
  elements: {
    point: {
      radius: 0
    }
  }
};

var config = {
  responsive: true,
  mantainRatio: true,
  type: 'line',
  data: {
    labels: ["", "", "CMG1", "", "CMG1", "", "CMG1",""],
    datasets: [
      {
        label: "",
        borderWidth: 1.2,
        pointRadius: 0,
        borderColor: window.chartColors.versia,
        data: [80, 80, 80, 80, 80, 80, 80, 80],
        fill: false,
      }, {
        label: "",
        borderWidth: 1.2,
        fill: false,
        pointRadius: 0,
        borderColor: window.chartColors.versia,
        data: [null, 20, 40, 60, 80, 100, 120, 140],
      },{
        label: "",
        borderWidth: 1.2,
        pointRadius: 0,
        borderColor: window.chartColors.blue,
        data: [null, 120, 80, 60, 60, 70, 90, null],
        fill: false,
      },
      {
        label: "",
        borderWidth: 1.2,
        pointRadius: 0,
        borderColor: window.chartColors.blue,
        data: [null, 60, 35, 30, 40, 55, 75,  null],
        fill: false,
      }
    ]
  },
  options: {
    legend: { display: false },
    responsive: true,
    title: {
      position:'left',
      display:true,
      text:'Costos e ingresos'
    },
    tooltips: {
      enabled: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      xAxes: [{
        ticks: {
          fontSize: 10,
          callback: function(value, index, values) {
            if (value == 'CMG1')
              return 'CMG1';
          }
        },
        display: true,
        scaleLabel: {
          display: false,
          labelString: ''
        }
      }],
      yAxes: [{
        ticks: {
          fontSize: 10,
          min: 0,
          max: 150,
          stepSize: 40,
          callback: function(value, index, values) {
            if (value == 80)
              return 'P = IMG2 = IMG1';
            else if (value == 40)
              return 'CMG1';
            else if (value == 120)
              return 'CMG2';
          }
        },
        fontSize: 8,
          display: true,
          scaleLabel: {
            display: false,
            labelString: ''
          }
      }]
    }
  }
};


window.onload = function() {
  console.log(document.getElementById("myChart"));
  var ctx = document.getElementById("myChart").getContext('2d');

  window.myLine = Chart.Line(ctx, config);
}
