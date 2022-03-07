import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Videos, VideosDocument} from "../schemas/videos.schema";
import { Model } from 'mongoose'
import {CreateVideoDto} from "../dtos/create-video.dto";

@Injectable()
export class VideosService {
    constructor(
        @InjectModel(Videos.name) private videosModel: Model<VideosDocument>
    ) {}

    async findAll(): Promise<Videos[]> {
        return this.videosModel.find().exec();
    }

    async getById(vid): Promise<Videos> {
        return this.videosModel.findById(vid).exec();
    }

    async TestCreate(createVideoDto: CreateVideoDto): Promise<Videos> {
        const createdVideo = new this.videosModel(createVideoDto);
        return createdVideo.save();
    }
}
