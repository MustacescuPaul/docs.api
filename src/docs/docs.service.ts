import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doc } from './entities/docs.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocsService {
  constructor(@InjectRepository(Doc)private docRepository: Repository<Doc>) {
  }
  async findAll(): Promise<Doc[]>{
    return this.docRepository.find()
  }
}
