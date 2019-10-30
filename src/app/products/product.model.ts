import { ImageToBlob} from '../utilities/imageToBlob';

export class Product {
    category: {
        id?: number;
        name: string;
        description: string;
    }
    id?: number;
    name:string;
    quantity: number;
    price: number;
    imageUrl: string;
    imageToBlob : ImageToBlob;
  
}
