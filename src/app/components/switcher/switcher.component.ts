import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.sass'],
})
export class SwitcherComponent implements OnInit {
  @ViewChild('switchDiv') switchDiv!: ElementRef;
  @Input() tag!: string;
  @Input() items!: any;
  @Output() classChange = new EventEmitter();
  current!: string;
  constructor() {}

  ngOnInit(): void {
    this.current = this.items[0];
  }

  handleActiveClass(event: any): void {
    const children = [].slice.call(this.switchDiv.nativeElement.children);
    children.forEach((ele: any) => {
      ele.classList.remove('active');
    });
    event.target.classList.add('active');
    this.current = event.target.innerHTML;
    this.classChange.emit(this.current);
  }
}
