import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getString(string: string): string {
    return `${string} World !`;
  }
}
