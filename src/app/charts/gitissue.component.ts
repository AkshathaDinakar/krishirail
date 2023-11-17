import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-gitissue',
  template:`<div>
  <canvas id="myChart"></canvas>
</div>
`

})
export class GitissueComponent implements AfterViewInit {
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
            type: 'bar',
            label: 'Closed Issues',
            data: [11, 10, 8, 11, 8, 10, 17],
            backgroundColor: 'rgb(164,177,195)', // Change bar color to gray
            barPercentage: 0.6, // Set the width of the bars to 50% (60px)
          },
          {
            type: 'line',
            label: 'New Issue',
            data: [42, 28, 43, 34, 20, 25, 22],
            borderColor: 'rgb(115,129,150)', // Change line color to gray
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
