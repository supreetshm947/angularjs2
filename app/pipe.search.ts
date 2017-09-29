import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'search'
})

export class SearchPipe {
    transform(pipeData, pipeModifier) {
        return  pipeData.filter((eachItem)=>{
            return eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase());
        })
    }
}
