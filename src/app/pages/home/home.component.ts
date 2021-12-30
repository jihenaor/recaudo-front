import { Component, Input, OnInit } from '@angular/core';
import { Factura } from 'src/app/core/factura';

export type EditorType = 'paso1' | 'paso2' | 'paso3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() paso: EditorType;
  @Input() factura: Factura;

  constructor() {
    this.paso = 'paso1';
  }


  ngOnInit(): void {
  }

  get hidenPaso1() {
    return this.paso !== 'paso1';
  }

  get hidenPaso2() {
    return this.paso !== 'paso2';
  }

  get hidenPaso3() {
    return this.paso !== 'paso3';
  }
}
