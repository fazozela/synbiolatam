import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-base-de-datos',
  templateUrl: './base-de-datos.html',
})
export class BaseDeDatos {
  sheetUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.sheetUrl = sanitizer.bypassSecurityTrustResourceUrl(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vTYq5wNG1Zita2PH1-NDt0YpH8P0eUdcKLTODkUS2Gb66FgI9PYHFmRt46ikv-tbg/pubhtml?widget=true&headers=false'
    );
  }
}
