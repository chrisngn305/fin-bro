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
import { InvestmentsService } from './investments.service';
import { CreateInvestmentDto } from './dto/create-investment.dto';
import { UpdateInvestmentDto } from './dto/update-investment.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('investments')
@UseGuards(JwtAuthGuard)
export class InvestmentsController {
  constructor(private readonly investmentsService: InvestmentsService) {}

  @Post()
  create(@Request() req, @Body() createInvestmentDto: CreateInvestmentDto) {
    return this.investmentsService.create(createInvestmentDto, req.user.id);
  }

  @Get()
  findAll(@Request() req) {
    return this.investmentsService.findAll(req.user.id);
  }

  @Get('types')
  getInvestmentTypes() {
    return this.investmentsService.getInvestmentTypes();
  }

  @Get(':id')
  findOne(@Request() req, @Param('id') id: string) {
    return this.investmentsService.findOne(id, req.user.id);
  }

  @Patch(':id')
  update(
    @Request() req,
    @Param('id') id: string,
    @Body() updateInvestmentDto: UpdateInvestmentDto,
  ) {
    return this.investmentsService.update(id, updateInvestmentDto, req.user.id);
  }

  @Delete(':id')
  remove(@Request() req, @Param('id') id: string) {
    return this.investmentsService.remove(id, req.user.id);
  }

  @Post(':id/history')
  addHistoryEntry(
    @Request() req,
    @Param('id') id: string,
    @Body('value') value: number,
  ) {
    return this.investmentsService.addHistoryEntry(req.user.id, id, value);
  }

  @Get(':id/history')
  getHistory(@Param('id') id: string) {
    return this.investmentsService.getHistory(id);
  }
} 