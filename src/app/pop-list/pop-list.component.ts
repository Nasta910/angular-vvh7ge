import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

import { Pop } from './pop';
import { PopService } from './pop.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class PopComponent {
  pops: Pop[] = [];

  constructor(private popService: PopService) {}

  loadPops() {
    this.popService.getPops().subscribe((pops) => (this.pops = pops));
  }

  addPop() {}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
