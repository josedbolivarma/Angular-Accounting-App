import { Injectable } from "@angular/core";
import { List, Lists } from "../models/lists.model";

export class AccountListService {
    // LISTS EXPENSES
    listsExpenses: Lists = [
        {
            name: "Computadora",
            ammount: 10
        },
        {
            name: "Oficina",
            ammount: 20
        },
    ];

    // LISTS INCOME
    listsIncome: Lists = [
        {
            name: "Despensa",
            ammount: 100
        },
        {
            name: "Computadora",
            ammount: 200
        },
        {
            name: "Oficina",
            ammount: 180
        },
        {
            name: "Despensa",
            ammount: 10
        },
    ];

    // ADD METHODS
    addToListExpenses(item: List) {
        this.listsExpenses.push(item)
    }

    addToListIncome(item: List) {
        this.listsIncome.push(item)
    }

    // DELETE METHODS

}