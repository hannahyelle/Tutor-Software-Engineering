function Profile(_tutorOrStudent, _name, _age, _country, _college) {
	this.tutorOrStudent = _tutorOrStudent;
	this.name = _name;
	this.age = _age;
	this.country = _country;
	this.college = _college;

	this.toString = function() {
		return this.tutorOrStudent + ":" + this.name + ":" + this.age + ":" + this.country + ":" + this.college;
	}
}

//returns the profile object of the student you searched for
function searchStudent(_searchName, _users) {
	searchName = _searchName;
	users = _users;
	for(let i=0; i<users.length; i++) {
		if(users[i].name == searchName && users[i].tutorOrStudent == "student") {
			return users[i];
		}
	}
}

//returns the profile object of the tutor you searched for
function searchTutor(_searchName, _users) {
	searchName = _searchName;
	users = _users;
	for(let i=0; i<users.length; i++) {
		if(users[i].name == searchName && users[i].tutorOrStudent == "tutor") {
			return users[i];
		}
	}
}

let users = [];
users[0] = new Profile("student", "will learn", 42, "usa", "umaine");
users[1] = new Profile("student", "fill er", 42, "usa", "umaine");
users[2] = new Profile("tutor", "will teach", 42, "usa", "umaine");

console.log(searchStudent("fill er", users).toString());

