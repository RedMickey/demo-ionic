import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ParentComonentComponent } from './parent-test-component/parent-test-component.component';
import { ChildTestComponentComponent } from './parent-test-component/child-test-component/child-test-component.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [
    Tab1Page,
    ParentComonentComponent,
    ChildTestComponentComponent
  ]
})
export class Tab1PageModule {}
