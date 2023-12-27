import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmazonIndexComponent } from './components/amazon-index/amazon-index.component';
import { AmazonHomeComponent } from './components/amazon-home/amazon-home.component';
import { AboutComponent } from './components/about/about.component';
import { AmazonAdminComponent } from './components/amazon-admin/amazon-admin.component';
import{HttpClientModule}from'@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AmazonElectronicsComponent } from './components/amazon-electronics/amazon-electronics.component';
import { AmazonJeweleryComponent } from './components/amazon-jewelery/amazon-jewelery.component';
import { AmazonLoginComponent } from './components/amazon-login/amazon-login.component';
import { AmazonMensComponent } from './components/amazon-mens/amazon-mens.component';
import { AmazonMoreDetailsComponent } from './components/amazon-more-details/amazon-more-details.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AmazonWomensComponent } from './components/amazon-womens/amazon-womens.component';
import { AmazonDetailsComponent } from './components/amazon-details/amazon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AmazonIndexComponent,
    AmazonHomeComponent,
    AboutComponent,
    AboutComponent,
    AmazonAdminComponent,
    AmazonDetailsComponent,
    AmazonElectronicsComponent,
    AmazonJeweleryComponent,
    AmazonLoginComponent,
    AmazonMensComponent,
    AmazonMoreDetailsComponent,
    BlogsComponent,
    NotfoundComponent,
    AmazonWomensComponent,
    AmazonDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AmazonIndexComponent]
})
export class AppModule { }
