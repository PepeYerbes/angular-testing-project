import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  Texto: text [] = DataText;

  constructor(private http: HttpClient) {
    console.log('TaskService initialized');
  }

}
