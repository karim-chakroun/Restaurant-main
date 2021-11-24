import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PlatsService } from 'src/app/shared/plats.service';

@Component({
  selector: 'app-show-plats',
  templateUrl: './show-plats.component.html',
  styleUrls: ['./show-plats.component.css']
})
export class ShowPlatsComponent implements OnInit {
platId:string
plat:any
  constructor(public service:PlatsService,
    @Inject(MAT_DIALOG_DATA) private data: any,) { 
    
  }

  ngOnInit() {
   this.platId=this.data.platId;
   this.getPlatById()
  }

  getPlatById(){
    this.service.getPlatsById(this.platId).subscribe(
      res =>{
        console.log(res)
        this.plat = res;
      },
      err =>{
        console.log(err);
      }   
    );
  }

  
  

}
