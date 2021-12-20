import { Component } from '@angular/core';

export type EditorType = 'registrandopago' | 'confirmandopago';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  editor: EditorType = 'registrandopago';

  get showRegistrandoPagoEditor() {
    return this.editor === 'registrandopago';
  }

  get showConfirmandoPagoEditor() {
    return this.editor === 'confirmandopago';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
