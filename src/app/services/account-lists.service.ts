import { List, Lists } from "../models/lists.model";

export class AccountListService {
    // LISTS EXPENSES
    listsExpenses: Lists = [
        {
            name: "Despensa",
            ammount: 900000
        },
        {
            name: "Computadora",
            ammount: 20000000
        },
        {
            name: "Oficina",
            ammount: 18000000
        },
    ];

    // LISTS INCOME
    listsIncome: Lists = [
        {
            name: "Despensa",
            ammount: 900000
        },
        {
            name: "Computadora",
            ammount: 20000000
        },
        {
            name: "Oficina",
            ammount: 18000000
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