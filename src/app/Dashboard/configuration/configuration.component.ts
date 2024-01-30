import { Component,ViewChild,TemplateRef,ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/service/sidebar.service';
import { DisableTrainModalComponent } from 'src/app/shared/modals/disable-train-modal/disable-train-modal.component';
import { Modal } from 'flowbite';
import type { ModalOptions, ModalInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
export interface HasElementRef {
  _elementRef: ElementRef;
}
@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})

export class ConfigurationComponent {
  @ViewChild("disableTrain", { static: false })
  disableTrain!: TemplateRef<any>;
  recentTransactions = [
    { id: '12749', trainName: 'Kisan Vikas Express', origin: 'Yeshwanthpur Jn', destination: 'Howrah Jn', distance: '720 Kms' , duration:'14 hrs.',stops:'29',endDate:'21 Sept. 2022',frequency:'Weekly'},
    { id: '00926', trainName: 'Kisan Vikas Express', origin: 'Rajkot Jn.', destination: 'Coimbatore Jn.', distance: '2190 Kms',duration:'39 hrs',stops:'24',endDate:'11 Sept. 2022',frequency:'Weekly' },
    { id: '00927', trainName: 'RJT-CBE-RJT Parcel Express', origin: 'Coimbatore Jn.', destination: 'Rajkot Jn.', distance: '2190 Kms',duration:'39 hrs',stops:'24',endDate:'10 Sept. 2022',frequency:'Weekly' },
    { id: '12750', trainName: 'Kisan Vikas Express', origin: 'Howrah Jn', destination: 'Yeshwanthpur Jn', distance: '720 Kms',duration:'14 hrs',stops:'29',endDate:'Untill Cancelled',frequency:'Weekly' },
    
  ];
  disableElement: HTMLElement =
              document.querySelector("medium-modal") as HTMLElement;
  constructor(public sidebarService: SidebarService,private router : Router,private __el: ElementRef,){}

  addTrain(type:any){
    this.router.navigateByUrl(`dashboard/configuration/train/${type}`);
  }
  deleteTrain(item:any){
   
    
    const modalOptions : ModalOptions = {
        placement: 'bottom-right',
        backdrop: 'dynamic',
        backdropClasses: 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
        onHide: () => {
            console.log('modal is hidden');
        },
        onShow: () => {
            console.log('modal is shown');
        },
        onToggle: () => {
            console.log('modal has been toggled');
        }
    }
    
    const modal = new Modal(this.disableElement, modalOptions);
    
    modal.show();

  }
}
