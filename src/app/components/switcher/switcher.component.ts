import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.sass'],
})
export class SwitcherComponent implements OnInit {
  @ViewChild('switchDiv') switchDiv!: ElementRef;
  @Input() tag!: string;
  @Input() items!: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.items);
  }

  handleActiveClass(event: any): void {
    const children = [].slice.call(this.switchDiv.nativeElement.children);
    console.log(children);
    children.forEach((ele: any) => {
      ele.classList.remove('active');
    });
    event.target.classList.add('active');
  }
}
