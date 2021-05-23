import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>('https://storage.googleapis.com/tfjs-tutorials/carsData.json')
  }

  public test(): string{
    return "DID THIS WORK?";

  }

}
