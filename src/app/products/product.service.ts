import { Injectable } from "@angular/core";

import { IProduct } from './product';

// Making services injectable at the root allows any component access to them
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    
    getProducts(): IProduct[] {
        return [
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
    }
}