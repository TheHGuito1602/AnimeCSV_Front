// duration-to-minutes.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationToMinutes'
})
export class DurationToMinutesPipe implements PipeTransform {
  transform(duration: string): number | null {
    if (!duration) {
      return null;
    }

    let totalMinutes = 0;

    // Expresión regular para extraer horas y minutos
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?/;

    const match = duration.match(regex);

    if (match) {
      const hours = match[1] ? parseInt(match[1], 10) : 0;
      const minutes = match[2] ? parseInt(match[2], 10) : 0;

      totalMinutes = hours * 60 + minutes;
    }

    return totalMinutes;
  }
}
