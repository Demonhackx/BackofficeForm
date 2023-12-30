import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-annulla-conferma-modal',
  templateUrl: './annulla-conferma-modal.component.html',
  styleUrls: ['./annulla-conferma-modal.component.css']
})
export class AnnullaConfermaModalComponent {
  constructor(
    public dialogRef: MatDialogRef<AnnullaConfermaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}
