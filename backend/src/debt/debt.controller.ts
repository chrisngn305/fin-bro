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
import { DebtService } from './debt.service';
import { CreateDebtDto } from './dto/create-debt.dto';
import { UpdateDebtDto } from './dto/update-debt.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('debt')
@UseGuards(JwtAuthGuard)
export class DebtController {
  constructor(private readonly debtService: DebtService) {}

  @Post()
  create(@Request() req, @Body() createDebtDto: CreateDebtDto) {
    return this.debtService.create(req.user.id, createDebtDto);
  }

  @Get()
  findAll(@Request() req) {
    return this.debtService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.debtService.findOne(req.user.id, id);
  }

  @Patch(':id')
  update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateDebtDto: UpdateDebtDto,
  ) {
    return this.debtService.update(req.user.id, id, updateDebtDto);
  }

  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.debtService.remove(req.user.id, id);
  }
} 