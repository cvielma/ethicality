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
    const foundProfiles = Profiles.find({
      'name': { $regex: searchPattern, $options: 'ix' }
      }).fetch();

    console.log('FoundProducts: ' + JSON.stringify(foundProfiles[0]));

    if (foundProfiles && foundProfiles.length > 0) {
      //TODO: create heuristics to search for most probable brand
      return foundProfiles[0];
    }
    return null;

    //TODO: Also search for products
    // const foundProducts = Products.find({
    //   'name': { $regex: searchPattern, $options: 'ix' }
    // }).fetch();
    //
    // if (foundProducts && foundProducts.length > 0) {
    //   //TODO: create heuristics to search for most probable brand
    //   return foundProducts[0];
    // }
    // return null;
  }

});
