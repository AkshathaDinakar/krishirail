import { Component } from '@angular/core';
import { Subject } from "rxjs";
@Component({
  selector: 'app-disable-train-modal',
  templateUrl: './disable-train-modal.component.html',
  styleUrls: ['./disable-train-modal.component.css']
})
export class DisableTrainModalComponent {
  public onClose: Subject<any> = new Subject();
  alertType!: string;
  program_name: any;
  constructor(
  ) {}

  ngOnInit(): void {
  }

  deleteConfirmed() {
    
  }

  onCancel() {

  }
}
