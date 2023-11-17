import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-acc-balance',
  template: `<div>
    <canvas  id="acc-balance-chart"></canvas>
  </div>`
})
export class AccBalanceComponent implements OnInit {
  ngOnInit() {
    this.createAccBalanceChart();
  }

  createAccBalanceChart() {
    const ctx = document.getElementById('acc-balance-chart') as HTMLCanvasElement;
    const labels = [];
    const visitorData = [];
    const accBalanceData = [];

    // Set an initial value for both datasets
    let visitorValue = 700;
    let accBalanceValue = 1000;

    for (let i = 0; i < 170; i += 1) {
      const date = new Date(2023, 0, 1);
      date.setDate(date.getDate() + i);
      const monthLabel = date.toLocaleDateString('en-US', { month: 'short' });
      const day = date.getDate();
      labels.push(monthLabel + ' ' + day);

      // Simulate fluctuations in "Visitor Data"
      visitorValue += (Math.random() - 0.5) * 100; // Small random changes

      // Simulate fluctuations in "Acc Balance Data"
      accBalanceValue += (Math.random() - 0.5) * 50; // Smaller random changes

      visitorData.push(visitorValue);
      accBalanceData.push(accBalanceValue);
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
            backgroundColor: 'rgb(202,221,253)', // Front color
            borderColor: 'rgb(109,132,235)',
            
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: 'Acc Balance Data',
            data: accBalanceData,
            backgroundColor: 'rgb(230,236,253)', // Lighter color
            borderColor: 'rgb(163,191,250)',
            fill: true,
            borderWidth: 2,
            pointRadius: 0,
          },
        ],
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
