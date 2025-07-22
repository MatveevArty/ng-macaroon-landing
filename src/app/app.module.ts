import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { ProductService } from "./services/product.service";
import { ProductComponent } from './components/product/product.component';
import { AdvantageComponent } from './components/advantage/advantage.component';
import { AdvantageService } from "./services/advantage.service";
import { TextLengthPipe } from './pipes/text-length.pipe';
import { PhonePrettyPipe } from './pipes/phone-pretty.pipe';
import { SexyButtonDirective } from './directives/sexy-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AdvantageComponent,
    TextLengthPipe,
    PhonePrettyPipe,
    SexyButtonDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductService, AdvantageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
