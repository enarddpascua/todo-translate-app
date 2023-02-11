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

@NgModule({
    imports:[MatButtonModule,MatIconModule, MatInputModule, MatFormFieldModule,MatCheckboxModule, MatSidenavModule, MatToolbarModule,MatListModule,MatCardModule,MatSelectModule],
    exports:[MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule,MatCheckboxModule, MatSidenavModule ,MatToolbarModule,MatListModule,MatCardModule,MatSelectModule]
})
export class MaterialModule{

}