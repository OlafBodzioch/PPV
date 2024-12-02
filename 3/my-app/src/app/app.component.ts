import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InvoiceModule } from '../../invoice-app/src/app/invoice/invoice.module';
import { Customer } from '../../invoice-app/src/app/invoice/models/customer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InvoiceModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'skubi doo?';
  name = 'benek';
  
  customerList: Customer[] = [];
  index: number = 0;
  currentEditingID: number | null = null;

  zapiszDane(event: Event): void {
    event.preventDefault();
    let customer = new Customer();
    customer.name = (document.getElementById("nazwaFirmy") as HTMLInputElement).value;
    customer.nip = (document.getElementById("nip") as HTMLInputElement).value;
    customer.city = (document.getElementById("miasto") as HTMLInputElement).value;
    customer.street = (document.getElementById("ulica") as HTMLInputElement).value;
    customer.houseNumber = (document.getElementById("nrDomu") as HTMLInputElement).value;
    customer.zipCode = (document.getElementById("kodPocztowy") as HTMLInputElement).value;
    customer.comments = (document.getElementById("uwagi") as HTMLInputElement).value;
    customer.industry = (document.getElementById("branza") as HTMLInputElement).value;
    customer.active = (document.getElementById("aktywny") as HTMLInputElement).checked;
}

  wypelnijDane(): void {
    (document.getElementById("nazwaFirmy") as HTMLInputElement).value = "cement spolka zoo";
    (document.getElementById("nip") as HTMLInputElement).value = "1234567890";
    (document.getElementById("miasto") as HTMLInputElement).value = "karkow";
    (document.getElementById("ulica") as HTMLInputElement).value = "krakoska";
    (document.getElementById("numerDomu") as HTMLInputElement).value = "1";
    (document.getElementById("kodPocztowy") as HTMLInputElement).value = "11-121";
    (document.getElementById("uwagi") as HTMLInputElement).value = "brak";
    (document.getElementById("branza") as HTMLInputElement).value = "1";
    (document.getElementById("aktywny") as HTMLInputElement).checked = true;
  }

  wyczyscDane(): void {
    (document.getElementById("nazwaFirmy") as HTMLInputElement).value = "";
    (document.getElementById("nip") as HTMLInputElement).value = "";
    (document.getElementById("miasto") as HTMLInputElement).value = "";
    (document.getElementById("ulica") as HTMLInputElement).value = "";
    (document.getElementById("nrDomu") as HTMLInputElement).value = "";
    (document.getElementById("kodPocztowy") as HTMLInputElement).value = "";
    (document.getElementById("uwagi") as HTMLInputElement).value = "";
    (document.getElementById("branza") as HTMLInputElement).value = "";
    (document.getElementById("aktywny") as HTMLInputElement).checked = false;
  }

  wyswietlFormularz(): void {
    let form = document.getElementById("poleFormularz");
    form.style.display = `block`;
  }

  ukryjFormualrz(): void {
    this.clearForm();
    let customerForm = document.getElementById("customer-form")!;
    customerForm.style.display = `none`;
    this.currentEditingID = null;
  }

  }

