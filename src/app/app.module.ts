import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ComboboxDirective } from './_directive/combobo.directive';
import { PlatoComponent } from './plato/plato.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsumoComponent } from './consumo/consumo.component';
import { PlatoListaComponent } from './plato/plato-lista/plato-lista.component';
import { PlatoDetalleComponent } from './plato/plato-detalle/plato-detalle.component';
import { PlatoEdicionComponent } from './plato/plato-edicion/plato-edicion.component';
import { PlatoInicioComponent } from './plato/plato-inicio/plato-inicio.component';

import{ FormsModule } from "@angular/forms";

import {DataTableModule} from "angular2-datatable";
import { PlatoService } from './_service/plato.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ComboboxDirective,
    PlatoComponent,
    ConsultaComponent,
    ConsumoComponent,
    PlatoListaComponent,
    PlatoDetalleComponent,
    PlatoEdicionComponent,
    PlatoInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTableModule
  ],
  providers: [PlatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
