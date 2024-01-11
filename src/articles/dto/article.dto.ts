import { IsDate, IsDateString, IsString } from "class-validator"

//สร้าง object ที่จะ fix ว่าข้อมูลจะมีอะไรบ้าง object สำหรับการส่งและรับขอมูลของ article
export class ArticleDTO {
    @IsString()
    author: string

    @IsString()
    title: string

    @IsString()
    description: string

    @IsString()
    url: string

    @IsString()
    urlToImage: string

    @IsDateString()
    publishedAt: string

    @IsString()
    content: string
}
