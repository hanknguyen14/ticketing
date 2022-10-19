import mongoose from "mongoose";

interface UserAttributes {
    email: string;
    password: string;
}

interface UserDocument extends mongoose.Document {
    email: string;
    password: string;
}

interface UserModel extends mongoose.Model<UserDocument> {
    build: (attributes: UserAttributes) => UserDocument;
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.statics.build = (userAttributes: UserAttributes) => {
    return new User(userAttributes);
}

export const User = mongoose.model<UserDocument, UserModel>('User', userSchema);

