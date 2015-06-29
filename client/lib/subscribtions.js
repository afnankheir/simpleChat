if (Meteor.isClient) 
{
	Meteor.subscribe("UserData");
	Meteor.subscribe("typing")
	Meteor.subscribe("messeges");
	Meteor.subscribe("rooms");
}
