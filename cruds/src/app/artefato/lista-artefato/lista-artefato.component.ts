import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';

import { ArtefatoComponent } from '../artefato.component';

@Component({
  selector: 'app-lista-artefato',
  templateUrl: './lista-artefato.component.html',
  styleUrls: ['./lista-artefato.component.scss']
})
export class ListaArtefatoComponent implements OnInit {

  displayedColumns: string[] = ['situacao', 'classe', 'tipo', 'quantidade', 'valorEstimado', 'apresentante', 'proprietario', 'descricao', 'observacao', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private dialog: MatDialog,
    private api: ApiService) { }

  ngOnInit(): void {
    this.getAllArtefatos();
  }

  openArtefato() {
    this.dialog.open(ArtefatoComponent, {
      width: '100%'
    }).afterClosed().subscribe(val => {
      if (val == 'Salvar') {
        this.getAllArtefatos();
      }
    })
  }

  getAllArtefatos() {
    this.api.getArtefato()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error: (err) => {
          if (err.status == 500) {
            alert("Erro ao conectar com a API!!")
          }
        }
      })
  }

  editArtefatos(row: any) {
    this.dialog.open(ArtefatoComponent, {
      width: '100%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val == 'Atualizar') {
        this.getAllArtefatos();
      }
    })
  }

  deleteArtefato(id: number) {
    this.api.deleteArtefato(id)
      .subscribe({
        next: (res) => {
          alert("Artefato deletado com sucesso")
          this.getAllArtefatos();
        },
        error: () => {
          alert("Erro ao deletar!!")
        }
      })
  }

}
