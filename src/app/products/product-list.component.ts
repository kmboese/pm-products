import { Component, OnInit } from '@angular/core';
// Import the Product interface
import { IProduct } from './product';
import { StarComponent } from '../shared/star.component';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  tableTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  // Indicates whether the images in the table are displayed at full resolution
  showImage: boolean = true;
  showImageCount: number = 0;
  showImageButtonTitle: string = "Show Image";

  errorMessage: string = "Error";

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(input: string) {
    // Get the input string from the search box
    this._listFilter = input;

    // Save the list of filtered products
    this.filteredProducts = this._listFilter ? this.performFilter(this._listFilter) : this.products;

    console.log(`listFilter changed to ${this.listFilter}`);
  }

  
  filteredProducts: IProduct[];
  // Hard-code the product data for now
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Trebuchet",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2018",
      "description": "A seige weapon that can launch a 90kg payload over 300 meters.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://pocahontastimes.com/wp-content/uploads/2017/10/trebuchet.jpg"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2018",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 2.1,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      "productId": 3,
      "productName": "Electric Guitar",
      "productCode": "GDN-1157",
      "releaseDate": "April 15, 2018",
      "description": "Stringed instrument",
      "price": 799.99,
      "starRating": 4.3,
      "imageUrl": "https://andertons-productimages.imgix.net/88675-tmpD520.jpg?w=1200&h=630&fit=fill&bg=FFFFFF&auto=compress&auto=format"
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this._listFilter = 'cart';
  }

  //OnInit() lifecycle hook startup method
  ngOnInit(): void {
    console.log('ProductListComponent: in OnInit lifecycle');
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
}

