import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FormGroup } from '@angular/forms';
import { FormProcessService } from 'src/app/services/form-process.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit{
  loading:boolean = false;
  form!: FormGroup;

  constructor(
    private productService:ProductService,
    public ref: DynamicDialogRef,
    private formProcessService: FormProcessService,
    public dialogService: DialogService
  ) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formProcessService.generateProductFormGroup({});
  }

  createProduct(){
    if (this.form.valid) {
      this.loading = true;
      this.productService.createProduct(this.form.value).subscribe({
        next: (response: any) => {
          this.loading = false;
          this.ref.close(true);
        },
        error: () => {
          this.initForm();
          this.loading = false;
        },
      });
    }
  }

  
}
