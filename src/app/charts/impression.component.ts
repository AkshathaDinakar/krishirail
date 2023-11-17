import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-impression',
  template: `<canvas id="myChart-2" height="50" width="" ></canvas>
  `
})
export class ImpressionComponent  implements OnInit, AfterViewInit {
  chart: any;

  ngOnInit(): void {
    const labels = [' ', ' ', ' ', ' ', ' ', ' ', ' ']; // Your custom labels
    const data = {
      labels: labels,
      datasets: [{
        data: [ 50, 49,30, 39, 30, 29, 69,0], // Your custom data values
        fill: true, // Fill the area under the line
        borderColor: 'rgb(52,211,153)', // Set line color to red
        backgroundColor: 'rgb(193,241,224)', // Set fill color to light red with opacity
        tension: 0.5,
        pointRadius: 0 // Set the point radius to 0 to hide data points
      }]
    };

    this.createChart(labels, data);
  }

  ngAfterViewInit(): void {
    this.chart.update();
  }

  createChart(labels: string[], data: any): void {
    const ctx2: any = document.getElementById('myChart-2'); // Use getElementById to target the specific canvas
    if (ctx2) {
      this.chart = new Chart(ctx2, {
        type: 'line',
        data: data,
        options: {
          plugins: {
            legend: {
              display: false // Hide legend
            },
            tooltip: {
              enabled: false // Disable tooltip
            }
          },
          scales: {
            x: {
              display: false,
              type: 'category',
              labels: labels,
              grid: {
                display: false // Remove horizontal grid lines
              }
            },
            y: {
              display: false, // Hide Y-axis labels
              grid: {
                display: false // Remove vertical grid lines
              }
            }
          }
        }
      });
    }
  }
}
