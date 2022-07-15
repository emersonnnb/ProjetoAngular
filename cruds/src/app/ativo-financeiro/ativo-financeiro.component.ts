import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Financeiro } from 'src/app/model/financeiro';
import { ApiService } from '../service/api.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-ativo-financeiro',
  templateUrl: './ativo-financeiro.component.html',
  styleUrls: ['./ativo-financeiro.component.scss']
})
export class AtivoFinanceiroComponent implements OnInit {

  formFinanceiro!: FormGroup;
  actionBtn: String = "Salvar"

  constructor(private formbuilder: FormBuilder, private api: ApiService, @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AtivoFinanceiroComponent>) { }

  ngOnInit(): void {

    this.formFinanceiro = this.formbuilder.group({

      situacao: ['', Validators.required],
      classe: ['', Validators.required],
      tipo: ['', Validators.required],
      quantidade: ['', Validators.required],
      unidadedeMedida: ['', Validators.required],
      valorEstimado: ['', Validators.required],
      moeda: ['', Validators.required],
      proprietarioTitular: ['', Validators.required],
      descricao: ['', Validators.required],
      beneficiario: ['', Validators.required],
      proprietarioCotitular: ['', Validators.required],
      proprietarioCootitular: ['', Validators.required],
      observacao: ['', Validators.required],
    })

    if (this.editData) {
      this.actionBtn = "Atualizar";
      this.formFinanceiro.controls['situacao'].setValue(this.editData.situacao);
      this.formFinanceiro.controls['classe'].setValue(this.editData.classe);
      this.formFinanceiro.controls['tipo'].setValue(this.editData.tipo);
      this.formFinanceiro.controls['quantidade'].setValue(this.editData.quantidade);
      this.formFinanceiro.controls['unidadedeMedida'].setValue(this.editData.unidadedeMedida);
      this.formFinanceiro.controls['valorEstimado'].setValue(this.editData.valorEstimado);
      this.formFinanceiro.controls['moeda'].setValue(this.editData.moeda);
      this.formFinanceiro.controls['proprietarioTitular'].setValue(this.editData.proprietarioTitular);
      this.formFinanceiro.controls['descricao'].setValue(this.editData.descricao);
      this.formFinanceiro.controls['beneficiario'].setValue(this.editData.beneficiario);
      this.formFinanceiro.controls['proprietarioCotitular'].setValue(this.editData.proprietarioCotitular);
      this.formFinanceiro.controls['proprietarioCootitular'].setValue(this.editData.propritarioCootitular);
      this.formFinanceiro.controls['observacao'].setValue(this.editData.observacao);

    }
  }

  addFinanceiro() {
    if (!this.editData) {
      if (this.formFinanceiro.valid) {
        this.api.postFinanceiro(this.formFinanceiro.value)
          .subscribe({
            next: (res) => {
              alert("Cadastrado com Sucesso!!");
              this.formFinanceiro.reset();
              this.dialogRef.close('Salvar');
            },
            error: () => {
              alert("Erro ao cadastrar o produto!")
            }
          })
      }
    } else {
      this.updateFinanceiro();
    }
  }

  updateFinanceiro() {
    this.api.putFinanceiro(this.formFinanceiro.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Atualizado com Sucesso!")
          this.formFinanceiro.reset();
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

  /* getAllFinanceiro() {
    this.api.getFinanceiro()
      .subscribe({
        next: (res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        },
        error: (err) => {
          alert("Erro ao listar produtos!")
        }
      })
  }

  addFinanceiro() {
    if (this.formFinanceiro.invalid) {
      return;
    }
    if (this.editId !== undefined) {
      this.api.putFinanceiro(this.formFinanceiro.value, this.editId)
        .subscribe({
          next: (res) => {
            alert("Alterado com Sucesso!!");
            setTimeout(() =>
              this.formGroupDirective.resetForm(), 0)
            this.getAllFinanceiro();
            document.location.reload();
          },
          error: () => {
            alert("Erro ao Atualizar Financeiro!!")
          }
        })

    } else {
      this.api.postFinanceiro(this.formFinanceiro.value)
        .subscribe({
          next: (res) => {
            alert("Cadastrado com Sucesso!!");
            setTimeout(() =>
              this.formGroupDirective.resetForm(), 0)
            this.getAllFinanceiro();
          },
          error: () => {
            alert("Erro ao Cadastrar Financeiro!!")
          }
        })
    }
  }

  editaFinanceiros(row: Financeiro) {
    this.editId = row.id;
    this.formFinanceiro.patchValue(row);
  }

  deteteFinanceiros(id: any) {
    this.api.deleteFinanceiro(id)
      .subscribe({
        next: (res) => {
          alert("Produto deletado com sucesso")
          this.getAllFinanceiro();
        },
        error: () => {
          alert("Erro ao deletar!!")
        }
      })
  }

  onSubmit() {
    console.log(this.formFinanceiro.value);
    this.createFormFinanceiro(new Financeiro());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } */

  /* /* function Inject(MAT_DIALOG_DATA: any) {
  throw new Error('Function not implemented.'); */
}
