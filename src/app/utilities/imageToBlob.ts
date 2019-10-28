export class ImageToBlob{
    // function that converts an image to blob
    dataURItoBlob(imageUrl:string){
        // convert base64 to raw binary data held in a string
        var byteString = atob(imageUrl.split(',')[1]);

        // separate out the mime component
        var mimeString = imageUrl.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to an array buffer
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var _ia = new Uint8Array(arrayBuffer);
        for(var i = 0; i<byteString.length; i++){
            _ia[i] = byteString.charCodeAt(i);
        }
        var dataView = new DataView(arrayBuffer);
        var blob = new Blob([dataView], {type:mimeString});
        return blob;
    }
}