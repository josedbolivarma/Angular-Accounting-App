import { Injectable } from "@angular/core";
import { Lists } from "../models/lists.model";
import { AccountListService } from "./account-lists.service";

@Injectable({
    providedIn: 'root',
})
export class ResultsService {
    listsExpenses: Lists = [];
    listsIncome : Lists = [];
    
    resultsExpenses: number = 0;
    resultsIncome: number = 0;
    totalResult: number = 0;
    
    constructor( private accountListService: AccountListService) {}

    listsResultsExpenses() {
        this.listsExpenses = this.accountListService.listsExpenses;
        console.log(this.listsExpenses);
        const resultExpense = this.listsExpenses.reduce((acc: number, item: any ): number => {
           return item.ammount + acc;
        }, 0)

        this.resultsExpenses = resultExpense;
        this.totalResults();
    }

    listsResultsIncome() {
        this.listsIncome = this.accountListService.listsIncome;
        console.log(this.listsIncome);
        const resultIncome = this.listsIncome.reduce((acc: number, item: any): number => {
            return item.ammount + acc;
         }, 0)
 
         this.resultsIncome = resultIncome;
         this.totalResults();
    }

    totalResults() {
        this.totalResult = this.resultsIncome - this.resultsExpenses;
    };

}

