//teste
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtefatoComponent } from './artefato/artefato.component';
import { CustomPaginator } from './artefato/lista-artefato/CustomPaginatorConfiguration';
import { ListaArtefatoComponent } from './artefato/lista-artefato/lista-artefato.component';
import { AtivoFinanceiroComponent } from './ativo-financeiro/ativo-financeiro.component';
import { ListaAtivoFinanceiroComponent } from './ativo-financeiro/lista-ativo-financeiro/lista-ativo-financeiro.component';
import { BicicletaComponent } from './bicicleta/bicicleta.component';
import { ListaBicicletaComponent } from './bicicleta/lista-bicicleta/lista-bicicleta.component';
import { DispositivosMoveisComponent } from './dispositivos-moveis/dispositivos-moveis.component';
import {
  ListaDispositivosMoveisComponent,
} from './dispositivos-moveis/lista-dispositivos-moveis/lista-dispositivos-moveis.component';
import { IndexPageComponent } from './index-page/index-page.component';
import { ListaOutrosComponent } from './outros/lista-outros/lista-outros.component';
import { OutrosComponent } from './outros/outros.component';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    ArtefatoComponent,
    AtivoFinanceiroComponent,
    BicicletaComponent,
    OutrosComponent,
    DispositivosMoveisComponent,
    IndexPageComponent,
    ListaBicicletaComponent,
    ListaArtefatoComponent,
    ListaAtivoFinanceiroComponent,
    ListaDispositivosMoveisComponent,
    ListaOutrosComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatExpansionModule,
    HttpClientModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatDialogModule,
    CurrencyMaskModule

  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
