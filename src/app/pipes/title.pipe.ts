import{Pipe, PipeTransform,Component} from '@angular/core'

@Pipe({
    name:'capitalizeFirstLetter'
})

export class TitlePipe implements PipeTransform
{
    transform(title){

        if( title )
        {
            return title.replace(/\b\w/g, l => l.toUpperCase())
        }
        else return title;
        
    }
}