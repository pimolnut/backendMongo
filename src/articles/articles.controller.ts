import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticleDTO } from './dto/article.dto';

@Controller('articles')
export class ArticlesController {
    //inject articlesevice
    constructor(private readonly ariticleservice: ArticlesService) {

    }
    @Get()
    //if Get path getAllAriticle ทำงาน
    async getAllAriticle() {
        return this.ariticleservice.getArticles()
    }

    // @UsePipes(new ValidationPipe())
    @Post()
    async createAticle(@Body() articledto: ArticleDTO) {
        return this.ariticleservice.create(articledto);
    }

    @Get(':id')
    async getOneArticles(@Param('id') id: string) {
        return this.ariticleservice.getOneArticle(id)
    }


}
