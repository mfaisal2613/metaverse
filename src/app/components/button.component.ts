import {Component,Input,OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
@Input() isBasic!:boolean;
@Input() isPrimary!:boolean;
@Input() isAccent!:boolean;
@Input() isWarn!:boolean;
@Input() isDisabled!:boolean;
@Input() isLink!:boolean;
@Input() text!:string;
@Input() width!:number;
@Input() iconClass!:string;
@Input() iconLeft:boolean = false;
@Input() iconSeparator:boolean = false;

    constructor() { }
  
    ngOnInit(): void {
    }
  }