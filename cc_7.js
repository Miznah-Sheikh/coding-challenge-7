// Task 1 - Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
}

// Task 2 - Employee Hourly Wage Calculation
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};

// Task 3 - Customer Loyalty Discount
const calculateLoyaltyDiscount = (amount, years) => {
    let discount = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let discountedPrice = amount - (amount * discount);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};

// Task 4 - Product Shipping Cost Calculation
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight);
    if (expedited) baseCost += 10;
    return `Shipping Cost: $${baseCost.toFixed(2)}`;
}

// Task 5 - Business Loan Interest Calculation
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}

// Task 6 - Filtering High-Value Transactions
let transactions = [500, 1200, 3000, 800, 2200];
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}

// Task 7 - Budget Tracker
function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance -= expense;
        return `Current Balance: -$${Math.abs(balance)}`;
    };
}

// Task 8 - Business Growth Projection
function calculateGrowth(years, revenue) {
    if (years === 10) return `Projected Revenue: $${revenue.toFixed(2)}`;
    return calculateGrowth(years + 1, revenue * 1.05);
}

// Exporting for testing
console.log(calculateInvoice(100, 0.08, 5));
console.log(calculateHourlyWage(52000, 40));
console.log(calculateLoyaltyDiscount(100, 6));
console.log(calculateShippingCost(10, "USA", true));
console.log(calculateLoanInterest(1000, 0.05, 3));
console.log(filterHighValueTransactions(transactions, amount => amount > 1000));
let budget = createBudgetTracker();
console.log(budget(300));
console.log(budget(200));
console.log(calculateGrowth(8, 1000));
