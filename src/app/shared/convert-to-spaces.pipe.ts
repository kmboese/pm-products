import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

  // Transform all given characters in a string into spaces
  transform(source: string, character: string): string {
    return source.replace(character, ' ');
  }
}
