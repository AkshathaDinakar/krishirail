import { Component } from '@angular/core';
import { SidebarService } from 'src/app/service/sidebar.service';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from "@angular/forms";
@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.css']
})
export class TrainDetailsComponent {
 frequencies : any =[
    {
      name : 'Daily'
    },
    {
      name : 'Weekly'
    },
    {
      name : 'Weekly -  Monday'
    },
    {
      name : 'Weekly -  Tuesday'
    },{
      name : 'Weekly -  Wednesday'
    },
    {
      name : 'Fortnightly'
    },
    {
      name : 'Fortnightly -  Monday'
    },
    {
      name : 'Fortnightly -  Saturday'
    }
  ]

  trainDetailsForm  : FormGroup = new FormGroup({
    stationList: new FormArray([this.newStation()])
  })
  constructor(public sidebarService: SidebarService){}
  station(): FormArray {
    return this.trainDetailsForm.get("stationList") as FormArray;
  }

  newStation(): FormGroup {
    return new FormGroup({
      st_No: new FormControl(null, []),
      station_name: new FormControl(null, []),
      arrival : new FormControl(null, []),
      departure : new FormControl(null, []),
      duration : new FormControl(null, []),
      total_distance : new FormControl(null, []),
      day : new FormControl(null, [])
    });
  }

  addStation() {
    this.station().push(this.newStation());
  }

  deletekey(item: any, index: any) {
    this.station().removeAt(index);
  }
}
