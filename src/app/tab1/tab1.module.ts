import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { TestComonentComponent } from './test-comonent/test-comonent.component';
import { TestChildComponentComponent } from './test-comonent/test-child-component/test-child-component.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [
    Tab1Page,
    TestComonentComponent,
    TestChildComponentComponent
  ]
})
export class Tab1PageModule {}
