import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComboboxDirective } from './_directive/combobo.directive';
import { PlatoComponent } from './plato/plato.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsumoComponent } from './consumo/consumo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ComboboxDirective,
    PlatoComponent,
    ConsultaComponent,
    ConsumoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
