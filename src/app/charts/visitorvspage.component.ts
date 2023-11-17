import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-visitorvspage',
  template: `<div >
  <canvas height="60" width="" id="visitor-page"></canvas>
</div>`
})
export class VisitorvspageComponent implements OnInit {
  ngOnInit() {
    this.createVisitorChart();
  }

  createVisitorChart() {
    const ctx = document.getElementById('visitor-page') as HTMLCanvasElement;
    const labels = [];
    const visitorData = [];
    const pageData = [];

    // Set an initial value for both datasets
    let visitorValue = 700;
    let pageValue = 550;

    for (let i = 0; i < 170; i += 1) {
      const date = new Date(2023, 0, 1);
      date.setDate(date.getDate() + i);
      const monthLabel = date.toLocaleDateString('en-US', { month: 'short' });
      const day = date.getDate();
      labels.push(monthLabel + ' ' + day);

      // Simulate fluctuations in "Visitor Data"
      visitorValue += (Math.random() - 0.5) * 100; // Small random changes

      // Simulate fluctuations in "Page Data"
      pageValue += (Math.random() - 0.5) * 50; // Smaller random changes

      visitorData.push(visitorValue);
      pageData.push(pageValue);
    }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Visitor Data',
            data: visitorData,
            fill: true,
            backgroundColor: 'rgba(215,219,225,.8)',
            borderColor: 'rgb(191,197,207,.5)',
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: 'Page Data',
            data: pageData,
            backgroundColor: 'rgba(191,197,207,0.6)',
            fill: true,
            borderColor: 'rgb(100,116,139)',
            borderWidth: 2,
            pointRadius: 0,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false, // Display the legend set to false to remove it
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        scales: {
          x: {
            display: false,
            beginAtZero: true,
          },
          y: {
            display: false,
            beginAtZero: true,
            
          },
        },
      },
    });
  }
}
