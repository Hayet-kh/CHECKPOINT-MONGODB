// 01. create a new database called contact
const database = "contact";
use(database);

// 02. Create a collection called "contactlist"
db.createCollection("contactList");

// 03. Insert many documents into the collection
db.contactList.insertMany([
	{
		Last_name: "Ben",
		First_name: "Moris",
		Email: "ben@gmail.com",
		age: 26,
	},
	{
		Last_name: "Kefi",
		First_name: "Seif",
		Email: "kefi@gmail.com",
		age: 15,
	},
	{
		Last_name: "Emilie",
		First_name: "brouge",
		Email: "emilie.b@gmail.com",
		age: 40,
	},
	{
		Last_name: "Alex",
		First_name: "brown",
		age: 4,
	},
	{
		Last_name: "Denzel",
		First_name: "Washington",
		age: 3,
	},
]);

// 04. Display all the information about only one person using his ID.
db.contactList.find({ _id: ObjectId("66f6e72b50834ed77c615ebd") });

// 05. Display all the contacts with an age >18.
db.contactList.find({ age: { $gt: 18 } });

// 06. Display all the contacts with an age>18 and name containing "ah".
db.contactList.find({
	age: { $gt: 18 },
	name: /ah/,
});

// 07. Change the contact's first name from"Kefi Seif" to "Kefi Anis".
db.contactList.updateOne(
	{ Last_name: "Kefi" },
	{ $set: { First_name: "Anis" } }
);
db.contactList.find({ Last_name: "Kefi" });

// 08. Delete the contacts that are aged under <5.
db.contactList.deleteMany({ age: { $lt: 5 } });

// 09. Display all of the contacts list.
db.contactList.find();
