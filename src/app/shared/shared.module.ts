import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import {MatDividerModule, MatToolbarModule, MatButtonModule, MatMenuModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

import { FlexLayoutModule, StyleUtils  } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
