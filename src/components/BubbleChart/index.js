import React, { Component } from 'react';
import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts-more'
import HighchartsReact from 'highcharts-react-official'
import BubbleChartOptions from './BubbleChartOptions'
import humanizeString from 'humanize-string'
HighchartsMore(Highcharts);

const BUBBLE_COLORS = {
  moving: "#7cb5ec",
  house: "#434348",
  medical: "#90ed7d",
  vacation: "#f7a35c",
  debt_consolidation: "#8085e9",
  credit_card: "#f15c80",
  small_business: "#e4d354",
  major_purchase: "#2b908f",
  home_improvement: "#f45b5b",
  car: "#91e8e1"
};

class BubbleChart extends Component {
  componentDidUpdate() {
    const series = Highcharts.charts[0].series[0];
    const data = this.props.loanData.map( (row) => ({
      x: row.avg_income,
      y: row.avg_loan,
      z: row.count,
      color: BUBBLE_COLORS[row.purpose],
      name: humanizeString(row.purpose)
    }) );
    series.setData(data)
  }

  render() {
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          options={BubbleChartOptions}
        />
      </div>
    );
  }
}

export default BubbleChart;
