import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validImgPipe',
})
export class ValidImgPipePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string | string[] {
    if (!value) {
      return 'assets/images/deaultImg.jpg';
    }
    return args; 
  }

}
