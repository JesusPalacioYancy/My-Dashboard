import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Product } from '@interface/product.interface';

@Component({
  selector: 'ui-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent { 

  // @Input({required: true}) public product!: Product;
  public product = input.required<Product>();

  // @Output() public onIncrenmentQuantity = new EventEmitter<number>();
  public onIncrenmentQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrenmentQuantity.emit(this.product().quantity + 1);
  };


};
