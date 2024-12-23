import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { Product } from '@interface/product.interface';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './input-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputComponent implements OnDestroy {

  public products = signal<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      quantity: 10
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 20
    },
  ]);

  private intervalSubscription = interval(1000).pipe(
    tap(() => {
      this.products.update((product) => [
        ...product,
        {
          id: product.length + 1,
          name: `Product ${product.length + 1}`,
          quantity: 0
        }
      ]);
    }),
    take(7)
  ).subscribe();


  updatePorduct(product: Product, newQuantity: number): void {
    this.products.update((products) => 
      products.map((p) => 
      p.id === product.id ? {...p, quantity: newQuantity} : p
    ));
  };
  
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  };

};
