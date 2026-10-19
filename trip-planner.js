// ===== Trip Budget Planner =====
// Write your code under each task heading. Use console.log() to check your work.

// Task 1: Plan on paper (no code here)
// Order of calculation:
//   1. days = nights + 1 (food is needed on arrival and departure days too)
//   2. hotel: base (rate x nights) -> discount -> GST (order matters)
//   3. food = people x days x per-person-per-day
//   4. travel = people x per-person
//   5. total = hotel + food + travel
//   6. per person = total / people
//   7. savings = budget - per person


// Task 2: Store the trip data
const tripName = "Goa Getaway";
const travellers = 4;            // Task 9: change ONLY this number (4 -> 6)
const nights = 3;
const days = nights + 1;         // calculated, not typed
const hotelRate = 2000;          // per night, whole group
const foodPerPersonPerDay = 500;
const travelPerPerson = 1500;
const discountPercent = 10;      // percent
const gstRate = 0.12;            // fraction
const budgetPerFriend = 6000;
let total = 0;                   // keeps changing, so let


// Task 3: Helper functions
function hotelCost(rate, nights) {
  return rate * nights;
}
const foodCost = (people, days, perPersonPerDay) => people * days * perPersonPerDay;
const travelCost = (people, perPerson) => people * perPerson;
const applyDiscount = (amount, percent) => amount - (amount * percent) / 100;
const addGST = (amount, rate) => amount + amount * rate;


// Task 4: Combine the helpers
function finalHotelCost(rate, nights) {
  const base = hotelCost(rate, nights);
  const discounted = applyDiscount(base, discountPercent);
  return addGST(discounted, gstRate);
}
const costPerPerson = (total, people) => total / people;


// Task 5: Running total
const hotel = finalHotelCost(hotelRate, nights);
const food = foodCost(travellers, days, foodPerPersonPerDay);
const travel = travelCost(travellers, travelPerPerson);

total = total + hotel;
console.log("Total after hotel: " + total);
total = total + food;
console.log("Total after food: " + total);
total = total + travel;
console.log("Total after travel: " + total);

const perPerson = costPerPerson(total, travellers);
console.log("Per person: " + perPerson);


// Task 6: Show the results on the page
// a) trip name
document.getElementById("trip-name").textContent = "Trip: " + tripName;

// b) cost lines (same class -> collection, use index)
const costLines = document.getElementsByClassName("cost");
costLines[0].textContent = "Hotel: " + hotel;
costLines[1].textContent = "Food: " + food;
costLines[2].textContent = "Travel: " + travel;

// c) total and per person
document.getElementById("total").textContent = "Total: " + total;
document.getElementById("per-person").textContent = "Per person: " + perPerson;

// d) count the li items
console.log("Cost lines on page: " + document.getElementsByTagName("li").length);

// e) per-person line in green
document.querySelector("#per-person").style.color = "green";


// Task 7: Savings per person
const savings = budgetPerFriend - perPerson;
document.getElementById("savings").textContent = "Savings per person: " + savings;


// Task 8: Spot the bugs (write your answers as comments)
// Bug 1: hotelCost has no return, so it gives back undefined. Fix: write "return rate * nights;".
// Bug 2: addGST adds the rate itself (amount + rate) instead of a percentage. Fix: amount + amount * rate.
// Bug 3: runningTotal is declared with const, so it cannot be reassigned. Fix: declare it with let.
// Bug 4: lines is a collection, so lines.textContent does nothing useful. Fix: use lines[0].textContent.


// Task 9: Change one number
// Change `travellers` from 4 to 6 at the top (Task 2) and refresh.
// Everything updates because no trip number is typed inside any calculation.
// Expected with 6 travellers: total 27048, per person 4508.


// Bonus 1: Reverse thinking
const groupBudget = 26000;
const moneyLeft = groupBudget - total;                 // 5952 with 4 travellers
const extraPerNight = moneyLeft / nights;              // 1984 with 4 travellers
console.log("Money left after trip: " + moneyLeft);
console.log("Extra hotel spend possible per night: " + extraPerNight);
