import { Component } from '@angular/core';
import { Alert, AlertLevel, AlertsService } from '../../services/alerts.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.less']
})
export class AlertComponent {

  private LEVEL_TO_TYPE_MAP = new Map<AlertLevel, string>([
    ['SUCCESS', 'success'],
    ['FAILURE', 'danger'],
    ['INFO', 'info'],
  ]);

  alert: Alert;

  constructor(alertService: AlertsService) {
    alertService.alert.subscribe(alert => this.alert = alert);
  }

  mapType(level: AlertLevel): string {
    return this.LEVEL_TO_TYPE_MAP.get(level);
  }

  close(): void {
    this.alert = null;
  }
}
