import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';

import { OutrosComponent } from '../outros.component';

@Component({
  selector: 'app-lista-outros',
  templateUrl: './lista-outros.component.html',
  styleUrls: ['./lista-outros.component.scss']
})
export class ListaOutrosComponent implements OnInit {

  displayedColumns: string[] = ['situacao', 'classe', 'tipo','valorEstimado', 'numerodeSerie', 'marca', 'modelo', 'quantidade', 'unidadedeMedida', 'acondicionamento', 'descricao', 'apresentante', 'proprietario', 'observacao', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllOutros();
  }

  openOutros() {
    this.dialog.open(OutrosComponent, {
      width: '100%'
    }).afterClosed().subscribe(val => {
      if (val == 'Salvar') {
        this.getAllOutros();
      }
    })
  }

  getAllOutros() {
    this.api.getOutros()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error: (err) => {
          alert("Erro ao listar Outros Objetos")
        }
      })
  }

  editOutros(row: any) {
    this.dialog.open(OutrosComponent, {
      width: '100%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val == 'Atualizar') {
        this.getAllOutros();
      }
    })
  }

  deleteOutros(id: number) {
    this.api.deleteOutros(id)
      .subscribe({
        next: (res) => {
          alert("Outros Objetos deletado com sucesso")
          this.getAllOutros();
        },
        error: () => {
          alert("Erro ao deletar!!")
        }
      })
  }

}
