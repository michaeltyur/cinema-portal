import{Pipe, PipeTransform,Component} from '@angular/core'

@Pipe({
    name:'localImageUrlHider'
})

export class ImageUrlPipe implements PipeTransform
{
    transform(imageUrl){

        if( imageUrl==='../../assets/No_Image_Available.jpg' )
        {
            return '';
        }
        else return imageUrl;
        
    }
}