import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ColorDirective } from './shared/directives/color.directive';

const DIRECTIVE = [        
]

@NgModule({
    declarations: [ColorDirective],
    imports: [
        CommonModule,
        ...DIRECTIVE
    ],
    exports: [ColorDirective]
})

export class DirectiveModule { }

