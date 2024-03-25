import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListReordenPageRoutingModule } from './list-reorden-routing.module';

import { ListReordenPage } from './list-reorden.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListReordenPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListReordenPage]
})
export class ListReordenPageModule {}
