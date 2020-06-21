// // Chap 21-25
//  ques no1

 var first="Kashaf"
 var last="Zehra"
 var fullName=first+" "+last
 alert(fullName)


// // ques no2

 var mob=prompt("Your favourite Mobile")
 var b=mob.length;
 document.write("My favourite phone is:"+" "+b)

// ques no3
var country="Pakistan"
var b=country.length
document.write("<br>"+"String:"+country+"<br>"+"Index of 'n':"+country.indexOf('n'))


// // ques no4
var x="Hello World"
var b=x.length
document.write("<br>"+"String:"+x+"<br>"+"Index of 'l':"+x.lastIndexOf(('l')))
// ques no5
var country1="Pakistan"
var b=country.length
document.write("<br>"+"String:"+country+"<br>"+"Index of 'i':"+country.indexOf('i'))

// // ques no6

var str="Syeda"
str2=str.concat("Kashaf").concat("Zehra")

alert(str2)

// // ques no7

var a="Hyderabad"
var b=a.replace("Hydera","Islama")
document.write("<br>"+"City:"+a+"<br>"+"After replacement:"+b)


// // ques no8
var message = "Ali and Sami are best friends. They play cricket and football together."
var b=message.replace("and","&")
var b=message.replace(/and/gi,"&")

document.write("<br>"+message+"<br>"+b)

// // ques no9

var intstr="472"
var num=Number(intstr)
var intstr1=472
var num1=intstr1.toString()

document.write("<br>"+"Value:"+intstr+"<br>"+"Type:"+typeof(num)+"<br>"+"Value:"+intstr1+"<br>"+"Type:"+typeof(num1))

// // ques no10
var a=prompt("Some text")
var b=a.toLocaleUpperCase()
document.write("<br>"+"User Input:"+a+"<br>"+"Upper Case:"+b)

// ques no11
var a=prompt("Course")
var firstchar=a.slice(0,1)
var otherchars=a.slice(1)
firstchar=firstchar.toUpperCase()
otherchars=otherchars.toLocaleLowerCase()

var a=firstchar+otherchars;
console.log(a)

// ques no12
// var ints= 35.36 ;
//  var num2=ints.toString()
//  document.write("<br>"+"Number:"+ints+"<br>"+"Result:"+num2)
 num = 35.36;
num = num.toString();
newNum = num.split('.').join("");
document.write("Number: "+num);
document.write("<br>");
document.write("Result: "+newNum);


// ques no13
var username=prompt("Username")
// var textLength = username.length;

 for(i=0; i<username.length; i++)
 {
    var code=username.charCodeAt(i)

if(code===33 || code===44 || code===46 || code===64){
    // if( username[i]==="@"  || username[i]==="!"  || username[i]===","  || username[i]==="."  ){
   alert("Invalid username");
   
  } 
  else{
  alert("correct")
  break;
}
 }

// ques no14
 var A = ["cake","apple pie","cookie","chips","patties"] 
 var B=prompt("Welcome to ABC Bakery!What do you want to order sir/maam?")
  B=B.toLowerCase()

 if(A.indexOf(B) !==-1){
   alert(B +" is available at index"+A.indexOf(B)+"in our bakery");
 }
else{
  alert("we are sorry. "+B+" is not available  in our bakery")
 }
// ques no15

var password, message;
var whileCounter = 0;
var CFAL = false;
while (whileCounter != 1) {
    password = prompt("Enter Password");
    if (password.length <= 5) {
        alert("Must be 6 or more characters long");
    }
    else {
        if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
            alert("Number not allowed in start");
        }
        else {
            for (var i = 0; i <= password.length-1; i++) {
                if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57) {
                    CFAL = true;
                    whileCounter = 1;
                    break;
                }
                else {
                    continue;
                }
            }
            if (CFAL == true) {
                whileCounter = 1;
                message = "Password is OK.";
            }
            else {
                whileCounter = 0;
                message = "Invalid Password!\nYou must enter both lettes and numbers in your password.";
            }
            alert(message);
        }
    }
}

// ques no 16

var university="University Of Karachi"
var a=university.split(" ");
for(var i=0; i<university.length; i++)
document.write("<br>"+university[i])


// ques no 17

var a=prompt("Country")
var b= a.charAt(7)
 document.write("<br>"+"User Input:"+a+"<br>"+"Last character of input:"+b)

//  ques no18
function count(main_str, sub_str) 
    {
    main_str += '';
    sub_str += '';
    if (sub_str.length <= 0) 
    {
        return main_str.length + 1;
    }
       subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
       return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
    }
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
// chap26-30
// ques no1
var posint=prompt("Enter no")
var a=Math.round(posint)
var b=Math.floor(posint)
var c=Math.ceil(posint)

 document.write("<br>"+"number:"+posint+"<br>"+"Round off:"+a+"<br>"+"floor:"+b+"<br>"+"ceil:"+c)
// ques no 2

var nfloat=prompt("Enter no")
var a=Math.round(nfloat)
var b=Math.floor(nfloat)
var c=Math.ceil(nfloat)
document.write("<br>"+"number:"+nfloat+"<br>"+"Round off:"+a+"<br>"+"floor:"+b+"<br>"+"ceil:"+c)

// ques no3
var n=-3;
var n1=12;
var a=Math.abs(n)
var b=Math.abs(n1)
document.write("<br>"+"The absolute value of:"+n+"is"+a+"<br>"+"The absolute value of:"+n1+"is"+b)

// ques no4

var diceRoll = Math.floor( Math.random() * 6 ) +1;
var diceRoll1 = Math.floor( Math.random() * 6 ) +1;

alert('You rolled a ' + diceRoll);
alert('You rolled a ' + diceRoll1);

// ques no5
var a=prompt("Num1")
var b=Math.random()*2+1;
var c=Math.floor(b)

if (b<a){
document.write("<br>"+a+"<br>"+"random value :Head")
}
else{
document.write("<br>"+a+"<br>"+"random value :Tails")
}
// ques n06
var a=Math.random() *100+1;
var b=Math.floor(a)
document.write("<br>"+"random value between 1 and 100:"+b)

// ques no 7
  // var a=parseFloat(prompt("Enter Your Weight in kg?"))
  //  var b=a.slice(0,1);
  // document.write("<br>"+"the weight of user is"+b+"kilogram")


  // ques no8

 

    var a = Math.floor(Math.random() * 10) + 1;
    alert(a)
    var b=+prompt("num")
      if(a==b){
        alert("Congratulation")
       }
         else{
          alert("wrong")
         }
// chap 31-34
// ques no1 
var a=new Date();
a.toString()
console.log(a)

//  ques no2
var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
var d = new Date();
var n=months[d.getMonth()]
document.write("<br>"+"Current Month:"+n)


// ques no3
var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[d.getDay()];
document.write("<br>"+n.substring(0, 3))


// ques no4
var dayName=["Sunday","Monday","Tuesday","Wednesday","Thursday" , "Friday","Saturday"]
var date=new Date 
var a=date.getDay();
if(dayName[a]==="Sunday" || dayName[a]==="Saturday"){
  alert("Its Fun day")
}
else{
  alert("Its Working Day")
}
// ques no5
var d = new Date();
var date=d.getDate();
if (date<16){
 alert("First fifteen days of the month")

}
else{
     alert("Last days of the month")

}
// ques no6

var a=new Date("Dec 05,2015,22:32:23");
var b=a.getTime();
var x=a/(1000*60*60);


document.write("<br>"+a+"<br>"+"Elapsed miliseconds January 1,1970:"+b+"<br>"+"Elapsed minutes January 1,1970:"+x)



// ques no7


var a = new Date();
var hour = a.getHours();
if(hour<=12) {
alert("It's AM");
}
else {
alert("It's PM");
}


// ques no8
 var a=new Date("Dec 31,2020");
 var laterDate=a.getDate();
 document.write("<br>"+"laterDate:"+a)

 //  ques no9


var past_date=new Date("May 23,2020 ");
var current_date = new Date();
  var diff=current_date-past_date;
  var dDiff = diff / (1000 * 3600 * 24)
  var a=Math.floor(dDiff)

document.write("<br>"+"<br>"+a+"days have passed since 1st Ramadan ,2020")


// QUES NO10
var a=new Date("Dec 05,2015,22:50:16")

var date1=new Date();

 var c=a-date1;
 var aDiff=diff/(1000 )
 document.write("<br>"+"on reference date"+a+"<br>"+aDiff+"seconds had passed since beginning of 2020")

// ques no11
var a=new Date();
var b=(a.getHours()-1)
document.write("<br>"+"current time:"+a+"<br>"+"1 hour ago,it was"+b)

// ques no12

var a=new Date();
var b=(a.getFullYear()-100)
document.write("<br>"+"current time:"+a+"<br>"+"100 years back ,it was"+b)

// ques no13

var a=new Date();
var x=a.getFullYear();
var b=prompt("age");
var c=x-b;
document.write("<br>"+"Your age is:"+b+"<br>"+"Your Birth year is:"+c)

// ques no14
var customer_name="Aliya Fayaz"
var billof_month="February"
var Nou=410;
var Cpu=16;
var netAmount=410*16;
var Late_payment=350;
var GrossAmount=netAmount+350;

document.write("<br>"+"Customer name:"+customer_name+"<br>"+"Month:"+billof_month+"<br>"+"Number per unit:"+Nou+"<br>"+"Charge per unit:"+Cpu+"<br>"+"Net Amount(with Due Date):"+netAmount+"<br>"+"Late Payment surcharges:"+Late_payment+"<br>"+"Gross Aount Payable(after Due Date):"+GrossAmount)


// chap 35-38
// ques no1

function datefunc(){
           a=new Date();

console.log(a)
}

// ques n02

function name(){
  
  Firstname="Kashaf";
   Lastname="Zehra";
}
name()
    document.write("<br>"+"Welcome"+Firstname+Lastname)

// ques no3
function sum(a,b){
     return a+b;
}
console.log(sum(2,6))

// ques no4

function cal(num1,opr,num2){
if(opr==="-"){
  return num1-num2;
}
else if(opr==="+"){
  return num1+num2;

}
else if(opr==="*"){
  return num1*num2;

}
else if(opr==="/"){
  return num1/num2;

}else{
  return "invalid operator";
}
}
var result=cal(7,"-",7)
var  result1=cal(9,"*",2)
var result2=cal(8,"/",4)
var result3=cal(5,"$",9)
console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)


// ques no5
function sqr(){
    a=Math.sqrt(9)
}
sqr()
console.log(a)
// ques no6

function factorialize(num) {
  return num;
}
document.write("<br>"+factorialize(10));
// console.log(factorialize(num))

// ques no7
function start(){
  var a=2;
  var b=10
  for(var i=2; i<=10; i++){
    console.log(i)
}
}
start()

// ques no8

function pythagorean(sideA, sideB){
  x = Math.sqrt(sideA * sideA + sideB * sideB);
  document.write("<br>"+x)
}
pythagorean(4, 3);


// que no9
function area(a,b){
  var area=a*b;
  return area;
}
var h=prompt("insert height")
var w=prompt("insert weight")
var result=area (h,w)
document.write("<br>"+"Area is"+result)
// ques no10
var word=prompt("Enter your word")
var check="";
for(var i=word.length -1; i>=0; i--){
  check+= word[i]
}
console.log(word)
if(word===check)
{
  console.log(word+ "is palindrome word")
}
else{
  console.log(word+ "is not palindrome word")

}
// ques no11
function titleCase(str) {
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}

document.write("<br>"+titleCase(" the quick brown fox"))

// ques no12


function findLongestWord(str) {
  const stringArray = str.split(" ");
  const longestWord = stringArray.reduce((a, b) => {
    if(b.length > a.length) {
      return b;
    } else {
      return a;
    }
  });
  return longestWord;
}
document.write("<br>"+findLongestWord(" Web Development Tutorial"));

// ques no no13
function char_count(str, letter) 
{
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) 
  {
     if (str.charAt(position) == letter) 
       {
       letter_Count += 1;
       }
   }
   return letter_Count;
 }
 console.log(char_count('JSResourceS.com','o'));
 

// ques no14
function calcCircumference(radius) {
  var circumference = 2*Math.PI*radius;
   console.log("The circumference is " + circumference);
  var area = Math.PI * radius*radius;
  console.log("The area is " + area);
}
 calcCircumference(8);
 
