import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  d:string=new Date().toLocaleTimeString();
   
  timeid=setInterval(()=>{
    this.d=new Date().toLocaleTimeString();
  },1000)

  isdisabled:boolean=true;

  isactive:boolean=true;
   
  applyC1:boolean=true;

  counter:number=0;

  increment(){
    this.counter+=1
  }

  decrement(){
    this.counter-=1;
  }



  name="any";

  changeName(e:any){
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.value)
    this.name=e.target.value
  }


  city=['hyderabad']



  updatecity(){
    this.city=["bangalore","amalapuram"]
  }

  show=true;

 



  movies=['RRR','pushpa','love today','pavan'];

  data=['p','a','v','a','n'];

  nums=  [1,2,3,4,5,6,7];

 mobiles=['Oneplus','Apple','Samsung', 'RealeMe'];

 namee='pavan'
 salary=27000

  



}
