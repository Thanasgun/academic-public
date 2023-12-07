import { Component, Input, OnInit } from '@angular/core';
import { SpecialistService } from 'src/app/shared';
import { Specialist } from 'src/app/shared/type';

@Component({
  selector: 'app-specialist-modal',
  templateUrl: './specialist-modal.component.html',
  styleUrls: ['./specialist-modal.component.scss']
})
export class SpecialistModalComponent implements OnInit{

  @Input() id: string | undefined;
  @Input() text: string = "";

  model: Specialist | undefined;

  constructor(private specialistService: SpecialistService){
    
  }

  ngOnInit(): void {
    if(this.id){
      this.model = this.specialistService.getById(this.id);
      console.log(this.model)
    }
  }

}
