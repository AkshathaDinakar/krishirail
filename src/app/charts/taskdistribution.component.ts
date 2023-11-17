import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';

// Register the required components (polarArea chart)
Chart.register(...registerables);

@Component({
  selector: 'app-taskdistribution',
  template: `<div class=" mt-5 w-96 polar-area-chart-container">
  <canvas id="myPolarAreaChart"></canvas>
</div>
`
})
export class TaskdistributionComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const ctx: CanvasRenderingContext2D = this.elementRef.nativeElement.querySelector('#myPolarAreaChart');

    const data = {
      labels: ['API', 'Backend', 'Frontend', 'Issues'],
      datasets: [
        {
          label: 'Task Distribution',
          data: [15, 20, 38, 27],
          backgroundColor: [
            'rgba(202,237,264, .5)', 
            'rgba(188,209,231, .5)', 
            'rgba(175,190,208, .5)', 
            'rgba(155,167,178, .5)', 
          ],
          borderColor: [
            'rgba(147,197,253, .8)', 
            'rgba(119,160,206, .8)', 
            'rgba(92,123,158, .8)', 
            'rgba(58,80,100, .8)', 
          ],
          borderWidth: 2, // Border width
          hoverOffset: 4, // Add some shadow on hover
        },
      ],
    };

    const options = {
      scales: {
        r: {
          min: 0,
          max: 40,
          ticks: {
            stepSize: 8, // Step size for the radial axis
            callback: function (value: any) {
              return value; // Display exact values on the radial axis
            },
          },
        },
      },
      plugins: {
        legend: {
          display: true, // Display the legend
          position: 'bottom', // Legend position
        },
      },
    };

    const config: any = {
      type: 'polarArea',
      data: data,
      options: options,
    };

    new Chart(ctx, config);
  }
}
