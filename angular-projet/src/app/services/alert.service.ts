import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private messageService: MessageService, private router: Router) {}

  showConfirm(key: any, summary: any, detail: any) {
    this.messageService.clear();
    this.messageService.add({
      key: key,
      sticky: true,
      severity: 'warn',
      summary: summary,
      detail: detail,
    });
  }

  clearMessages() {
    this.messageService.clear();
  }

  showSimpleSwalMessage(title: any, text: any) {
    return Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      confirmButtonColor: '#ee786c',
      position: 'top',
    });
  }

  showConfirmSwalMessage(title: any, text: any) {
    return Swal.fire({
      icon: 'warning',
      title: title,
      text: text,
      confirmButtonColor: '#ee786c',
      showCancelButton: true,
      confirmButtonText: 'OUI',
      cancelButtonText: 'NON',
      position: 'top',
    });
  }

  showSimpleErrorSwalMessage(text: any) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: text,
      confirmButtonColor: '#ee786c',
      position: 'top',
    });
  }

  async showConfirmResetPassword(title: any, text: any) {
    const result = await Swal.fire({
      icon: 'success',
      title: title,
      text: text,
      confirmButtonColor: 'green',
      showCancelButton: true,
      confirmButtonText: 'OUI',
      cancelButtonText: 'NON',
      position: 'top',
    });
    if (result.isConfirmed) {
      this.router.navigate(['login']);
    }
  }

  generateToastMessage(severity: string, message: any, life: number = 3000) {
    this.messageService.add({
      severity: severity,
      detail: message,
      life: life,
    });
  }
}
