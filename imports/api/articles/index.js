import { Mongo } from 'meteor/mongo';
// import SimpleSchema from '../simpleSchema.configs';

const Articles = new Mongo.Collection('articles');

// News.attachSchema(Schemas.News);

export default Articles;
