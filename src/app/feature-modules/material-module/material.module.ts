import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatGridListModule],
  exports: [MatToolbarModule, MatButtonModule, MatGridListModule]
})
export class MaterialModule {}
