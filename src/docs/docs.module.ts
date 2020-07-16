import { Module } from '@nestjs/common';
import { DocsController } from './docs.controller';
import { DocsService } from './docs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doc } from './entities/docs.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Doc])],
  controllers: [DocsController],
  providers: [DocsService]
})
export class DocsModule {}
