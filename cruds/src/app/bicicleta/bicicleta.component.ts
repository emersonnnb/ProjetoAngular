import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Bicicleta } from '../model/bicicleta';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-bicicleta',
  templateUrl: './bicicleta.component.html',
  styleUrls: ['./bicicleta.component.scss']
})
export class BicicletaComponent implements OnInit {

  formBicicleta!: FormGroup;
  actionBtn: String = "Salvar"

  constructor(private formbuilder: FormBuilder, private api: ApiService, @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<BicicletaComponent>) { }

  ngOnInit(): void {

    this.formBicicleta = this.formbuilder.group({
      
      situacao: ['', Validators.required],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      cor: ['', Validators.required],
      valorEstimado: ['', Validators.required],
      chassi: ['', Validators.required],
      apresentante: ['', Validators.required],
      proprietario: ['', Validators.required],
      observacao: ['', Validators.required],


    });

    if (this.editData) {
      this.actionBtn = "Atualizar";
      this.formBicicleta.controls['situacao'].setValue(this.editData.situacao);
      this.formBicicleta.controls['marca'].setValue(this.editData.marca);
      this.formBicicleta.controls['modelo'].setValue(this.editData.modelo);
      this.formBicicleta.controls['cor'].setValue(this.editData.cor);
      this.formBicicleta.controls['valorEstimado'].setValue(this.editData.valorEstimado);
      this.formBicicleta.controls['chassi'].setValue(this.editData.chassi);
      this.formBicicleta.controls['apresentante'].setValue(this.editData.apresentante);
      this.formBicicleta.controls['proprietario'].setValue(this.editData.proprietario);
      this.formBicicleta.controls['observacao'].setValue(this.editData.observacao);

    }
  }

  addBicicleta() {
    if (!this.editData) {
      if (this.formBicicleta.valid) {
        console.log(this.formBicicleta.value);
        this.api.postBicicleta({ ...this.formBicicleta.value, valorEstimado: Number(this.formBicicleta.value.valorEstimado) })
        .subscribe({
            next: (res) => {
              alert("Cadastrado com Sucesso!!");
              this.formBicicleta.reset();
              this.dialogRef.close('Salvar');
            },
            error: () => {
              alert("Erro ao cadastrar bicicleta!")
            }
          })
      }
    } else {
      this.updateBicicleta();
    }
  }


  updateBicicleta() {
    this.api.putBicicleta(this.formBicicleta.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Atualizado com Sucesso!")
          this.formBicicleta.reset();
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
