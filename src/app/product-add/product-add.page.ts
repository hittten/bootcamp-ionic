import {Component, OnDestroy, OnInit, SecurityContext} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ProductService} from '../product.service';
import {ToastController} from '@ionic/angular';
import {CameraResultType, CameraSource, Plugins} from '@capacitor/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.page.html',
  styleUrls: ['./product-add.page.scss'],
})
export class ProductAddPage implements OnInit, OnDestroy {
  private subs: Subscription;

  productForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    price: ['', [Validators.required, Validators.minLength(4)]],
    description: ['', Validators.required],
  });

  photo: SafeResourceUrl;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    public toastController: ToastController,
    private sanitizer: DomSanitizer,
  ) {
  }

  ngOnInit() {
  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  async onSubmit() {
    this.subs = this.productService.create({
      ...this.productForm.value,
      image: this.sanitizer.sanitize(SecurityContext.URL, this.photo)
    })
      .subscribe(async newProduct => {
        this.productForm.reset({name: '', price: '', description: ''});
        this.photo = null;

        console.log('new product', newProduct);
        const toast = await this.toastController.create({
          message: 'You product have been saved.',
          duration: 2000
        });
        toast.present();
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
