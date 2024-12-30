import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertcomponentComponent } from "../alertcomponent/alertcomponent.component";

@Component({
  selector: 'app-view-child-component',
  imports: [AlertcomponentComponent],
  standalone : true,
  templateUrl: './view-child-component.component.html',
  styleUrl: './view-child-component.component.css'
})
export class ViewChildComponentComponent implements AfterViewInit {

@ViewChild('txt') textBox ? : ElementRef;
@ViewChild(AlertcomponentComponent) alertComp ? : AlertcomponentComponent;

ngAfterViewInit(): void {
  const value = this.textBox.nativeElement.value;
  const alertComp = this.alertComp.message = "I am from view Child message come from alert!";


}

}
