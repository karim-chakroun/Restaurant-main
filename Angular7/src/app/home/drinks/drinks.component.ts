import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrinkService } from 'src/app/shared/drink.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class   DrinksComponent  implements OnInit {

  constructor(private router:Router,private service:DrinkService) { }
  drinkDetails;
  drinkbyid
  ngOnInit() {
    this.service.getDrinks().subscribe(
      res =>{
        this.drinkDetails = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
  onDelete(d) {
    this.service.deleteDrinks(d).subscribe(
      res =>{
        this.drinkDetails= res;
        location.reload();
        
      },
      err =>{
        console.log(err);
      }

    );
  }
  onSubmit(d){
    
    this.service.getDrinksById(d).subscribe(
    res =>{
      this.drinkbyid = res;
    },
    err =>{
      console.log(err);
    }
  

  );


}
s2;
onSubmit2(){
 
    
  


}

}

