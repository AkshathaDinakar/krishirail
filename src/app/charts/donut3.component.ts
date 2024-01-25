import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-donut3',
  template: `<canvas id="donutChart3" width="150" style="height:230px;width:230px"></canvas>`
})
export class Donut3Component implements OnInit {
  donutChart: any;

  ngOnInit() {
    this.createDonutChart();
  }

  createDonutChart() {
    const data = {
      labels: ['Green', 'Purple'],
      datasets: [{
        label: 'My Third Dataset',
        data: [150, 200],
        backgroundColor: [
          '#319795',
          '#4fd1c5'
        ],
        hoverOffset: 4
      }]
    };

    // Get the canvas element to render the chart
    const ctx = document.getElementById('donutChart3') as HTMLCanvasElement;

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
