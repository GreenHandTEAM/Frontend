import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMaterialComponent } from './components/add-material/add-material.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ListMaterialComponent } from './components/list-material/list-material.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { authInterceptorProviders } from './helpers/auth.interceptor';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMaterialComponent,
    LoginComponent,
    AddProductComponent,
    ListMaterialComponent,
    IndexComponent,
    ControlPanelComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgSelectModule,
    FontAwesomeModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
