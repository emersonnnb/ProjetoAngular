import { IndexPageComponent } from './index-page/index-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtefatoComponent } from './artefato/artefato.component';
import { AtivoFinanceiroComponent } from './ativo-financeiro/ativo-financeiro.component';
import { BicicletaComponent } from './bicicleta/bicicleta.component';
import { DispositivosMoveisComponent } from './dispositivos-moveis/dispositivos-moveis.component';
import { OutrosComponent } from './outros/outros.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'artefatos', component: ArtefatoComponent },
  { path: 'financeiros', component: AtivoFinanceiroComponent },
  { path: 'bicicletas', component: BicicletaComponent },
  { path: 'dispositivos', component: DispositivosMoveisComponent },
  { path: 'outros', component: OutrosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
