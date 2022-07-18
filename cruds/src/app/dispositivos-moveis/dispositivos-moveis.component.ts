import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Dispositivos } from '../model/dispositivos';
import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-dispositivos-moveis',
  templateUrl: './dispositivos-moveis.component.html',
  styleUrls: ['./dispositivos-moveis.component.scss']
})
export class DispositivosMoveisComponent implements OnInit {
  formDispositivos!: FormGroup;


  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.createForm(new Dispositivos());
  }
  createForm(dispositivos: Dispositivos) {
    this.formDispositivos = new FormGroup({
      situacao: new FormControl('', Validators.required),
      apresentante: new FormControl('', Validators.required),
      proprietario: new FormControl('', Validators.required),
      bloqueio: new FormControl('', Validators.required),
      seguro: new FormControl('', Validators.required),
      observacao: new FormControl('', Validators.required),
      seguradora: new FormControl('', Validators.required),
    })
  }

  addDispositivos() {
    if (this.formDispositivos.valid) {
      this.api.postDispositivos(this.formDispositivos.value)
        .subscribe({
          next: (res) => {
            alert("Dispositivos Cadastrado com Sucesso!!");
            console.log(this.formDispositivos.value);
            this.formDispositivos.reset();
          },
          error: () => {
            console.log(this.formDispositivos.value)
            alert("Erro ao Cadastrar Dispositivos!!")

          }

        })

    }

  }

  onSubmit() {
    console.log(this.formDispositivos.value);
    this.createForm(new Dispositivos());
  }


}
