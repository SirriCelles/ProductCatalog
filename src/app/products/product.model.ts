import { ImageToBlob} from '../utilities/imageToBlob';

export class Product {
    category: {
        name: string;
        id:number;
    }
    name:string;
    quantity: number;
    price: number;
    imageUrl: string;
    imageToBlob : ImageToBlob;
  
}
