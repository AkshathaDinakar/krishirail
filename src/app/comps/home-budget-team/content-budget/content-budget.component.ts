import { Component } from '@angular/core';

@Component({
  selector: 'app-content-budget',
  templateUrl: './content-budget.component.html',
  styleUrls: ['./content-budget.component.css']
})
export class ContentBudgetComponent {
  budgetDetails = [
    { bg:'bg-red-500',svg:'bg-red-200 h-1',color:'bg-blue-500', type: 'Concept', totalBudget: 14880.00, expensesUSD: 14000.00, expensesPercent: 94.08, remainingUSD: 880.00, remainingPercent: 5.92 },
    { bg:'bg-red-500',svg:'bg-red-200 h-2',color:'bg-red-500', type: 'Design', totalBudget: 21080.00, expensesUSD: 17240.34, expensesPercent: 81.78, remainingUSD: 3839.66, remainingPercent: 18.22 },
    { bg:'bg-green-500',svg:'bg-green-500 h-4',color:'bg-green-500', type: 'Development', totalBudget: 34720.00, expensesUSD: 3518.00, expensesPercent: 10.13, remainingUSD: 31202.00, remainingPercent: 89.87 },
    { bg:'bg-green-500',svg:'bg-green-500 h-4',color:'bg-orange-500', type: 'Extras', totalBudget: 18600.00, expensesUSD: 0.00, expensesPercent: 0.0, remainingUSD: 18600.00, remainingPercent: 100.0 },
    { bg:'bg-orange-500',svg:'bg-orange-200 h-3',color:'bg-purple-500', type: 'Marketing', totalBudget: 34720.00, expensesUSD: 19859.84, expensesPercent: 57.2, remainingUSD: 14860.16, remainingPercent: 42.8 }
  ];

}
