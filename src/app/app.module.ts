import { Input, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { PrincipalModule } from './principal/principal.module';

//AQUI la const router
//e importas RouterModule.forRoot(router)

//home: /  y login /login
//act es con un menu sidebar
// const router={
//   path: '/cat'
// }

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // RouterModule.forRoot(router)
    PrincipalModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
