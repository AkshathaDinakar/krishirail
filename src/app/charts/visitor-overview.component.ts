import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-visitor-overview',
  template: `<div >
  <canvas height="60" width="" id="visitor-chart"></canvas>
</div>`
})
export class VisitorOverviewComponent implements OnInit {
  ngOnInit() {
    this.createVisitorChart();
  }

  createVisitorChart() {
    const ctx = document.getElementById('visitor-chart') as HTMLCanvasElement;
    const labels = [];
    const visitorData = [];
    let price = 1000; // Initial price

    for (let i = 0; i < 365; i += 1) {
      const date = new Date(2023, 0, 1);
      date.setDate(date.getDate() + i);
      const monthLabel = date.toLocaleDateString('en-US', { month: 'short' });
      const day = date.getDate();
      labels.push(monthLabel + ' ' + day);

      // Simulate stock price fluctuations
      const randomChange = (Math.random() - 0.5) * 20; // Adjust the amplitude as needed
      price += randomChange;
      price = Math.max(500, price); // Ensure the price doesn't go below 500
      visitorData.push(price);
    }

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Stock Price',
          data: visitorData,
          fill: true,
          backgroundColor: 'rgb(58,65,93)',
          borderColor: 'rgb(129,140,248)',
          borderWidth: 2,
          pointRadius: 0,
          tension: 0,
        }],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            mode: 'index',
            intersect: false,
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            display: false,
          },
          y: {
            display: false,
            beginAtZero: false,
          },
        },
      },
    });
  }
}
