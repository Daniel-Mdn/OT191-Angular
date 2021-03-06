import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { ResponseI } from '../../models/response.interface';
import { SlideI } from '../../models/slide.interface';
import { UserI } from '../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  editUser(form: UserI) {
    return of([])
  }
  url = "https://ongapi.alkemy.org/api/"
  constructor(private http:HttpClient) { }


  createUser(form:UserI):Observable<ResponseI>{
    let direccion= this.url + "users/create"
    return this.http.post<ResponseI>(direccion,form)
  }


  createSlide(form:SlideI):Observable<ResponseI>{
    let direccion= this.url + "slides/create"
    return this.http.post<ResponseI>(direccion,form)
  }

  editSlide(form:SlideI):Observable<ResponseI>{
    let direccion = this.url + "slides"
    return this.http.put<ResponseI>(direccion, form);
  }
}
