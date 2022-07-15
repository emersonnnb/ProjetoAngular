import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Dispositivos } from 'src/app/model/dispositivos';
import { ApiService } from 'src/app/service/api.service';
import { DispositivosMoveisComponent } from '../dispositivos-moveis.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-lista-dispositivos-moveis',
  templateUrl: './lista-dispositivos-moveis.component.html',
  styleUrls: ['./lista-dispositivos-moveis.component.scss']
})
export class ListaDispositivosMoveisComponent implements OnInit {

  displayedColumns: string[] = ['situacao', 'apresentante', 'proprietario', 'seguro', 'bloqueio', 'observacao', 'seguradora', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getAllDispositivos();
  }

  openDispositivos() {
    this.dialog.open(DispositivosMoveisComponent, {
      width: '100%'
    }).afterClosed().subscribe(val => {
      if (val == 'Salvar') {
        this.getAllDispositivos();
      }
    })
  }

  getAllDispositivos() {
    this.api.getDispositivos()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error: (err) => {
          alert("Erro ao listar Dispositivo!")
        }
      })
  }
  
  editDispositivos(row: any) {
    this.dialog.open(DispositivosMoveisComponent, {
      width: '100%',
      data: row
    }).afterClosed().subscribe(val => {
      if (val == 'Atualizar') {
        this.getAllDispositivos();
      }
    })
  }
  deleteDispositivos(id: number) {
    this.api.deleteDispositivos(id)
      .subscribe({
        next: (res) => {
          alert("Dispositivo deletado com sucesso")
          this.getAllDispositivos();
        },
        error: () => {
          alert("Erro ao deletar!!")
        }
      })

  }
}
