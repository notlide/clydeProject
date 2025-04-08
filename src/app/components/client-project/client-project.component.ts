import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Client } from '../../model/classes/client';
import { IProject, IResponse } from '../../model/interface/roles.interface';
import { DatePipe } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, DatePipe, ButtonComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('', [Validators.required]),
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

  projectList = signal<IProject[]>([]);

  ngOnInit(): void {
    this.fetchAllEmployee();
    this.fetchAllClient();
    this.fetchAllProject();
  }

  fetchAllEmployee(): void {
    this.clientService.getAllEmployee().subscribe((res: IResponse) => {
      debugger;
      this.employeeObj = res.data;
    });
  }

  fetchAllProject(): void {
    this.clientService.getAllProject().subscribe((res: IResponse) => {
      debugger;
      this.projectList.set(res.data);
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
