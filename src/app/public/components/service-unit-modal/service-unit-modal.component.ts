import { Component, Input, OnInit } from '@angular/core';
import { ServiceUnitService } from 'src/app/shared';
import { ServiceUnit } from 'src/app/shared/type';

@Component({
  selector: 'app-service-unit-modal',
  templateUrl: './service-unit-modal.component.html',
  styleUrls: ['./service-unit-modal.component.scss']
})
export class ServiceUnitModalComponent implements OnInit{

  @Input() id: string | undefined;
  @Input() text: string = "";

  model: ServiceUnit | undefined;

  constructor(private serviceUnitService: ServiceUnitService){
    
  }

  ngOnInit(): void {
    if(this.id){
      this.model = this.serviceUnitService.getById(this.id);
      console.log(this.model)
    }
  }

}
