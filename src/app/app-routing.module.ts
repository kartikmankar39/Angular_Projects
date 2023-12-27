import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmazonHomeComponent } from './components/amazon-home/amazon-home.component';
import { AmazonDetailsComponent } from './components/amazon-details/amazon-details.component';
import { AboutComponent } from './components/about/about.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AmazonMensComponent } from './components/amazon-mens/amazon-mens.component';
import { AmazonWomensComponent } from './components/amazon-womens/amazon-womens.component';
import { AmazonElectronicsComponent } from './components/amazon-electronics/amazon-electronics.component';
import { AmazonAdminComponent } from './components/amazon-admin/amazon-admin.component';
import { AmazonLoginComponent } from './components/amazon-login/amazon-login.component';
import { AmazonMoreDetailsComponent } from './components/amazon-more-details/amazon-more-details.component';
import { AuthGuardsService } from './auth/auth.guards.service';
import { AmazonJeweleryComponent } from './components/amazon-jewelery/amazon-jewelery.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path:'home',component:AmazonHomeComponent},
  {path:'about',component:AboutComponent},
  {path:'blogs',component:BlogsComponent},
  {path:'mens',component:AmazonMensComponent},
  {path:'womens',component:AmazonWomensComponent,},
  {path:'electronics',component:AmazonElectronicsComponent},
  {path:'admin',component:AmazonAdminComponent},
  {path:'login',component:AmazonLoginComponent},
  {path:'jewelery',component:AmazonJeweleryComponent},
  {path:'details/:id',component:AmazonDetailsComponent,
    children:[
      {path:'more/:productId',component:AmazonMoreDetailsComponent}
    ]
},
  //wildcards
  {path:'**',component:NotfoundComponent},
  //OR {path:'',component:AmazonHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
