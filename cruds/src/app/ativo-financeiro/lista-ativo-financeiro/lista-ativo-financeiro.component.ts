import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';
import { AtivoFinanceiroComponent } from '../ativo-financeiro.component';


@Component({
  selector: 'app-lista-ativo-financeiro',
  templateUrl: './lista-ativo-financeiro.component.html',
  styleUrls: ['./lista-ativo-financeiro.component.scss']
})
export class ListaAtivoFinanceiroComponent implements OnInit {

  displayedColumns: string[] = ['situacao', 'classe', 'tipo', 'quantidade', 'unidadedeMedida', 'valorEstimado', 'moeda', 'proprietarioTitular', 'proprietarioCotitular', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllFinanceiros();
  }

  openFinanceiro() {
    this.dialog.open(AtivoFinanceiroComponent, {
      width: '100%'
    }).afterClosed().subscribe(val => {
      if (val == 'Salvar') {
        this.getAllFinanceiros();
      }
    })
  }

  getAllFinanceiros() {
    this.api.getFinanceiro()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error: (err) => {
          alert("Erro ao listar Financeiro!")
        }
      })
  }

  editFinanceiros(row: any) {
    this.dialog.open(AtivoFinanceiroComponent, {
      width: '100%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val == 'Atualizar') {
        this.getAllFinanceiros();
      }
    })
  }

  deleteFinanceiros(id: number) {
    this.api.deleteFinanceiro(id)
      .subscribe({
        next: (res) => {
          alert("Financeiro deletado com sucesso")
          this.getAllFinanceiros();
        },
        error: () => {
          alert("Erro ao deletar!!")
        }
      })
  }

}


