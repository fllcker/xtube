import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {VideosService} from "./videos.service";
import {Videos} from "../schemas/videos.schema";

@Controller('videos')
export class VideosController {
    constructor(
        private videosService: VideosService
    ) {}


    @Get()
    async getAllVideos(): Promise<Videos[]> {
        return this.videosService.findAll();
    }

    @Get('/videoById/:id')
    async getVideoById(@Param('id') vid): Promise<Videos> {
        return this.videosService.getById(vid);
    }


    @Post('/testcreate')
    async testcreate(@Body() body): Promise<Videos> {
        return this.videosService.TestCreate(body)
    }

}
