import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnChanges, SimpleChanges,NO_ERRORS_SCHEMA } from '@angular/core';


@Component({
  selector: 'app-alertcomponent',
  imports: [CommonModule],
  standalone:true,  
  schemas :[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
  templateUrl: './alertcomponent.component.html',
  styleUrl: './alertcomponent.component.css'
})
export class AlertcomponentComponent implements OnChanges {

  @Input() message : string = "";
  @Input() alertType : string = "";

  ngOnChanges(changes: SimpleChanges): void {
    

    console.log(changes);

  }

}
