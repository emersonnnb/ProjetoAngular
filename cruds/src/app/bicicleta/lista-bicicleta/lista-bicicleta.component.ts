import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/service/api.service';

import { BicicletaComponent } from '../bicicleta.component';

@Component({
  selector: 'app-lista-bicicleta',
  templateUrl: './lista-bicicleta.component.html',
  styleUrls: ['./lista-bicicleta.component.scss']
})
export class ListaBicicletaComponent implements OnInit {

  displayedColumns: string[] = ['situacao', 'marca', 'modelo', 'cor', 'valorEstimado', 'chassi', 'apresentante', 'proprietario', 'observacao', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllBicicletas();
  }

  openBicicleta() {
    this.dialog.open(BicicletaComponent, {
      width: '100%'
    }).afterClosed().subscribe(val => {
      if (val == 'Salvar') {
        this.getAllBicicletas();
      }
    })
  }

  getAllBicicletas() {
    this.api.getBicicleta()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error: (err) => {
          alert("Erro ao listar Bicicleta!")
        }
      })
  }

  editBicicleta(row: any) {
    this.dialog.open(BicicletaComponent, {
      width: '100%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val == 'Atualizar') {
        this.getAllBicicletas();
      }
    })
  }
  deleteBicicleta(id: number) {
    this.api.deleteBicicleta(id)
      .subscribe({
        next: (res) => {
          alert("Bicicleta deletado com sucesso")
          this.getAllBicicletas();
        },
        error: () => {
          alert("Erro ao deletar!!")
        }
      })
  }

}
