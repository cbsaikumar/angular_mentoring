import { FilterPipe } from './pipes/filter.pipe';
import { CustomBorderDirective } from './directives/custom-border.directive';
import { LogoComponent } from './components/logo/logo.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DurationPipe } from './pipes/duration.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
 imports:      [ CommonModule ],
 declarations: [ HeaderComponent, FooterComponent, LogoComponent, 
                 CustomBorderDirective, DurationPipe, FilterPipe, OrderByPipe ],
 exports:      [ HeaderComponent, FooterComponent, LogoComponent, 
                 CustomBorderDirective, DurationPipe, FilterPipe, OrderByPipe,
                 CommonModule, FormsModule ]
})
export class SharedModule { }