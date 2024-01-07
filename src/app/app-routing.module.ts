import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { MemoryComponent } from './memory/memory.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';

const routes: Routes =
 [
  {path: '', redirectTo: '/start', pathMatch: 'full'},
  {path: 'start', component: StartComponent },
  {path: 'memory', component: MemoryComponent},
  {path: 'multiple-choice', component: MultipleChoiceComponent}
 ] 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
