import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ColorDirective } from './shared/directives/color.directive';
import { keypressDirective } from './shared/directives/eventKey.directive';

const DIRECTIVE = [        
]

@NgModule({
    declarations: [ColorDirective, keypressDirective],
    imports: [
        CommonModule,
        ...DIRECTIVE
    ],
    exports: [ColorDirective, keypressDirective]
})

export class DirectiveModule { }

