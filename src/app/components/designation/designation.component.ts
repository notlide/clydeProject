import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IDesignation, IResponse } from '../../model/interface/roles.interface';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{

  masterService = inject(MasterService)
  designationList : IDesignation[] = [];

  isLoading : boolean = true;

  ngOnInit(): void {
    this.masterService.getAllDesignation().subscribe((res:IResponse)=> {
      this.designationList = res.data
      this.isLoading = false;
    });
  }

}
