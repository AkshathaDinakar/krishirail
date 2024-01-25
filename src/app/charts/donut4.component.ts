import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-donut4',
  template: `<canvas id="donutChart4" width="150" style="height:230px;width:230px"></canvas>`
})
export class Donut4Component implements OnInit {
  donutChart: any;

  ngOnInit() {
    this.createDonutChart();
  }

  createDonutChart() {
    const data = {
      labels: ['Orange', 'Pink'],
      datasets: [{
        label: 'My Fourth Dataset',
        data: [80, 120],
        backgroundColor: [
          '#b794f4',
          '#805ad5'
        ],
        hoverOffset: 4
      }]
    };

    // Get the canvas element to render the chart
    const ctx = document.getElementById('donutChart4') as HTMLCanvasElement;

    this.donutChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        cutout: '70%', // Set the cutout to 70%
        plugins: {
          legend: {
            display: false // Remove the legend
          }
        }
      }
    });
  }
}
