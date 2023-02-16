//**************Chapter 14 to 16 (Array)**************//

//           Question 1

// var student =  new array("anas" ,"talha","hasan","owais","rafy" );


//           Question 2

// var names = ["anas","hasan","rafy","ayan","mustafa"]



//           Question 3

// var names = ["anas","hasan","rafy","ayan","faizan"]


//           Question 4

// var num1 = [1, 2, 3, 4, 5, 6]


//          Question 5

// var bolin = [true, false, true, false]


//          Question 6

// var mixArr = [1,"anas",true, 2 , "hasan", false]


//          Question 7

// var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.phil", "PHD"]
// document.write("<h1>Qualification</h1>")
// document.write("1)" + education[0] + "<br/>")
// document.write("2)" + education[1] + "<br/>")
// document.write("3)" + education[2] + "<br/>")
// document.write("4)" + education[3] + "<br/>")
// document.write("5)" + education[4] + "<br/>")
// document.write("6)" + education[5] + "<br/>")
// document.write("7)" + education[6] + "<br/>")
// document.write("8)" + education[7])


//          Question 8

// var student = ["micheal", "john", "tony"]
// var studentMarks = [320, 230, 480]
// var totalMarks = 500;
// var percentage1 = studentMarks[0] / totalMarks * 100;
// var percentage2 = studentMarks[1] / totalMarks * 100;
// var percentage3 = studentMarks[2] / totalMarks * 100;

// document.write("score of " + student[0] + " is " + studentMarks[0] + ". percentage " + percentage1 + "%" + "<br />")
// document.write("score of " + student[1] + " is " + studentMarks[1] + ". percentage " + percentage2 + "%" + "<br/>")
// document.write("score of " + student[2] + " is " + studentMarks[2] + ". percentage " + percentage3 + "%")


// //         Question 9
// var color = ["red", "yellow", "blue"]
// document.write("colors = " + color + "<br/>")

// //             (a)

// var colorstart = prompt("enter your first color")
// color.unshift(colorstart)
// document.write("colors = " + color + "<br/>")


// //             (b)

// var colorend = prompt("enter your last color")
// color.push(colorend)
// document.write("colors = " + color + "<br/>")


// //              (c)

// color.unshift("green", "gray")
// document.write("colors = " + color + "<br/>")
// //              (d)

// color.shift()
// document.write("colors = " + color + "<br/>")


// //              (e)

// color.pop()
// document.write("colors = " + color + "<br/>")

// //              (f)

// var num1 = +prompt("enter the index")
// var colorName = prompt("enter the color")
// color.splice(num1, 0, colorName)
// document.write("colors = " + color + "<br/>")

// //              (g)
// var num2 = +prompt("enter the index you delete")
// var num3 = +prompt("enter the number")
// color.splice(num2, num3)
// document.write("colors = " + color + "<br/>")


//                Question 10

// var studentScore = [320, 230, 480, 120]
// document.write(studentScore + "<br/>")

// studentScore.sort()
// document.write(studentScore)



//                Question 11

// var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
// document.write("<h1>Cities List</h1>")
// document.write(city + "<br/>")

// var citylist = [city[2], city[3]]
// document.write("<h1>Select Cities List</h1>")
// document.write(citylist)


//              Question 12
// var arr = ["This", "is ", "my", "cat"]
// document.write("<h1>Array :</h1>")
// document.write(arr)

// var joning = arr.join(" ")
// document.write("<h1>String :</h1>")
// document.write(joning)



//            Question 13

// var comp = ["keyboard", "Mouse", "printer", "Monitor"]
// document.write("<h1>Device</h1>")
// document.write(comp)


// var arr = comp.shift();
// document.write("<h1>Out :</h1>")
// document.write(arr)


// var arr = comp.shift();
// document.write("<h1>Out :</h1>")
// document.write(arr)


// var arr = comp.shift();
// document.write("<h1>Out :</h1>")
// document.write(arr)


// var arr = comp.shift();
// document.write("<h1>Out :</h1>")
// document.write(arr)


//                Question 14

// var comp = ["keyboard", "Mouse", "printer", "Monitor"]
// document.write("<h1>Device</h1>")
// document.write(comp)


// var arr = comp.pop();
// document.write("<h1>Out :</h1>")
// document.write(arr)


// var arr = comp.pop();
// document.write("<h1>Out :</h1>")
// document.write(arr)


// var arr = comp.pop();
// document.write("<h1>Out :</h1>")
// document.write(arr)


// var arr = comp.pop();
// document.write("<h1>Out :</h1>")
// document.write(arr)


//             Question 15

// var things = ["Apple", "samsung", "Motorola", "Nokia", "Sony", "Haier"]
// document.write("<h1>Seclect Your Mobile Company</h1>")
// document.write("<select>mobile")
// document.write("<option value disabled selected>Mobile Company</option>")
// document.write('<option value="apple">' + things[0] + "</option>")
// document.write('<option value="samsung">' + things[1] + "</option>")
// document.write('<option value="motorola">' + things[2] + "</option>")
// document.write('<option value="nokia">' + things[3] + "</option>")
// document.write('<option value="sony">' + things[4] + "</option>")
// document.write('<option value="haier">' + things[5] + "</option>")
// document.write("</select>")

// console.log()

//--------------------------------------------------END----------------------------------------------//


//**************Chapter 17 to 20 (Array and loop)**************//


//            Question 1
// var multi = [[], [], []]


//           Question 2

// var arry = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]
// console.log(arry)




//            Question 3
// document.write("<h1>Numeric Counting Mathod</h1>")
// for(var i= 0; i<=10;i++){
//     document.write(i+"<br/>")
// }


//           Question 4


// var num1 = prompt("Enter the table Number")
// var num2 = prompt("Enter the lengh Number")

// document.write("Multiply The Table of : " + num1)
// document.write("<br/> Lenght : " + num2+"<br/>")
// for (var i = 1; i <= num2; i++) {

//     document.write(num1 + "x" + i + "=" + num1 * i + "<br/>")
// }


//          Question 5

// var furit = ["Apple", "Banana", "Mango", "Orange", "Strawberry"]

// document.write("<h1>Furits Name</h1>")
// for (var i = 0; i < furit.length; i++) {
//     document.write(furit[i] + "<br/>")
// }

// document.write("<h1>Furits Length And Index</h1>")
// for (var i = 0; i < furit.length; i++) {
//     document.write("Element at index " + i + " is " + furit[i] + "<br/>")
// }


//          Question 6

// document.write("<h4>Counting :</h4>");
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

//              (b)
// document.write("<h4>Reverse counting :</h4>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

//               (c)
// document.write("<h4>Even :</h4>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");   
// }

//                (d)
// document.write("<h4>Odd :</h4>");
// for (var i = 1; i <= 19; i += 2) {
//     document.write(i + ", ");   
// }

//                (e)
// document.write("<h4>Series :</h4>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");   
// }



//            Question7

// var userInput = prompt("Welcome to Sweet Bakers.What do you want to orderd sir/ma'am?")
// var a = ["cake", "apple pie", "cookies", "chips", "patties"]

// document.write("<h1>Sweet Bakers</h1>")


// var flag = false;

// for (var i = 0; i < a.length; i++) {
//     if (userInput === a[i]) {
//         flag = true;
//         var indexNum = i;
//     }
// }

// if (flag) {
//     document.write(userInput + " is available at index " + indexNum+ " in our bakery")

// } else {
//     document.write("We are sorry. " + userInput + " is not available in our bakery")

// }



//           Question 8

// var a = [24, 53, 78, 91, 12]
// document.write("<b>Array items :</b>" + a + "<br/>")

// a.sort()
// var lengths = a.length - 1;
// document.write("<b>The largest number in this array :</b>" + a[lengths] + "<br/>")


//        Question 9


// var a = [24, 53, 78, 91, 12]
// document.write("<b>Array items :</b>" + a + "<br/>")

// a.sort()
// document.write("<b>The largest number in this array :</b>" + a[0] + "<br/>")


//          Question 10

// var result = 0; 
// for (var i = 1; i <= 20; i++) {
//     result = (i * 5);
//     console.log(result);
// }


//--------------------------------------------------END----------------------------------------------//
