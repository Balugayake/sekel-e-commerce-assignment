export interface productTypeData {
  image: string | undefined;
  _id: any;
  images: any;
  description: string;
  title: string;
  id: number;
  name: string;
  price: number;
  qty: number;
  total: number;
}

export interface productsTypes {
  products: any;
  cart: any;
  qty: number;
  totalPrice: number;
}

// prototype
// export interface peoduct{
//     "id":number,
//     "title":string,
//     "price":number,
//     "description":string,
//     "images":string[],
//     "creationAt":string,
//     "updatedAt":string,
//     "category":{
//         "id":number,
//         "name":string,
//         "image":string,
//         "creationAt":string,
//         "updatedAt":string
//     }
// }
