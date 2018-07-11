import { TagFormComponent } from './tag/tag-form/tag-form.component';
import { TagListComponent } from './tag/tag-list/tag-list.component';
import { DetailsComponent } from './tag/details/details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './bookmark/list/list.component';
import { ProfileComponent } from './profile/profile.component';
import { MultiNgModelComponent } from './multi-ng-model/multi-ng-model.component';

const routes: Routes = [
  {path: 'bookmarks', component: ListComponent},
  {path: 'tags', component: TagListComponent},
  {path: 'tag/create', component: TagFormComponent},
  {path: 'tag/:id', component: DetailsComponent},
  {path: 'tag/:id/edit', component: TagFormComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'multi-ng-model', component: MultiNgModelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
