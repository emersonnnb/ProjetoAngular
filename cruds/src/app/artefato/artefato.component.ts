import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { catchError, throwError } from 'rxjs';

import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-artefato',
  templateUrl: './artefato.component.html',
  styleUrls: ['./artefato.component.scss']
})
export class ArtefatoComponent implements OnInit {


  createdAt!: number;
  formArtefato!: FormGroup;
  actionBtn: String = "Salvar"

  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<ArtefatoComponent>) {

  }

  ngOnInit(): void {

    this.createdAt = 11;
    this.formArtefato = this.formbuilder.group({
      situacao: ['', Validators.required],
      classe: ['', Validators.required],
      tipo: ['', Validators.required],
      quantidade: ['', Validators.required],
      valorEstimado: ['', Validators.required],
      apresentante: ['', Validators.required],
      proprietario: ['', Validators.required],
      descricao: ['', Validators.required],
      observacao: ['', Validators.required],
      createdAt: [''],
    });

    if (this.editData) {
      this.actionBtn = "Atualizar";
      this.formArtefato.controls['situacao'].setValue(this.editData.situacao);
      this.formArtefato.controls['classe'].setValue(this.editData.classe);
      this.formArtefato.controls['tipo'].setValue(this.editData.tipo);
      this.formArtefato.controls['quantidade'].setValue(this.editData.quantidade);
      this.formArtefato.controls['valorEstimado'].setValue(this.editData.valorEstimado);
      this.formArtefato.controls['apresentante'].setValue(this.editData.apresentante);
      this.formArtefato.controls['proprietario'].setValue(this.editData.proprietario);
      this.formArtefato.controls['descricao'].setValue(this.editData.descricao);
      this.formArtefato.controls['observacao'].setValue(this.editData.observacao);
    }
  }

  addArtefato() {
    if (!this.editData) {
      if (this.formArtefato.valid) {
        console.log(this.formArtefato.value)
        this.api.postArtefato({ ...this.formArtefato.value, valorEstimado: Number(this.formArtefato.value.valorEstimado) })
          .subscribe({
            next: (res) => {
              alert("Cadastrado com Sucesso!!");
              this.formArtefato.reset();
              this.dialogRef.close('Salvar');
            },
            error: (err) => {
              if (err.status == 409) {
                alert("Dados ja cadastro para esse proprietário!!")
              }

            }
          })
      }
    }
    else {
      this.updateArtefato()
    }
  }


  updateArtefato() {
    this.api.putArtefato(this.formArtefato.value, this.editData.id)

      .subscribe({
        next: (res) => {
          alert("Atualizado com Sucesso!")
          this.formArtefato.reset();
          this.dialogRef.close('Atualizar')
        },
        error: (err) => {
          if (err.status == 409) {
            alert("Dados ja cadastro para esse proprietário!!")
          }
        }
      })
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        return `Not Found: ${error.message}`;
      }
      case 403: {
        return `Access Denied: ${error.message}`;
      }
      case 500: {
        return `Internal Server Error: ${error.message}`;
      }
      default: {
        return `Unknown Server Error: ${error.message}`;
      }

    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

  /*  createFormArtefato(artefato: Artefato) {

       this.formArtefato = this.formbuilder.group({
       id: new FormControl(''),
       situacao: new FormControl('', Validators.required),
       classe: new FormControl('', Validators.required),
       tipo: new FormControl('', Validators.required),
       quantidade: new FormControl('', [Validators.pattern(/^[0-9]\d*$/)]),
       valorEstimado: new FormControl(parseInt(''), [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
       apresentante: new FormControl('', [Validators.required]),
       proprietario: new FormControl('', [Validators.required]),
       descricao: new FormControl('', Validators.required),
       observacao: new FormControl(''),
     })
   } */




  /*   addArtefato() {
      if (this.formArtefato.invalid) {
        return;
      }
      if (this.editId !== undefined) {
        this.api.putArtefato(this.formArtefato.value, this.editId)
          .subscribe({
            next: (res) => {
              alert("Alterado com Sucesso!!");
              setTimeout(() =>
                this.formGroupDirective.resetForm(), 0)
              this.getAllArtefatos();
              document.location.reload();
            },
            error: () => {
              alert("Erro ao Atualizar Artefato!!")
            }
          })

      } else {
        this.api.postArtefato(this.formArtefato.value)
          .subscribe({
            next: (res) => {
              alert("Cadastrado com Sucesso!!");
              setTimeout(() =>
                this.formGroupDirective.resetForm(), 0)
              this.getAllArtefatos();
            },
            error: () => {
              alert("Erro ao Cadastrar Artefato!!")
            }
          })
      }
    } */

  /*   editaArtefato(row: Artefato) {
      this.editId = row.id;
      this.formArtefato.patchValue(row);
    }

    deteteArtefatos(id: any) {
      this.api.deleteArtefato(id)
        .subscribe({
          next: (res) => {
            alert("Produto deletado com sucesso")
            this.getAllArtefatos();
          },
          error: () => {
            alert("Erro ao deletar!!")
          }
        })
    } */
}
