import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/classes/client';
import { IResponse } from '../../model/interface/roles.interface';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl(''),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(''),
  });

  clientService = inject(ClientService);
  employeeObj: any[] = [];
  clientObj: Client[] = [];

  ngOnInit(): void {
    this.fetchAllEmployee();
    this.fetchAllClient();
  }

  fetchAllEmployee(): void {
    this.clientService.getAllEmployee().subscribe((res: IResponse) => {
      debugger;
      this.employeeObj = res.data;
    });
  }

  onSaveProject(): void {
    const formValue = this.projectForm.value;
    debugger;
    this.clientService
      .addClientProjectUpdate(formValue)
      .subscribe((res: IResponse) => {
        if (res.result) {
          alert('Project successfully Added');
        } else {
          res.message;
        }
      });
  }

  fetchAllClient(): void {
    this.clientService.getAllClients().subscribe((res: IResponse) => {
      debugger;
      this.clientObj = res.data;
    });
  }
}
