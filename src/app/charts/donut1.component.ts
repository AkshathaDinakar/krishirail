import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-donut1',
  template: `<canvas id="donutChart" width="150" height="400"></canvas>`
})
export class Donut1Component implements OnInit {
  donutChart: any;

  ngOnInit() {
    this.createDonutChart();
  }

  createDonutChart() {
    const data = {
      labels: ['Red', 'green'],
      datasets: [{
        label: 'My First Dataset',
        data: [220,  160],
        backgroundColor: [
         
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };

    // Get the canvas element to render the chart
    const ctx = document.getElementById('donutChart') as HTMLCanvasElement;

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
