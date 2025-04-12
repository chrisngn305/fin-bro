import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { FundsService } from './funds.service';
import { CreateFundDto } from './dto/create-fund.dto';
import { UpdateFundDto } from './dto/update-fund.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('funds')
@UseGuards(JwtAuthGuard)
export class FundsController {
  constructor(private readonly fundsService: FundsService) {}

  @Post()
  create(@Request() req, @Body() createFundDto: CreateFundDto) {
    return this.fundsService.create(req.user.id, createFundDto);
  }

  @Get()
  findAll(@Request() req) {
    return this.fundsService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.fundsService.findOne(req.user.id, id);
  }

  @Patch(':id')
  update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateFundDto: UpdateFundDto,
  ) {
    return this.fundsService.update(req.user.id, id, updateFundDto);
  }

  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.fundsService.remove(req.user.id, id);
  }
} 