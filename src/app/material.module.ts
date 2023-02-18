import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatCheckboxModule } from "@angular/material/checkbox";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
    imports:[MatButtonModule,MatIconModule, MatInputModule, MatFormFieldModule,MatCheckboxModule, MatSidenavModule, MatToolbarModule,MatListModule,MatCardModule,MatSelectModule,MatTabsModule,MatSnackBarModule,MatExpansionModule],
    exports:[MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule,MatCheckboxModule, MatSidenavModule ,MatToolbarModule,MatListModule,MatCardModule,MatSelectModule,MatTabsModule,MatSnackBarModule,MatExpansionModule]
})
export class MaterialModule{

}