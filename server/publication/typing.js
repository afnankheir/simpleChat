  if(Meteor.isServer)
{
  Meteor.publish ("typing", function(){
    return typing.find();
  });
}
