import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/classes/client';
import { IResponse } from '../model/interface/roles.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  public getAllClients(): Observable<IResponse> {
    return this.http.get<IResponse>('/api/ClientStrive/GetAllClients');
  }
  public getAllEmployee(): Observable<IResponse> {
    return this.http.get<IResponse>('/api/ClientStrive/GetAllEmployee');
  }
  public addClient(data: Client): Observable<IResponse> {
    return this.http.post<IResponse>('/api/ClientStrive/AddUpdateClient', data);
  }
  public addClientProjectUpdate(data: Client): Observable<IResponse> {
    return this.http.post<IResponse>(
      '/api/ClientStrive/AddUpdateClientProject',
      data
    );
  }
  public deleteClient(id: number): Observable<IResponse> {
    return this.http.delete<IResponse>(
      '/api/ClientStrive/DeleteClientByClientId?clientId=' + id
    );
  }
}
