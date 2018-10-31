import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {

  info_persona_id: number;

  @Input('info_persona_id')
  set name(info_persona_id: number) {
    this.info_persona_id = info_persona_id;
  }

  @Output('url_editar') url_editar: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  public editar(event, obj): any {
    this.url_editar.emit(obj);
  }

  ngOnInit() {
  }

}
