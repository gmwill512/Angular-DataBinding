import {
  Component, OnInit, Input, OnChanges, ViewEncapsulation,
  SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewChecked, AfterViewInit, OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewChecked, OnDestroy, AfterViewInit {

  // tslint:disable-next-line: no-input-rename
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;


  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('NgOnIt Called');
    console.log(`Text Content ` + this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('NgAfterContentInit Called');
  }

  ngAfterContentChecked() {
    console.log('After Checked');
  }

  ngAfterViewChecked() {
    console.log('Afterview');
  }

  ngAfterViewInit() {
    console.log('Afterview Init');
    console.log(`Text Content ` + this.header.nativeElement.textContent);
    console.log('Text Content of paragraph ' + this.paragraph.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('ngOnDestroyted');
  }
}
