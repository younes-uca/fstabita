import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ClientAdminService} from 'src/app/controller/service/admin/purchase/ClientAdmin.service';
import {ClientDto} from 'src/app/controller/model/purchase/Client.model';
import {ClientCriteria} from 'src/app/controller/criteria/purchase/ClientCriteria.model';

@Component({
  selector: 'app-client-view-admin',
  templateUrl: './client-view-admin.component.html'
})
export class ClientViewAdminComponent extends AbstractViewController<ClientDto, ClientCriteria, ClientAdminService> implements OnInit {


    constructor(private clientService: ClientAdminService){
        super(clientService);
    }

    ngOnInit(): void {
    }




}
