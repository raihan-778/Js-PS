// Compound Interest Formula
/* Compound interest is calculated using the following formula :

CI = P*(1 + R/n) (nt) – P
Here,

P is the principal amount.
R is the annual interest rate.
t is the time the money is invested or borrowed for.
n is the number of times that interest is compounded per unit t, for example if interest is compounded monthly and t is in years then the value of n would be 12. If interest is compounded quarterly and t is in years then the value of n would be 4.
We are required to write a JavaScript function that takes in principal, rate, time, and the number n and calculates the compound interest.

Example
Let’s write the code for this function − */

const principal = 50000;
const time = 1;
const rate = 0.08;
const n = 1;
const compoundInterest = (p, t, r, n) => {
  const amount = p * Math.pow(1 + r / n, n * t);
  const interest = amount - p;
  return interest;
};
console.log(compoundInterest(principal, time, rate, n));
