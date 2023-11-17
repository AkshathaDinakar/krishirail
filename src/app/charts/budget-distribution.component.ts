import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-budget-distribution',
  template: `<div class="chart-container  ">
  <canvas id="myChart" width="400" height="400"></canvas>
</div>
`})
export class BudgetDistributionComponent implements AfterViewInit {
  chart: any;

  ngAfterViewInit() {
    // Wrap chart creation in ngAfterViewInit
    setTimeout(() => {
      this.createChart();
    }, 0);
  }

  createChart() {
    const data = {
      labels: [
        'Concept',
        'Design',
        'Development',
        'Extras',
        'Marketing',
      ],
      datasets: [
        {
          label: 'Dataset',
          data: [12, 20, 28, 15, 25],
          fill: true,
          backgroundColor: 'rgba(173, 216, 230, 0.5)', // Light blue background color
          borderColor: 'rgb(129,140,248)', // Blue line color
          pointBackgroundColor: 'rgb(129,140,248)', // Blue point color
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(0, 0, 255)'
        }
      ]
    };

    const config: any = {
      type: 'radar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        },
        scale: {
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 48,
            stepSize: 6,
            callback: (value: number) => {
              return value + '%'; // Format tick labels as percentages
            },
          }
        },
        plugins: {
          legend: {
            display: false // Hide the legend label on top of the graph
          }
        }
      }
    };

    // Create the chart
    this.chart = new Chart('myChart', config);
  }
}
