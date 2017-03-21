import { Meteor  } from 'meteor/meteor';
import context from './context';
import initAPIs from './initAPIs';
import fixture from './fixture';

Meteor.startup(() => {
  initAPIs(context);
  fixture(context);
});
