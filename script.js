//1..Write a “person” class to hold all the details...?

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get toString(){
        return this.name + " is " + this.age + " years old.";
    }
}
var test=new Person("prabhu",25);
console.log(`i  am ${test.name}`); 
console.log(`my age is ${test.age}`);

// OUTPUT
// i  am prabhu
//  my age is 25

//2..write a class to calculate the uber price.

class uberprice{
    constructor(offerprice,kilometre,tax){
        this.offerprice=offerprice;
        this.kilometre=kilometre;
        this.tax=tax;
    }
}

var price = new uberprice("1000","10","200"); 

console.log(price);

//OUTPUT
// kilometre:"10"
// offerprice:"1000"
// tax:"200"

                      //DAY 7
  //1.Solving problems using array functions on the rest countries' data.
  //a.Get all the countries from the Asia continent /region using the Filter function
  var request = new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v3.1/all",true)
  request.send()
   request.onload=function(){
      var data = request.response
      var result = JSON.parse(data)
      var res=result.filter((ele)=>ele.region==='Asia').map((ele)=>ele.name);
    console.log(res);
 }

 //output
 //Array(50)

 //b.Get all the countries with a population of less than 2 lakhs using Filter function
 var request = new XMLHttpRequest();
 request.open("GET","https://restcountries.com/v3.1/all",true)
 request.send()
  request.onload=function(){
     var data = request.response
     var result = JSON.parse(data)
     var res1=result.filter((ele)=>ele.population<200000).map((ele)=>ele.name);
   console.log(res1);
  }

  //c.Print the following details name, capital, flag using forEach function
  var request = new XMLHttpRequest();
  request.open("GET","https://restcountries.com/v3.1/all",true)
  request.send()
   request.onload=function(){
      var data = request.response
      var result = JSON.parse(data)
      var arr_population=[]; 
      result.forEach(details => {
             console.log("Name:"+details.name+", Capital:"+details.capital+", Flag:"+details.flag);
      
             arr_population.push(details.population);
      });
      console.log(arr_population);
   }


   //d..Print the total population of countries using reduce function...????


   var request = new XMLHttpRequest();
   request.open("GET","https://restcountries.com/v3.1/all",true)
   request.send()
    request.onload=function(){
       var data = request.response
       var result = JSON.parse(data)
   var res2=result.reduce((acc,ele)=>acc+ele.population,0);
    
   console.log(res2);
    }


    //d..Print the country which uses US Dollars as currency..???


    var request = new XMLHttpRequest();
    request.open("GET","https://restcountries.com/v3.1/all",true)
    request.send()
     request.onload=function(){
        var data = request.response
        var result = JSON.parse(data)
        var res4=result.filter((ele)=>ele.currencies[0]['code']==='USD').map((ele)=>ele.name);
        console.log(res4);
     }