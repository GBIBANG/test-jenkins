import { Component, OnInit } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FormGroup} from '@angular/forms';
import { FormProcessService } from 'src/app/services/form-process.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit{

  loading:boolean = false;
  form!: FormGroup;
  data:any;
  productUpdateParams:any;
  

  constructor(
    private formProcessService: FormProcessService,
    private productService:ProductService,
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef) { }

  ngOnInit(): void {
    this.data = this.config.data;
    this.initForm(this.data);
  }

  initForm(data:any) {
    this.form = this.formProcessService.generateProductFormGroup(data);
  }

  updateProduct(){
    if (this.form.valid) {
      this.loading = true;
      this.setProductUpdateParams();
      this.productService.updateProduct(this.productUpdateParams).subscribe({
        next: (response: any) => {
          this.loading = false;
          this.ref.close(true);
        },
        error: () => {
          this.initForm(this.data);
          this.loading = false;
        },
      });
    }
  }

  setProductUpdateParams(){
    this.productUpdateParams = {
      id: this.data.id,
      name:this.form.value.name,
      description:this.form.value.description,
      price:this.form.value.price
    }
  }

}
