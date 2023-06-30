import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/models/users/services/prima.service';
import { CreateServiceInput } from '../dto/create-service.input';
import { FindAllServicesInput } from '../dto/find-all-services.input';

@Injectable()
class ServiceRepository {

  constructor(private prisma: PrismaService) {};

  async create(data: CreateServiceInput) {
    data.bannerImage
    const service = await this.prisma.service.create({ data });
    return service;
  }

  async findAll({ skip, partnerId }: FindAllServicesInput) {
    const services = await this.prisma.service.findMany({
      skip: skip == null ? 0 : skip,
      take: 10,
      where: {
        partnerId
      },
      include: {
        consult: true,
        partner: true,
      }
  });
  return services;
  }
}

export { ServiceRepository };