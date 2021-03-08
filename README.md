# React - Business Card Collection

This is a single page app that shows business cards. You can add, modify, or remove the contact information. <br /><br /><br />

| Feature | Description |
| -----: | :----------- |
|  Initial State | <img src="https://raw.githubusercontent.com/rebeccachoo/react-contact-information/main/screen.png"  width="400">|
|  One conatct added | <img src="https://raw.githubusercontent.com/rebeccachoo/react-contact-information/main/screen-added.png"  width="400">|
|  One conatct removed | <img src="https://raw.githubusercontent.com/rebeccachoo/react-contact-information/main/screen-removed.png"  width="400">|
|  Update a contact | <img src="https://raw.githubusercontent.com/rebeccachoo/react-contact-information/main/screen-update.png"  width="400">|
 
## Installation

You can simply download the files on your computer. <br />
In terminal, install by typing `npm install`.  <br />
And install confetti by typing `npm install --save react-confetti`.  <br />
And type `npm start` to start the program.

## Change initial data
In App.js on line number 29, there are four contact data. You can modify the values(such as "David") but not the items(such as "id").
```javascript
state = {
		lists: [
			{
				id: 1,
				date: new Date(),
				firstName: "David",
				lastName: "Green",
				description:
					"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
				address: "248 South Academy Drive Wilmette, IL 60091",
				phone: "111-111-1111",
			},
			{
				id: 2,
				date: new Date(),
				firstName: "Robert",
				lastName: "Julio",
				description: "lorem ips lorem ipsum lorem ipsum",
				address: "252 Courtland Drive Downingtown, PA 19335",
				phone: "111-111-1111",
			},
			{
				id: 3,
				date: new Date(),
				firstName: "Claire",
				lastName: "Carpenter",
				description: "lorem ipsum San diego",
				address: " Military Ave. Key West, FL 33040 ",
				phone: "111-111-1111",
			},
			{
				id: 4,
				date: new Date(),
				firstName: "Curtis",
				lastName: "Garrett",
				description: "lorem ipsum San diego",
				address: " 252 Courtland Drive",
				phone: "111-111-1111",
			},
		],
		showModal: false,
		modifyContact: false,
	};
```
 
## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate. 


##  Contributors

|  <img src="https://avatars.githubusercontent.com/u/254729?s=460&u=58ed23724180265db677357b4133d4ef970d6407&v=4" width="50" height="50" /> |<a href="https://github.com/rebeccachoo" target="_blank">Rebecca Choo</a>| 
| ----------- | ----------- |
