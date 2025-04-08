import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/classes/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { IResponse } from '../../model/interface/roles.interface';

@Component({
  selector: 'app-client',
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
    this.fetchClient();
  }

  fetchClient(): void {
    this.clientService.getAllClients().subscribe((res: IResponse) => {
      this.clientList = res.data;
    });
  }

  postClient(): void {
    this.clientService.addClient(this.clientObj).subscribe((res: IResponse) => {
      if (res.result) {
        alert('Client successfully Added');
        this.fetchClient();
        this.clientObj = new Client();
      } else {
        res.message;
      }
    });
  }

  deleteClient(id: number): void {
    const isDelete = confirm('Are you sure you want to delete this? ');
    if (isDelete) {
      this.clientService.deleteClient(id).subscribe((res: IResponse) => {
        debugger;
        if (res.result) {
          alert('Client successfully Deleted');
          this.fetchClient();
        } else {
          res.message;
        }
      });
    }
  }

  onEdit(data: Client): void {
    this.clientObj = data;
  }
}
