import { Controller, Get } from '@nestjs/common';
import { DocsService } from './docs.service';
import { Doc } from './entities/docs.entity';

@Controller('docs')
export class DocsController {
  constructor(private docsService: DocsService) {
  }

  @Get()
  findAll(): Promise<Doc[]> {
    return this.docsService.findAll();
  }

}
