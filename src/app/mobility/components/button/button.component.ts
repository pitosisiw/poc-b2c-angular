import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {BehaviorSubject, Observable} from 'rxjs'

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();
  @Input() className: Observable<string>

  constructor() {}

  ngOnInit(): void {}

  buttonClick() {
    this.onClick.emit();
  }


}
