import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from 'src/api/company/dtos/create-company.dto';
import { FindCompaniesByDateDto } from 'src/api/company/dtos/find-companies-by-date.dto';
import { FindCompanyByPartnerIdDto } from 'src/api/company/dtos/find-company-by-id.dto';
import { PrismaService } from 'src/api/users/services/prima.service';

@Injectable()
export class CompanyRepository {
  constructor(private prisma: PrismaService) {}

  async create({ name, bannerImage, logoImage, partnerId, address }: CreateCompanyDto) {
    return await this.prisma.company.create({
      data: {
        name,
        bannerImage,
        logoImage,
        partnerId,
        address
      }
    })
  }

  async findAll() {
    return await this.prisma.company.findMany();
  }

  async findByPartnerId({ partnerId }: FindCompanyByPartnerIdDto) {
    return await this.prisma.company.findMany({
      where: {
        partnerId
      }
    })
  }

  // async findByDate({ date, partnerId }: FindCompaniesByDateDto) {
  //   return this.prisma.company.findMany({
  //     where: {
  //       partnerId
  //     }
  //   })
  // }

  async findOneById(id: string){
    return await this.prisma.company.findUnique({
      where: {
        id
      }
    });
  }
}
