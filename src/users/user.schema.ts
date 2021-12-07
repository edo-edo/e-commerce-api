import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import bcrypt from 'bcrypt';

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

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<User>('save', async function () {
  if (this.password) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

export default UserSchema;
