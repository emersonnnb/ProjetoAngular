import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-outros',
  templateUrl: './outros.component.html',
  styleUrls: ['./outros.component.scss']
})
export class OutrosComponent implements OnInit {

  formOutros!: FormGroup;
  actionBtn: String = "Salvar"

  constructor(private formbuilder: FormBuilder, private api: ApiService, @Inject(MAT_DIALOG_DATA) public editData: any,
  private dialogRef: MatDialogRef<OutrosComponent>) { }

  ngOnInit(): void {
    this.formOutros = this.formbuilder.group({

      situacao:         ['', Validators.required],
      classe:           ['', Validators.required],
      tipo:             ['', Validators.required],
      valorEstimado:    ['', Validators.required],
      numerodeSerie:    ['', Validators.required],
      marca:            ['', Validators.required],
      modelo:           ['', Validators.required],
      quantidade:       ['', Validators.required],
      unidadedeMedida:  ['', Validators.required],
      acondicionamento: ['', Validators.required],
      descricao:        ['', Validators.required],
      apresentante:     ['', Validators.required],
      proprietario:     ['', Validators.required],
      observacao:       ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = "Atualizar";
      this.formOutros.controls['situacao'].setValue(this.editData.situacao);
      this.formOutros.controls['classe'].setValue(this.editData.classe);
      this.formOutros.controls['tipo'].setValue(this.editData.tipo);
      this.formOutros.controls['valorEstimado'].setValue(this.editData.valorEstimado);
      this.formOutros.controls['numerodeSerie'].setValue(this.editData.numerodeSerie);
      this.formOutros.controls['marca'].setValue(this.editData.marca);
      this.formOutros.controls['modelo'].setValue(this.editData.modelo);
      this.formOutros.controls['quantidade'].setValue(this.editData.quantidade);
      this.formOutros.controls['unidadedeMedida'].setValue(this.editData.unidadedeMedida);
      this.formOutros.controls['acondicionamento'].setValue(this.editData.acondicionamento);
      this.formOutros.controls['descricao'].setValue(this.editData.descricao);
      this.formOutros.controls['apresentante'].setValue(this.editData.apresentante);
      this.formOutros.controls['proprietario'].setValue(this.editData.proprietario);
      this.formOutros.controls['observacao'].setValue(this.editData.observacao);

    }
  }

  addOutros() {
    if (!this.editData) {
      if (this.formOutros.valid) {
        this.api.postOutros({ ...this.formOutros.value, valorEstimado: Number(this.formOutros.value.valorEstimado) })
          .subscribe({
            next: (res) => {
              alert("Cadastrado com Sucesso!!");
              this.formOutros.reset();
              this.dialogRef.close('Salvar');
            },
            error: () => {
              alert("Erro ao cadastrar Outros Bens!")
            }
          })
      }
    }
    else {
      this.updateOutros();
    }
  }

  updateOutros() {
    this.api.putOutros(this.formOutros.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Atualizado com Sucesso!")
          this.formOutros.reset();
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
