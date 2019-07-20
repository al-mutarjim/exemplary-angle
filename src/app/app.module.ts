import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdcTypographyModule } from '@angular-mdc/web';
import { MaterialModule} from './material.module';
import { MdcCardModule } from '@angular-mdc/web';
import { AppRoutingModule, ROUTING_DECLARATIONS } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnagnorisisComponent } from './anagnorisis/anagnorisis.component';

@NgModule({
  declarations: [
    AppComponent,
    ROUTING_DECLARATIONS,
    AnagnorisisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdcTypographyModule,
    MaterialModule,
    MdcCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
