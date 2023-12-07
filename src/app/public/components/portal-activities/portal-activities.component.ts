import { Component } from '@angular/core';
import { FeatureDataService } from 'src/app/shared';
import { Activity } from 'src/app/shared/type';

@Component({
  selector: 'app-portal-activities',
  templateUrl: './portal-activities.component.html',
  styleUrls: ['./portal-activities.component.scss']
})
export class PortalActivitiesComponent {

  Items: Activity[];

  constructor(private featureDataService: FeatureDataService) { 
    this.Items = this.featureDataService.GetFeatureActivities();
    this.Items = this.Items.slice(0, 5);
    this.Items = this.sortByDateString(this.Items);
  }

  ngOnInit(): void {
  }

  sortByDateString(objects: Activity[]): Activity[] {
    return objects.sort((a, b) => {
      const dateA = new Date(a.date || "").getTime();
      const dateB = new Date(b.date || "").getTime();
  
      if (dateA > dateB) {
        return -1;
      } else if (dateA < dateB) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
