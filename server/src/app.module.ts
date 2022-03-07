import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VideosModule } from './videos/videos.module';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        VideosModule,
        MongooseModule.forRoot('mongodb+srv://root:root@cluster0.nlfjh.mongodb.net/xtube?retryWrites=true&w=majority')
    ]
})
export class AppModule {}
