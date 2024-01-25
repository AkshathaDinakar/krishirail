import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-gitissue2',
  template:`<div>
  <canvas id="myChart"></canvas>
</div>
`

})
export class GitissueComponent2 implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const ctx: CanvasRenderingContext2D = this.elementRef.nativeElement.querySelector('#myChart');
    const options = {
      scales: {
        x: {
          grid: {
            display: false, // Remove vertical lines
          },
        },
        y: {
          ticks: {
            stepSize: 9, // Set the step size for the y-axis
            suggestedMin: 0, // Set the minimum value
            suggestedMax: 45, // Set the maximum value
          },
        },
      },
      plugins: {
        legend: {
          display: false, // Hide the legend label
        },
        tooltip: {
          callbacks: {
            label: function (context: any) {
              // Show both "Closed Issue" and "New Issue" in the tooltip when hovered
              return context.dataset.label + ': ' + context.parsed.y;
            },
          },
        },
      },
    };

    const mixedChart = new Chart(ctx, {
      type: 'bar',
      data: {
        datasets: [
         
          {
            type: 'line',
            label: 'New Issue',
            data: [10, 22, 60, 50, 48, 68, 80],
            borderColor: '#f59e0c', // Change line color to gray
          },
        ],
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
      },
      options: {
        ...options,
        plugins: {
          ...options.plugins,
          tooltip: {
            ...options.plugins.tooltip,
            callbacks: {
              ...options.plugins.tooltip.callbacks,
              label: function (context: any) {
                const value = context.parsed.y;
                return value; // Display the value at every point
              },
            },
          },
        },
      },
    });
  }
}
