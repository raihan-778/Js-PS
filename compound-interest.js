/* Compound interest = total amount of principal and interest in future (or future value) minus principal amount at present (or present value)
= [P (1 + i)^n] – P
= P [(1 + i)^n – 1]
Where:

P = principal
i = nominal annual interest rate in percentage terms
n = number of compounding periods
Take a three-year loan of $10,000 at an interest rate of 5% that compounds annually. What would be the amount of interest? In this case, it would be:

$10,000 [(1 + 0.05)3 – 1] = $10,000 [1.157625 – 1] = $1,576.25 */

/* Compound Interest Formula
Compound interest is calculated using the following formula −

CI = P*(1 + R/n) (nt) – P
Here,

P is the principal amount.
R is the annual interest rate.
t is the time the money is invested or borrowed for.
n is the number of times that interest is compounded per unit t, for example if interest is compounded monthly and t is in years then the value of n would be 12. If interest is compounded quarterly and t is in years then the value of n would be 4.
We are required to write a JavaScript function that takes in principal, rate, time, and the number n and calculates the compound interest.

Example
Let’s write the code for this function −

const principal = 2000;
const time = 5;
const rate = .08;
const n = 12;
const compoundInterest = (p, t, r, n) => {
   const amount = p * (Math.pow((1 + (r / n)), (n * t)));
   const interest = amount - p;
   return interest;
};
console.log(compoundInterest(principal, time, rate, n)); */
