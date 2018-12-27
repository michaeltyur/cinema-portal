import{Pipe, PipeTransform,Component} from '@angular/core'

@Pipe({
    name:'runtimeToNumber'
})

export class RuntimeToNumberPipe implements PipeTransform
{
    transform(runtime){

        if( runtime )
        {
            return runtime.substring(0, runtime.indexOf(' '));
        }
        else return runtime;
        
    }
}