///////////////////////////////////1///////////////
let obj=
{
    names:"lolla",
    age:22,
    adress:"aswan"


}
let handler={  //obj //name call //
    set(targat,prop,value)
    {
        if(prop==="names")
        {
            if(!isNaN (value))
            {
                throw ('this name is must be srting');
            }

            let min=1;
            let max=7;
            if (value <= max)
            {
                throw('name is must be have seven character')
            }
            obj[prop]=value;
        }

        if(prop==="adress")
        {
            if(!isNaN(value))
            {
                throw('the adress must be string')
            }
            obj[prop]=value;
        }
        if(prop==="age")
        {
            if(!isFinite(value))
            {
                throw("this age must be numbur")
            }
            let minn=25;
            let maxn=60;
            if(value>minn&&value>maxn)
            {
                throw('the age isnot range')
            }
            obj[prop]=value;
        }
    }

};
let employee =new Proxy(obj,handler)
employee.names="lo";
employee.age=10;
console.log(employee.names);
console.log(employee.age);




////////////////////////////////2////////////////////////////////////////
class shap
{
    constructor(lenght,width)
    {
        lenght;
         width;
        this.lenght=lenght;
        this.width=width;
    }
     area(lenght,width)
    {
      
    }
    parameter(lenght,width)
    {

    }
    display()
    {
        return `area=${this.area()} parameter=${this.parameter}`
    }
}

class rectangle extends shap
{
    lenght;
    width;
    constructor(lenght,width)
    {
        super()
    }
    area()
    {
        let sum=0;
        sum=this.lenght*this.width
        return sum;
    }
    parameter()
    {
        let sum=0;
        sum= 2*(this.lenght+this.width)
    
       return   sum;
    }
    tostring()
    {
        return `area=${this.area()} parameter=${this.parameter}`
    }

}
class square extends shap
{
    lenght;
    width;
    
    constructor(lenght,width)
    {
        super()
    }
    area()
    {
        let sum=0;
        sum=4*this.lenght 
        return sum;
    }
    parameter()
    {
        let sum=0;
        sum=this.lenght^2
      return  sum ;
    }
    tostring()
    {
        return `area=${this.area()} parameter=${this.parameter}`
    }

}
class circle extends shap
{
    constructor(x, y, radius)
    {
        super(x, y, radius);
        this.radius = radius
    }
    area()
    {
        let sum=0;
        sum=3.14 *radius*radius
        return sum 
    }
    parameter()
    {
        let sum=0;
        sum= 2*3.14*r
       return sum;
    }
    tostring()
    {
        return `area=${this.area()} parameter=${this.parameter}`
    }
}

let s = new shap(5,20);
console.log(s.area);
console.log(s.parameter);


let r =new rectangle(60,70);
console.log(r);



///////////////3/////////////////
function* Fibonacci (x)
{
    let numberone=0;
    let numbertwo=1;
    let nexst

    for(let i=0;i<=x;i++)
    {
        nexst=numberone+numbertwo;
        numberone=numbertwo;
        numbertwo=nexst;
        yield nexst

        i++
    }
}
///////////////////0112358
let f= Fibonacci(9)
for(let val of f)
{
   console.log(val)
}















/////////////////4/////////////////


let person =
{
   namess:"ali",
   ages:30,
   salary:5000,
   cours:["html","css","javascript"]

}



function iterator()
{
 let i=0;
 let key=Object.keys(this);
 let it=
 {
          next:function()
          {
              if(i<key.length)
              {
                  let res={value:`${keys[i]}= ${person[keys[i]]}`,done:false}
                  i++;
                  return res;
              }
              else{
                  return {
                      value:undefined,done:true
                  }
              }
             
          }

 } 
 return it;  
}
person[Symbol.iterator]=iterator 