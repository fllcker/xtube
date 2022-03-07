import { Document } from 'mongoose';
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export type VideosDocument = Videos & Document;


@Schema()
export class Videos {
    @Prop()
    previewURL: string;

    @Prop()
    videoURL: string;

    @Prop()
    title: string;

    @Prop()
    views: number;
}

export const VideosSchema = SchemaFactory.createForClass(Videos);