import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-donut2',
  template: `<canvas id="donutChart2" width="150" style="height:230px;width:230px"></canvas>`
})
export class Donut2Component implements OnInit {
  donutChart: any;

  ngOnInit() {
    this.createDonutChart();
  }

  createDonutChart() {
    const data = {
      labels: ['Blue', 'Yellow'],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 100],
        backgroundColor: [
          '#3182ce',
          '#62b3ed'
        ],
        hoverOffset: 4
      }]
    };

    // Get the canvas element to render the chart
    const ctx = document.getElementById('donutChart2') as HTMLCanvasElement;

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
