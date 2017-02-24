import { Component, ViewContainerRef } from '@angular/core';
import { MdIconRegistry } from '@angular/material'
import { DomSanitizer } from '@angular/platform-browser'
import { TdDialogService, TdLoadingService, LoadingType, ILoadingOptions } from '@covalent/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';

    constructor() {
       
    }
}
