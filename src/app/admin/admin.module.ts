import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdministracaoComponent } from './pages/administracao/administracao.component';
import { MatIconModule } from '@angular/material/icon';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdministracaoComponent,
    LoginAdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule, 
    MaterialModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
