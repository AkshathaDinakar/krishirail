import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-donut2',
  template: `<canvas id="donutChart2" width="150"></canvas>`
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
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
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
