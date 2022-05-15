import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {

@Input()
resultExpense: number;
@Input()
resultIncome: number;
@Input()
totalResult: number;

}
