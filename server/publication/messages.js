<<<<<<< HEAD

Meteor.publish("messeges",function(){
  return messeges.find();
  });

=======
if (Meteor.isServer)
{
  Meteor.publish("Messages",function(){
  return Messages.find();
});
}
>>>>>>> c1890c13f280b91a94eff5150907ae4a6dcc5bcf
