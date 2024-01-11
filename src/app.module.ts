import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesController } from './articles/articles.controller';
import { ArticlesService } from './articles/articles.service';
import { ArticlesModule } from './articles/articles.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [ArticlesModule],
  controllers: [AppController],
  providers: [AppService],
  //บอกว่าตัวนี้ใช้งาน service ไหนบ้าง
})
export class AppModule { }
