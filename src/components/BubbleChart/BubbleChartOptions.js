const BubbleChartOptions = {
  chart: {
    type: 'bubble',
    plotBorderWidth: 1,
    zoomType: 'xy'
  },

  legend: {
    enabled: false
  },

  title: {
    text: 'Loan details per state'
  },

  subtitle: {
    text: 'Source: <a href="https://www.lendingclub.com/info/download-data.action/">Lending Club</a>'
  },

  xAxis: {
    gridLineWidth: 1,
    title: {
      text: 'Income'
    },
    labels: {
      format: '{value}'
    },
    plotLines: [{
      color: 'black',
      dashStyle: 'dot',
      width: 2,
      value: 65,
      label: {
        rotation: 0,
        y: 15,
        style: {
          fontStyle: 'italic'
        },
        text: 'Safe fat intake 65g/day'
      },
      zIndex: 3
    }]
  },

  yAxis: {
    startOnTick: false,
    endOnTick: false,
    title: {
      text: 'Loan Amount'
    },
    labels: {
      format: '{value}'
    },
    maxPadding: 0.2,
  },

  tooltip: {
    useHTML: true,
    headerFormat: '<p>',
    pointFormat: '<b>{point.z} loans</b>',
    footerFormat: '</table>',
    followPointer: true
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }
  },

  series: [{}]

};

export default BubbleChartOptions