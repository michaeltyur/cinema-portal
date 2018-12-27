import{Pipe, PipeTransform,Component} from '@angular/core'

@Pipe({
    name:'removeNonEnglishLetter'
})

export class RemoveNonEnglishLetterPipe implements PipeTransform
{
    transform(title){

        if( title )
        {
            return title.replace(/[^\x00-\x7F]/g, "");
        }
        else return title;
        
    }
}