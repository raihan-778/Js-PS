// Question -01
//1. What is Javascript?
//ans:JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)JavaScript can update and change both HTML and CSS.JavaScript can calculate, manipulate and validate data.

//2.How does javascript works?
/*ans:The web browser loads a web page, parses the HTML, and creates what is known as a Document Object Model (DOM) from the contents. The DOM presents a live view of the web page to your JavaScript code.

 The browser will then grab everything linked to the HTML, like images and CSS files. The CSS information comes from the CSS parser.

The HTML and CSS are put together by the DOM to create the web page first. Then, the browsers' JavaScript engine loads JavaScript files and inline code but does not run the code immediately. It waits for the HTML and CSS to finish loading.

Once this is done, the JavaScript is executed in the order the code is written. This results in the DOM being updated by JavaScript code and rendered by the browser.

The order here is important. If the JavaScript did not wait for the HTML and CSS to finish, it would not be able to change the DOM elements. */

//3. What is variable?
/* ans:Variables are used to store information to be referenced and manipulated in a computer program. They also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves. It is helpful to think of variables as containers that hold information. Their sole purpose is to label and store data in memory. This data can then be used throughout your program. */
//4. How many types of variable in js?
/* ans: There are three types of variable in js. which are "var", "let","const"; */

//5. What are the premetive data types in js?
/* ans:Primitive values (immutable datum represented directly at the lowest level of the language)
primitive data types in javascript is given below:
Boolean type
Null type
Undefined type
Number type
BigInt type
String type
Symbol type */

//6.What is non primitive data types in js?
/*ans:1. Object: Object in Javascript is an entity having properties and methods. Everything is an object in javascript.
2. Array: With the help of an array, we can store more than one element under a single name.
 */

//7. How can we naming variabel in js?what kind of name is forbidden in js?
/* ans:1.variable can not start with number. desh "-" sign can not be use to declar variable name of multiple word.we can not use stock world of javascript as variable such as "for", "loop", "while" etc. The recommended use of multiple world variable in javascript is camal casing. the first letter of any world will be capital. such as javaScript, peopleName, primeNumber */
//problem-24:২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে।

/* var mySavings = 81000;
if (mySavings > 80000) {
  console.log("I will by this MacBook");
} else if (mySavings > 60000) {
  console.log("I will by a gaming Laptop");
} else if (mySavings > 40000) {
  console.log("I will by a lenovo Yoga");
} else if (mySavings > 20000) {
  console.log("I will by an old laptop");
} */

//আসকে আমার মন ভালো নেই -- এই কথা ৩৯ বার আউটপুট হিসেবে দেখাও।
/* var i = 0;
while (i < 39) {
  console.log(i);
  console.log("Aske amar mon valo nei");
  i++;
} */

// একটা কোড লিখে ৫৮ থেকে ৯৮ পর্যন্ত যত সংখ্যা আছে সেগুলাকে দেখাও
/* var i = 58;
while (i <= 98) {
  console.log(i);
  i++;
} */

//একটা কোড লিখে ৪১২ থেকে ৪৫৬ পর্যন্ত যত জোর সংখ্যা আছে সেগুলাকে দেখাও
/* var i = 412;
while (i <= 456) {
  console.log(i);
  i += 2;
} */

//একটা কোড লিখে ৫৮১ থেকে ৬২৩ পর্যন্ত যত বিজোড় সংখ্যা আছে সেগুলাকে দেখাও

/* for (var i = 581; i <= 623; i += 2) {
  console.log(i);
}
 */
//তুমি এতদিন যা যা জিনিস শিখছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা for লুপ দিয়ে সেই array এর সব উপাদান কে আউটপুট হিসেবে দেখাও।

/* var myLearning = [
  "what is javascript",
  "variable",
  "data type",
  "array",
  "for loop",
  "while loop",
  "condition",
  "String",
  "Boolean",
  "number",
  "Primitive Data",
  "Non Primitive Data",
  "Object",
];
for (var i = 0; i < myLearning.length; i++) {
  var learning = myLearning[i];
  console.log(i);
  console.log(learning);
} */
// একটা ফর লুপ চালাও। ৩০ থেকে ৮৬ পর্যন্ত। আর এই লুপ ৪৪ এ গেলে ব্রেক করবে। সেই জিনিস কোড করে দেখাও

/* for (var i = 30; i <= 86; i++) {
  if (i > 44) {
    break;
  }
  console.log(i);
} */

//তুমি এতদিন পর্যন্ত যে যে মডেলের মোবাইল ফোন ইউজ করেছো সেগুলার নাম দিয়ে একটা array বানাও। তারপর একটা while লুপ দিয়ে সেই array এর উপাদান গুলা একটা একটা করে আউটপুট হিসেবে দেখাও

/* var myPhones = [
  "Samsung",
  "Nokia",
  "iPhone",
  "Xiaomi",
  "Huawei",
  "HTC",
  "Realmi",
  "Dell",
  "Vivo",
];

var i = 0;
while (i < myPhones.length) {
  var myPhone = myPhones[i];
  console.log(myPhone);
  i++;
} */

//তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা।

var bookPrices = [75, 120, 150, 220, 360, 1000, 1500, 145, 165, 60, 210];
for (var i = 0; i < bookPrices.length; i++) {
  var book = bookPrices[i];
  if (book > 200) {
    continue;
  }
  console.log(book);
}
