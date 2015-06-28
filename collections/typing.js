typing= new Mongo.Collection ("typing");
Meteor.methods({ 
addtyping: function (name){

   return typing.insert ({name: name});

}
});