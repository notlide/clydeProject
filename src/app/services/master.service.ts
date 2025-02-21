import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../model/interface/roles.interface';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http : HttpClient) { }

  getAllDesignation(): Observable<IResponse>{
    return this.http.get<IResponse>("/api/ClientStrive/GetAllDesignation").pipe(
      catchError(error => {
      console.error("API Error",error);
      return throwError (() => new Error('Failed to fetch Designations.'));
  }));
  }
}
