import { Component, OnInit } from '@angular/core';
// Import the Product interface
import { IProduct } from './product';

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
  showImage: boolean = false;
  showImageCount: number = 0;
  showImageButtonTitle: string = "Show Image";

  filteredProducts: IProduct[];
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(input: string) {
    // Get the input string from the search box
    this._listFilter = input;

    // Save the list of filtered products
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;

    console.log(`listFilter changed to ${this._listFilter}`);
  }

  

  // Hard-code the product data for now
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Trebuchet",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "A seige weapon that can launch a 90kg payload over 300 meters.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://pocahontastimes.com/wp-content/uploads/2017/10/trebuchet.jpg"
    },
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    }];

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
    console.log(`ShowImage has been pressed ${++this.showImageCount} times.`);
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

