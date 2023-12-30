import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AnnullaConfermaModalComponent } from '../annulla-conferma-modal/annulla-conferma-modal.component';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent {
  private confermaAnnullamento: boolean = false;

  constructor(private router: Router, private dialog: MatDialog) { }

  form = new FormGroup({
    figuraProfessionale: new FormControl('Terapista', [Validators.required]),
    nome: new FormControl(null, [Validators.required]),
    cognome: new FormControl(null, [Validators.required]),
    codiceFiscale: new FormControl(null, [Validators.required]),
    luogoDiNascita: new FormControl(null, [Validators.required]),
    indirizzo: new FormControl(null, [Validators.required]),
    citta: new FormControl(null, [Validators.required]),
    provincia: new FormControl(null, [Validators.required]),
    cap: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
    regione: new FormControl(null, [Validators.required]),
    telefono: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    livelloDiIstruzione: new FormControl(null),
    istitutoUniversita: new FormControl(null),
    periodoIstruzione: new FormControl(null),
    ambitoDiStudi: new FormControl(null),
    azienda: new FormControl(null),
    posizioneRuolo: new FormControl(null),
    periodoLavorativo: new FormControl(null),
    settore: new FormControl(null),
  })

  salva() {
    console.log(this.form.value);    
    alert('Dati Salvati e Stampati in Console!');
    this.form.reset();
  }

  annullaCreazione() {
    const dialogRef = this.dialog.open(AnnullaConfermaModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.form.reset();
        this.router.navigate(['/tableListProfessionista']);
      } else {
        // L'utente ha cliccato su "No" o ha chiuso la modale
      }
    });
  }
}
