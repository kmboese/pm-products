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
  imageWidth: number = 150;
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

    //console.log(`listFilter changed to ${this.listFilter}`);
  }

  
  filteredProducts: IProduct[];
  // Hard-code the product data for now
  products: IProduct[] = [
    {
      "productId": 1,
      "productName": "Huawei Matebook X Pro",
      "productCode": "H-MXP-i5-256GB",
      "releaseDate": "June 10, 2018",
      "description": "Ripping off Apple with a wink and a nod.",
      "price": 1099.99,
      "starRating": 4.5,
      "imageUrl": "https://www.notebookcheck.net/fileadmin/Notebooks/Huawei/Matebook_X_Pro_i5/huawei_matebook_x_pro_thin_body_4.png"
    },
    {
      "productId": 2,
      "productName": "Dell XPS 13",
      "productCode": "9370",
      "releaseDate": "January 15, 2018",
      "description": "One of the best premium Windows ultraportables around.",
      "price": 1199.99,
      "starRating": 4.0,
      "imageUrl": "https://www.bhphotovideo.com/images/images1000x1000/dell_xps9370_7002slv_xps_i7_8550u_8gb_256ssd_1398207.jpg"
    },
    {
      "productId": 3,
      "productName": "Macbook Adorable",
      "productCode": "MB-A-12",
      "releaseDate": "June 6, 2017",
      "description": "The teeniest Apple laptop. Lighter than the Air, but the Air still exists somehow.",
      "price": 1299.99,
      "starRating": 4.6,
      "imageUrl": "https://store.storeimages.cdn-apple.com/4981/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/select/macbook-select-space-gray-201706?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1505775431709"
    }
  ];

  constructor() {
    this.filteredProducts = this.products;
    this._listFilter = '';
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

