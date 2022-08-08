/*
১. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 
*/
//solution:

function feetToInch(feet) {
  let inch = feet * 12;
  return inch;
}
let totalInch = feetToInch(5);
console.log("your height is", totalInch, "inches");
/*
২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। */

function centimeterToMeter(centimeter) {
  let meters = centimeter / 100;
  return meters;
}
let totalMeters = centimeterToMeter(500);
console.log("Total will be", totalMeters, "meters");
/*
৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

এইবার ভালো করে খেয়াল করো। 

প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 

সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 

তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 

উত্তর হিসেবে সংখ্যা রিটার্ন করবে। */

//Solution
function paperRequirements(firstBook, secondBook, thirdBook) {
  let pagesNeedToPrintFirstBook = 100;
  let pagesNeedToPrintSecondBook = 200;
  let pagesNeedToPrintThirdBook = 300;

  let totalFirstBookPages = firstBook * pagesNeedToPrintFirstBook;
  let totalSecondBookPages = secondBook * pagesNeedToPrintSecondBook;
  let totalThirdBookPages = thirdBook * pagesNeedToPrintThirdBook;

  let grandTotal =
    totalFirstBookPages + totalSecondBookPages + totalThirdBookPages;

  return grandTotal;
}

let totalPages = paperRequirements(10, 5, 3);
console.log("You need total", totalPages, "Pages to print these books");

/*
৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। */
//Soulution
let friends = [
  "Asif",
  "Raihan",
  "Shiful",
  "Rony",
  "Kafil Uddin",
  "Abu Sayeed",
  "Sahanawaz Uddin Chowdhury",
];
function bestFriend() {
  let longName = friends[0].length;
  let bestFriend = friends[0];
  for (let i = 0; i < friends.length; i++) {
    let friend = friends[i].length;
    if (friend > longName) {
      bestFriend = friends[i];
      longName = friend;
    }
  }
  return bestFriend;
}
let ans = bestFriend(friends);
console.log("My best friends name is", ans);
/*
৫. এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

 */

let numbers = [45, 77, 55, 45, -11, 124, -88, 240];
let posetiveNum = [];
function posetiveNumbers() {
  for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number < 0) {
      break;
    }
    posetiveNum.push(number);
  }
  return posetiveNum;
}

let posetive = posetiveNumbers(numbers);
console.log(posetive);
