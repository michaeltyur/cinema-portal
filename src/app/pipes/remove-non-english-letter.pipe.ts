import{Pipe, PipeTransform,Component} from '@angular/core'

@Pipe({
    name:'removeNonEnglishLetter'
})

export class RemoveNonEnglishLetterPipe implements PipeTransform
{
    transform(title){

        if( title )
        {
            title = title.replace(/[^\x20-\x7E]/g, '');
            title = title.replace(/[^a-zA-Z0-9 ]/g, "");
            return title;
        }
        else return title;
        
    }
}