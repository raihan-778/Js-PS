// প্রাকটিস প্রব্লেম- ৫ খানা

// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

/* function findSmallestNum(numbers) {
  smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];
    if (element < smallest) {
      smallest = element;
    }
  }
  return smallest;
}
const smallestNumbers = [45, 69, 39, 21, 54, 98, 32, 1];
let smallestNum = findSmallestNum(smallestNumbers);
console.log(smallestNum); */

// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।

/* function findSmallest(num1, num2, num3) {
  let smallOne = Math.min(num1, num2, num3);
  return smallOne;
}
let smallNumber = findSmallest(74, 25, 12);
console.log(smallNumber); */

// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।

/* function getAvgOfArray(numbers) {
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    element = numbers[index];
    sum = sum + element;
    avg = sum / numbers.length;
  }

  return avg;
}
let numbersArray = [784, 154, 124, 120, 68];
let avgValue = getAvgOfArray(numbersArray);
console.log(avgValue); */

// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।

/* function areaOfRectangle(length, height) {
  let area = length * height;
  return area;
}
let a = 45;
let b = 64;
let area = areaOfRectangle(a, b);
console.log(area); */

// ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।

function findSmallestNum(numbers) {
  let largest = numbers[0];
  let secondLargest = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];
    if (element > largest) {
      secondLargest = largest;
      largest = element;
    } else if (element > secondLargest && element !== largest) {
      element = secondLargest;
    }
  }
  return secondLargest;
}
let numbersArray = [45, 69, 39, 21, 54, 98, 32, 1];
let secondLargest = findSmallestNum(numbersArray);
console.log(secondLargest);
