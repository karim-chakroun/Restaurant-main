import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44319/api';

  getDrinks(){
    
    return this.http.get(this.BaseURI+ '/drinks');
  }
  formModel = this.fb.group({
    Nom: [''],
    Prix: [''],
    Image: [''],
    Description: [''],
  });
  PostDrinks() {
    
    var body = {
      nom: this.formModel.value.Nom,    
      description:this.formModel.value.Description,
     
      image:this.formModel.value.Image
    
    };
    return this.http.post(this.BaseURI + '/drinks', body);
  }

  deleteDrinks(id){
    
    return this.http.delete(this.BaseURI+ '/drinks/' + id);
  }

  editDrinks(d){
    var body = {
      id : d,
      nom: this.formModel.value.Nom,    
      description:this.formModel.value.Description,
      prix:this.formModel.value.Prix,
      image:this.formModel.value.Image
    
    };
    
    return this.http.put(this.BaseURI + '/drinks/' + d, body);
  }
  getDrinksById(id){
    
    return this.http.get(this.BaseURI+ '/drinks/' + id);
  }

  

  
  
  

}
