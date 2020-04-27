import Chart from 'chart.js';
var ctx = document.getElementById('myChart');

var newLegendClickHandler = function (e, legendItem) {
  var index = legendItem.datasetIndex;
  let legendItemsList = [];

  for (let i = 1; i < this.chart.controller.legend.legendItems.length; i++) {
    legendItemsList.push(this.chart.getDatasetMeta(i));
  }
  if (index !== 0) {
    legendItemsList.forEach(
      meta => (meta.hidden = meta.index !== index ? true : false),
    );

    this.chart.update();
  }
};

const getFormatDate = data => {
  return new Date(data.date * 1000).toDateString().slice(4);
};

Chart.defaults.global.elements.line.fill = false;
Chart.defaults.global.elements.line.borderWidth = 4;
Chart.defaults.global.elements.point.radius = 4;
Chart.plugins.register({
  id: 'paddingBelowLegends',
  beforeInit: function (chart, options) {
    chart.legend.afterFit = function () {
      this.height = this.height + 26;
    };
  },
});
export default function showChart(parseData) {
  const labels = parseData.list.map(item => getFormatDate(item));
  const datasets = {
    temp: parseData.list.map(item => item.forecast[0].main.temp),
    humidity: parseData.list.map(item => item.forecast[0].main.humidity),
    windSpeed: parseData.list.map(item => item.forecast[0].wind.speed),
    pressure: parseData.list.map(item => item.forecast[0].main.pressure),
  };

  var myChart = new Chart(ctx, {
    type: 'line',
    smooth: false,
    data: {
      labels,
      datasets: [
        {
          label: `AVARAGE:             `,
          borderColor: ['rgba(0, 0, 0, 0)'],
        },
        {
          label: `   -   Temperature, C`,
          data: datasets.temp,
          borderColor: ['rgba(255, 140, 0, 1)'],
          pointBackgroundColor: 'rgba(255, 140, 0, 1)',
          elements: {
            point: {
              backgroundColor: 'rgba(255, 140, 0, 1)',
            },
          },
        },
        {
          hidden: true,
          label: `   -    Humidity, %`,
          data: datasets.humidity,
          borderColor: ['rgba(0, 0, 255, 1)'],
          pointBackgroundColor: 'rgba(0, 0, 255, 1)',
        },
        {
          hidden: true,
          label: `  -   Wind Speed, m/s`,
          data: datasets.windSpeed,
          borderColor: ['rgba(255, 255, 0, 1)'],
          pointBackgroundColor: 'rgba(255, 255, 0, 1)',
        },
        {
          hidden: true,
          label: '  -   Atmosphere Pressure, m/m',
          data: datasets.pressure,
          borderColor: ['rgba(0, 255, 0, 1)'],
          pointBackgroundColor: 'rgba(0, 255, 0, 1)',
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        onClick: newLegendClickHandler,
        display: true,
        position: 'top',
        align: 'start',
        labels: {
          padding: 20,
          boxWidth: 12,
          fontColor: 'rgba(255, 255, 255, 0.541)',
          defaultFontSize: 14,
          defaultFontFamily: 'Myriad Pro',
        },
      },
      elements: {
        line: {
          tension: 0,
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 12,
          bottom: 0,
        },
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              color: 'rgba(255, 255, 255, 0.541)',
            },
            scaleLabel: {
              display: true,
              labelString: 'Value of Indicators',
              fontSize: 14,
              fontColor: '#ffffff8a',
            },
            ticks: {
              padding: 20,
              fontSize: 14,
              fontColor: '#ffffff8a',
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: 'rgba(255, 255, 255, 0.541)',
            },
            ticks: {
              fontSize: 14,
              fontColor: '#ffffff8a',
            },
          },
        ],
      },
    },
  });
}
