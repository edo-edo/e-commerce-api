import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: number;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({
    required: true,
    enum: ['email', 'google', 'facebook'],
    default: 'email',
  })
  provider: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
