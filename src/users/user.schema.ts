import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { genSalt, hash } from 'bcrypt';
import { ObjectId } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  _id: ObjectId;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

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

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function () {
  if (this.password) {
    const salt = await genSalt(10);
    this.password = await hash(this.password, salt);
  }
});

export default UserSchema;
