import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { IResponse, IRole } from '../../model/interface/roles.interface';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit{

  public allRoles : IRole [] = [];

  public http = inject(HttpClient);

  ngOnInit(): void {
    this.getAllRoles();
  }

  public getAllRoles() {
    this.http.get<IResponse>("/api/ClientStrive/GetAllRoles").subscribe((res:IResponse) => {
      this.allRoles = res.data;
    });
  }
}
