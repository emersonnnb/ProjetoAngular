import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-dispositivos-moveis',
  templateUrl: './dispositivos-moveis.component.html',
  styleUrls: ['./dispositivos-moveis.component.scss']
})
export class DispositivosMoveisComponent implements OnInit {
  formDispositivos!: FormGroup;
  actionBtn: String = "Salvar"

  constructor(private formbuilder: FormBuilder, private api: ApiService, @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DispositivosMoveisComponent>) { }

  ngOnInit(): void {

    this.formDispositivos = this.formbuilder.group({

      id: ['', Validators.required],
      situacao: ['', Validators.required],
      apresentante:['', Validators.required],
      proprietario: ['', Validators.required],
      bloqueio: ['', Validators.required],
      seguro: ['', Validators.required],
      observacao: ['', Validators.required],
      seguradora: ['', Validators.required],
    })

    if (this.editData) {
      this.actionBtn = "Atualizar";
      this.formDispositivos.controls['situacao'].setValue(this.editData.situacao);
      this.formDispositivos.controls['apresentante'].setValue(this.editData.apresentante);
      this.formDispositivos.controls['proprietario'].setValue(this.editData.proprietario);
      this.formDispositivos.controls['bloqueio'].setValue(this.editData.bloqueio);
      this.formDispositivos.controls['seguro'].setValue(this.editData.seguro);
      this.formDispositivos.controls['observacao'].setValue(this.editData.observacao);
      this.formDispositivos.controls['seguradora'].setValue(this.editData.seguradora);

    }
  }
  
  
  addDispositivos() {
    if (!this.editData) {
      if (this.formDispositivos.valid) {
        this.api.postDispositivos(this.formDispositivos.value)
          .subscribe({
            next: (res) => {
              alert("Cadastrado com Sucesso!!");
              this.formDispositivos.reset();
              this.dialogRef.close('salvar');
            },
            error: () => {
              alert("Erro ao cadastrar o produto!")
            }
          })
      }
    } else {
      this.updateDispositivos();
    }
  }


  updateDispositivos() {
    this.api.putDispositivos(this.formDispositivos.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Atualizado com Sucesso!")
          this.formDispositivos.reset();
          this.dialogRef.close('Atualizar')
        },
        error: () => {
          alert("Erro ao atualizar!")
        }
      })
  }
  closeDialog() {
    this.dialogRef.close();
  }
}


