import { Component } from '@angular/core';
import { ResultsService } from './services/results-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  resultExpense: number = 0;
  resultIncome: number = 0;
  totalResult: number = 0;

  constructor(
    private resultsService: ResultsService
  ) { 


  }

  ngOnInit(): void {
    this.resultsService.listsResultsExpenses();
    this.resultsService.listsResultsIncome();
    this.resultExpense = this.resultsService.resultsExpenses;
    this.resultIncome = this.resultsService.resultsIncome;
    this.totalResult = this.resultsService.totalResult;
  }

  
  procesaPropagar(event: any) {
    this.resultsService.listsResultsExpenses();
    this.resultsService.listsResultsIncome();
    this.resultExpense = this.resultsService.resultsExpenses;
    this.resultIncome = this.resultsService.resultsIncome;
    this.totalResult = this.resultsService.totalResult;
  }

}
