import { Component, OnInit } from '@angular/core';
// Import the Product interface
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  tableTitle: string = 'Product List';
  imageWidth: number = 150;
  imageMargin: number = 2;
  // Indicates whether the images in the table are displayed at full resolution
  showImage: boolean = true;
  showImageCount: number = 0;
  showImageButtonTitle: string = "Show Image";

  errorMessage: string = "";

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(input: string) {
    // Get the input string from the search box
    this._listFilter = input;

    // Save the list of filtered products
    this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;
  }

  filteredProducts: IProduct[];
  // Hard-code the product data for now
  products: IProduct[] = [];

  // Private Variables


  // Inject the ProductService upon component construction
  constructor(private productService: ProductService) {
  }

  //OnInit() lifecycle hook startup method
  ngOnInit(): void {
    console.log('ProductListComponent: in OnInit lifecycle');
    // Initialize the product array during the OnInit lifecycle hook, not in the constructor. Note that Observables don't emit data until they are subscribed to.
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMessage = <any>error
    );
  }

  // Function to show an image thumbnail whenever the corresponding UI button is pressed
  toggleImage(): void {
    // Toggle the status of whether the full image is shown or not
    this.showImage = !this.showImage;
    // Change the button text to say "Hide Image" if the images are displayed, and
    // "Show Image" if the images are not displayed.
    this.showImageButtonTitle = this.showImage ? "Hide Image" : "Show Image";
    this.showImageCount++;
  }

  // Filter the product list based on the search text box string
  performFilter(filterBy: string): IProduct[] {
    // Transform the search text into lowercase for string processing
    filterBy = filterBy.toLocaleLowerCase();
    // Return all IProducts such that they match the filterBy string
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  // Performs an action based on the event emitted when a product rating is clicked
  onRatingClicked(message: string): void {
    this.tableTitle = 'Product List: ' + message;
  }

}

  

