
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrinkService } from 'src/app/shared/drink.service';

@Component({
  selector: 'app-ajouter-drink',
  templateUrl: './ajouter-drink.component.html',
  styleUrls: ['./ajouter-drink.component.css']
})
export class AjouterDrinkComponent implements OnInit {

  constructor(public service: DrinkService,private router:Router) { }
  mydrinks;
  ngOnInit() {

  }

  onSubmit() {
    this.service.PostDrinks().subscribe(
      (res: any) => {
        
          this.mydrinks = res;
          this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }

}

