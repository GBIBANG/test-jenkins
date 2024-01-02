import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ColumnProcessService } from 'src/app/services/column-process.service';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ProductAddComponent } from 'src/app/modals/product-add/product-add.component';
import { ProductUpdateComponent } from 'src/app/modals/product-update/product-update.component';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:any = [];
  columns: any;
  rowsPerPageOptions = [3, 10, 20, 30];
  minRow: number = 3;
  loading: boolean = false;
  datatableId = 'datatable';
  localData = new Map();
  searchKey = '';

  constructor(private messageService:MessageService,
    private alertService:AlertService,
    public dialogService: DialogService,
    private columnProcessService:ColumnProcessService,private productService:ProductService) { }

  ngOnInit(): void {
    this.columns = this.columnProcessService.productColumns();
    this.getAllProducts();
  }

  getAllProducts() {
    this.loading = true;
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.localData.set(1, data);
        this.loading = false;
      },
      error(err) {
        console.log(err);
      }
    });
  }

  search() {
    this.products = this.localData.get(1)
      .filter((element:any) =>
        Object.values(element)
          .toString()
          .toLowerCase()
          .includes(this.searchKey.toLowerCase())
      );
  }

  createProduct() {
    let dialogRef = this.dialogService.open(ProductAddComponent, {
      width: '45%',
      contentStyle: { 'max-height': '90 %', overflow: 'auto' },
      baseZIndex: 10000,
    });
    dialogRef.onClose.subscribe((response) => {
      this.processResponse(response, 'Crée');
    });
  }

  updateProduct(product:any){
    let dialogRef = this.dialogService.open(ProductUpdateComponent, {
      width: '45%',
      data:product,
      contentStyle: { 'max-height': '90 %', overflow: 'auto' },
      baseZIndex: 10000,
    });
    dialogRef.onClose.subscribe((response) => {
      this.processResponse(response, 'Modifié');
    });
  }

  deleteProduct(id:any){
    this.alertService
      .showConfirmSwalMessage(
        'Confirmation',
        'Voulez-vous vraiment supprimer ce produit?'
      )
      .then((out) => {
        if (out.isConfirmed) {
          this.productService.deleteProduct(id).subscribe({
            next: (response) => {
              this.loading = false;
              this.processResponse(response, 'supprimé');
            },
            error: () => {
              this.loading = false;
            },
          });
        }
        this.loading = false;
      });
  }

  processResponse(response: boolean, action: any) {
    if (response) {
      this.messageService.add({
        severity: 'success',
        summary: 'Operation réussie',
        detail: `Produit ${action} avec succès.`,
      });
      this.getAllProducts();
    }
  }

}
