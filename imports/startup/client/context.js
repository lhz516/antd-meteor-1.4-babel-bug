import { Meteor } from 'meteor/meteor';
// import { Accounts } from 'meteor/accounts-base';
import { Random } from 'meteor/random';
import Collections from '../../api/collections';
// import SimpleSchema from '../../api/simpleSchema.configs';
import { Tracker } from 'meteor/tracker';
import { ReactiveDict } from 'meteor/reactive-dict';
import Global from './global';
import moment from 'moment';

// import 'moment/locale/zh-cn';
// moment.locale('zh-cn');

const LocalState = new ReactiveDict();

if (Meteor.isDevelopment) {
  this.Collections = Collections;
  this.Global = Global;
  this.moment = moment;
  this.LocalState = LocalState;
}

export default {
  Meteor,
  // Accounts,
  Random,
  Collections,
  // SimpleSchema,
  Tracker,
  LocalState,
  Global,
  moment,
};
