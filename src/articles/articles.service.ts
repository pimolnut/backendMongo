import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ArticleDTO } from './dto/article.dto';

@Injectable()
export class ArticlesService {
    constructor(private readonly prisma: PrismaService) {
    }
    //ดึง database
    async getArticles() {
        const articles = await this.prisma.articles.findMany()
        return {
            "status": "ok",
            "totalResult": 1001,
            "articles": articles
        }
    }

    async create(articledto: ArticleDTO) {
        const article = await this.prisma.articles.create({
            data: {
                ...articledto
                //กระจายข้อมูลใน dto schema and dto ชื่อเหมือนกัน
            }
        });
        return article

    }

    async getOneArticle(id: string) {
        const article = await this.prisma.articles.findUnique({
            where: { id }
        })
        return article
    }

}
