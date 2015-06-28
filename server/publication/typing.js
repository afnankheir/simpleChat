<<<<<<< HEAD

  Meteor.publish ("typing", function(){
    return typing.find();
});

=======
  if(Meteor.isServer)
{
  Meteor.publish ("Typing", function(){
  return Typing.find();
  });
}
>>>>>>> c1890c13f280b91a94eff5150907ae4a6dcc5bcf
