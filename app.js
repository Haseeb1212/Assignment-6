// chapter 25 
// task 1

// var firstname=prompt("Enter first name:")
// var Lastname=prompt("Enter Name name:")
// var fullname=firstname+Lastname;
// document.write("Hello "+ fullname+ "<br>")

// task 2
// var mobile_Name=prompt("Enter Favourite Mobile Name")
// document.write("My Favourite mobile is: "+ mobile_Name+ "<br>")

//     document.write("Length of string: "+ mobile_Name.length + "<br>")

// task 3
// var a="Pakistani"
// document.write("string:" + a+ "<br>")
// document.write("index of 'n' is :"+ a.indexOf('n')+"<br>")

// task 4

// var a="Hello World"
// var lastchar=a.charAt(a.length-1)

// document.write("string:" + a+ "<br>")
//  document.write("index of 'l' is :"+lastchar +"<br>")

// task 5

// var a="Pakistani"
//  var thirdchar=a.charAt(a.length-6)

// document.write("string:" + a+ "<br>")
//  document.write("Character at index 3 is :"+ thirdchar+"<br>")

// task 6
// var firstname=prompt("Enter first name:")
// var Lastname=prompt("Enter Name name:")
// var a=firstname.concat(Lastname)
// document.write("Hello "+ a+ "<br>")

// task 7
// var city="Hyderabad"
// var a= city.replace("Hyder","Islam")
// document.write("City:"+city+"<br>")
// document.write("After replacement:"+a+"<br>")

// task 8

// var text="Ali and Sami are best friends. They play cricket and football together";
// var a= text.replace(/and/g, "&");

//  document.write("message:"+text+"<br>")
//  document.write("After replacement:"+a+"<br>")


// task 9
// var a ="472"
// document.write("Value: "+a +"<br>")
// document.write("type:string"+"<br>")
// document.write("Value: "+ +a +"<br>")
// document.write("type:number"+"<br>")

// task 10

// var text="peanuts"
// var a=text.toUpperCase()
// document.write("Value: "+text +"<br>")
//  document.write("Change: "+a +"<br>")

// task 11

// var user="javascript"
// document.write("User input:"+user +"<br>")

// var temp=user.slice(0,1)
// var other=user.slice(1)
// other=other.toLowerCase()
// temp=temp.toUpperCase()
// user=temp+other
// document.write("Title Case:"+user +"<br>")

// task 12
//  var num="33.56";
//  num=num.split(".")
//  document.write(num)

// task 13

// var username=prompt("Enter your user name ")
// if(username===33||username===44||username===46||username===64)
// {
// alert("page says")

// }
// else{
// document.write(username)
// }

// task 14

// var A=["apple pie","cake","cookie","chips"]
// var search=prompt("Welcome to ABC bakery.What do you want to order\n Sir/ma'am")

// var search1=search.toLowerCase();

// if(search1===A.length){
//     document.write(search1+" is at index "+ +A.indexOf() +"in our bakery")
// }
// else {
//     document.write("We are sorry "+search1+" is not available in our bakery")

// }
























// chapter 26-30

// task 1
// var number=+prompt("Enter the positive number")
// document.write("Number:"+number+"<br>")
// number=Math.round(number)
// document.write("Round off value:"+number+"<br>")
// number=Math.floor(number)
// document.write("floor value:"+number+"<br>")
// number=Math.ceil(number+1)
// document.write("ceil value:"+number+"<br>")

// task 2
// var number=+prompt("Enter the negative number ")
// document.write("Number:"+number+"<br>")
// number=Math.round(number)
// document.write("Round off value:"+number+"<br>")
// number=Math.floor(number)
// document.write("floor value:"+number+"<br>")
// number=Math.ceil(number+1)
// document.write("ceil value:"+number+"<br>")


// task 3

// var number=+prompt("Enter the  number ")
// var a=Math.abs(number)
// document.write("The absolute value of:  "+number+ "  is  "+a+"<br>")


// task 4
// var number = Math.random();
//  var improvedNum = (number * 6) + 1;
//  var numberOfStars = Math.floor(improvedNum);
// document.write("random dice value is: "+numberOfStars)

// task 5
// var number = Math.random();
//  var improvedNum = (number * 2) + 1;
//  var numberOfStars = Math.floor(improvedNum);
//  document.write(numberOfStars+"<br>")
// if(numberOfStars===1){
//     document.write("random coin value:Tails")
// }
// else{
//     document.write("random coin value:Heads")

// }

// task 6

// var number = Math.random();
//  var improvedNum = (number * 100) + 1;
//  var numberOfStars = Math.floor(improvedNum);
//  document.write("random number between 1 and 100 is :"+numberOfStars+"<br>")


// task 7
// task a
// var weight=+prompt("Enter your weight in kilograms")
// document.write("The weight of user is :"+weight)
// task b,c,d
// var weight=prompt("Enter your weight in kilograms")
//  document.write("The weight of user is :"+weight)

// task 8

// var number = Math.random();
//  var improvedNum = (number * 10) + 1;
//  var numberOfStars = Math.floor(improvedNum);

//  var num=+prompt("Enter secret number")
//  document.write("guess the number between 1 and 10 :"+"<br>")

//  if(numberOfStars==num){
//      alert("You guess the right number")
//  }
//  else{
//      alert("Try Again!")
//  }


// chapter 31 to34
// tassk 1
// var rightnow=new Date();
// document.write(rightnow)

// task 2
// var arr=["january","febuary","march","April","May","june","july","August","september","october","november","december"]
// var rightnow=new Date();
// var monthstring=rightnow.getMonth();
// var month=arr[monthstring]
// document.write("Current Month:"+month)

// task 3
// var arr=["sun","mon","tue","wed","thu","fri","sat"]
// var rightnow=new Date();
// var daystring=rightnow.getDay();
// var day=arr[daystring]
// document.write("Today is "+day)

// task 4
//  var arr=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
// var rightnow=new Date();
// var daystring=rightnow.getDay();
// var day=arr[daystring]
// if(day===arr[0]||day===arr[6])
// {
// document.write("it's fun day ")  
// }
// else{
// document.write("it's not a fun day ")  

// }

// task 5
// var arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
// var rightnow=new Date();
// var date=rightnow.getDate();
// var d=arr[date]
// if(d<=16){
// document.write("First fifteen days of month")
// }
// else{
//     document.write("last days of month")
// }

// task 6

// var rightnow=new Date();
// document.write(rightnow+"<br>")
// var date=rightnow.getDate()
// var mili=rightnow.getTime()
// var min=mili/60*100;
// document.write("Elasped milisecond since january 1,1970 "+":"+mili+"<br>")
// document.write("Elasped minutes since january 1,1970 "+":"+min+"<br>")


// task 7
// var today=new Date();
// var hour=today.getHours();
// if(hour<12){
//     document.write("It's AM")
// }
// else{
//     document.write("It's PM")

// }


// task 8

//  var today=new Date("Thu Dec 31 2020 00:00:00 GMT+0500 (PKT)");
// var laterDate=today;
// document.write("Later date:"+laterDate)

// task 9
// var today1=new Date()
// var today=new Date("mon jun 8,2020 00:00:00 GMT+0500 (PKT)")
// var dayPass=today1.getDate()-today.getDate();
// document.write(dayPass+" days have passed since 1st Ramadan,2020")

// task 10
// var today1=new Date()
// var today=new Date("sun jul 5,2020 22:00:00 GMT+0500 (PKT)")
// var sec=today.getSeconds()+today1.getSeconds();
// document.write("On reference "+today+" ,"+"<br>")
// document.write(sec+" ,Had passed since 2020  "+"<br>")
// remaining
// task 11

// task 12

// task 13

// var user=+prompt("Enter your age")

// var today=new Date();
// var birthYear=today.getFullYear()-user;
// document.write("your age is: "+user+"<br>")
// document.write("your birth year is: "+birthYear)

// task 14
// var date=new Date();
// document.write("<h1>K-Electric Bill</h1>")
// var customerName=prompt("Enter your Name")
// document.write("Customer Name:"+customerName+"<br>")
// var month=prompt("Enter your month Name")
// document.write("Current Month:"+month+"<br>")
// var numberOfUnits=+prompt("Enter your  Units")
// document.write("Number of Units:"+numberOfUnits+"<br>")
// var charges=+prompt("Charges of Units")
// document.write("Charges Per unit:"+charges+"<br>")

// var netAmount=numberOfUnits*charges;
// document.write("Net Amount Payable (within Due Date):"+netAmount+"<br>")
// var lateAmount=+prompt("late payment charges")
// document.write("Late Payment Surcharge:"+lateAmount+"<br>")
// var grossAmount=netAmount+lateAmount;
// document.write("Gross Amount Payable (after Due Date) :"+grossAmount)



// chapter 35-38

// task 1

// function currentTime()
// {
//     var time=new Date();
//     document.write(time)
// }
// currentTime();

// task 2
// function greet(firstName,lastName){
//     document.write("Assalamoalikum "+firstName+" "+lastName)
// }
// greet("Haseeb","Ahmed")

// task 3
// function sumOfTwoNumber(x,y)
// {
//     document.write("The sum of two number is :"+(x+y));

// }
// sumOfTwoNumber(6,8)

// task 4

// function calculator(num1,num2,operator)
// {
//     var sum;
//   if (operator==="+")
//     {
//      sum=num1+num2;
//    return(document.write("The desired output is:"+sum));
//     }
//     else if(operator==="-")
//     {
//         sum=num1-num2;
//         return( document.write("The desired output is:"+sum));

//     }
//     else if(operator==="*")
//     {
//         sum=num1*num2;
//        return( document.write("The desired output is:"+sum));

//     }
//     else if(operator==="/")
//     {
//         sum=num1/num2;
//       return(document.write("The desired output is:"+sum));

//     }
//     else if(operator==="%")
//     {
//         sum=num1%num2;
//        return(document.write("The desired output is:"+sum));
//     }
//     else{
//         return(null);
//     }
   
// }
// calculator(8,4,'+')

// task 5

// function square(num){
//     return(document.write("The square of given number is :"+ num*num))
// }
// square(10);


// task 6

// function fact(number)
// {
//     var a=1;
//     for(var i=1;i<=number;i++){
//        a=a*i;

//     }
//     return(document.write(a))

// }
// fact(5)

// task 7

// function counting(start,last){
//     var a;
//     for(a=start;a<=last;a++)
//     {
//     document.write(a+"<br>")
//     }
//     a++;
//     return(0)
// }
// counting(2,20)

// task 8

// function calcHypotenous()
// {
//     function calcSquare( base ,perp)
//     {
//  var b=Math.pow(base,2)
//  var p=Math.pow(perp,2)

//     }  
//     var hypo=Math.sqrt((b+p));
//     document.write("Answer is:"+hypo)

    
// }
// calcHypotenous()
// calcSquare(4,3)
// task 9
// function areaOfRectangle(w,h){
//     var a=w*h;
// return(document.write(a))
// }
// areaOfRectangle(4,5)

// function areaOfRectangle(){
//    var w=6,h=8;
//     var a=w*h;
// return(document.write(a))
// }
// areaOfRectangle()

// task 10

// function palindrome(str)
// {
//     var temp="";
//     for(var i=str.length-1;i>=0;i--)
//     {
//        temp+=str[i];
//     }
//     if(str===temp)
//     {
//         document.write( str+"The word is palindrome")
//     }

// }
//  palindrome("civic")

// task 11

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write(uppercase("the quick brown fox"));

// task 12
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));

// task 13
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('letsconnect.com', 'o'));

// task 14
// function calcGeometry(radius) {
//     var circumference = Math.PI * 2*radius;
//     console.log("The circumference is " + circumference);
//     var area = Math.PI * radius*radius;
//     console.log("The area is " + area);
//   }