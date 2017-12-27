import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

const Products = new Mongo.Collection('products');
const Profiles = new Mongo.Collection('profiles');

Meteor.methods({

  'profiles.searchByName'(text) {
    check(text, String);

    // Find Products``
    const searchPattern = '.*' + text + '.*';
    const foundProducts = Products.find({
      'name': { $regex: searchPattern, $options: 'ix' }
    }).fetch();

    console.log('FoundProducts: ' + JSON.stringify(foundProducts[0]));

    //TODO: Also search for profile
    if (foundProducts && foundProducts.length > 0) {
      //TODO: create heuristics to search for most probable brand
      return foundProducts[0];
    }
    return null;
  }

});
