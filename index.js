"use strict";

/// Level first ///

const actor = {};
actor.name = "Robert";
actor.surname = "Downey";
console.log("actor:", actor);

actor.name = "John";
console.log("actor:", actor);

delete actor.name;
console.log("actor:", actor);

/// --------------------------------------------------- ///

const firstName = "Khalil";
const lastName = "Aliiev";
const phone = parseFloat(prompt("Enter ur phone number:"));

const contacts = {
  phone,
  mail: "mail@gmail.com",
};

const personInfo = {
  firstName,
  lastName,
  contacts,
};

// console.log("contacts", contacts);
console.log("personInfo:", personInfo);

/// --------------------------------------------------- ///

const topSeries = ["Peaky Blinders", "The Walking Dead", "Chernobyl"];
topSeries.unshift("Breaking bad");
topSeries.push("Vikings");

console.log("topSeries:", topSeries);

/// Level 2 ///

const employee = {
  salary: 2000,
  taxes: 200,
  position: "front-end developer",
  level: "middle",
  showInfo: () => {
    return `${employee.level}, ${employee.position}, his salary equal to ${employee.salary}`;
  },
};
for (let key in employee) {
  if (typeof employee[key] === "number") {
    employee[key] *= 2;
  }
}
console.log("Level second - employee:", employee.showInfo());

const employee2 = {
  salary: 6500,
  taxes: 770,
  position: "back-end developer",
  level: "senior",
  showInfo: () => {
    return `${employee2.level}, ${employee2.position}, his salary equal to ${employee2.salary}`;
  },
};
console.log("Level second - employee2:", employee2.showInfo());

/// --------------------------------------------------- ///

const sumInput = () => {
  const arr = [];
  for (let i = 0; ; i++) {
    const arrValue = prompt("Enter values of Array:");
    if (arrValue === null || arrValue === "") {
      break;
    }
    arr.push(parseFloat(arrValue));
  }
  console.log("arr:", arr);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  console.log("result:", result);
};
sumInput();

/// --------------------------------------------------- ///

const person = {
  name: "John",
  age: 30,
  job: "software engineer",
  address: {
    city: "New York",
    country: "USA",
  },
};

const {
  name: personName,
  age,
  job: currentJob,
  address: { city, country: currentCountry },
} = person;
console.log(
  "Destructured person:",
  personName,
  age,
  currentJob,
  city,
  currentCountry
);

/// --------------------------------------------------- ///

const books = {
  countries: [
    {
      country: "England",
      authors: [
        {
          author: "Arthur Conan Doyle",
          books: [
            {
              title: "Sherlock Holmes",
              year: 1887,
              genre: "Novel",
            },
            {
              title: "Mystery of the Secret Dolls",
              year: 1912,
              genre: "Detective",
            },
            {
              title: "Red's Circus",
              year: 1927,
              genre: "Detective",
            },
          ],
        },
      ],
    },
    {
      country: "Ukraine",
      authors: [
        {
          author: "Max Kidruk",
          books: [
            {
              title: "Stronghold",
              year: 2013,
              genre: "Novel",
            },
            {
              title: "New dark ages",
              year: 2023,
              genre: "Novel",
            },
          ],
        },
        {
          author: "Taras Shevchenko",
          books: [
            {
              title: "Kobzar",
              year: 1840,
              genre: "Novel",
            },
          ],
        },
      ],
    },
  ],
};

const {
  countries: [
    {
      authors: [
        {
          books: [{ title: firstBook }, {}, { title: thirdBook }],
        },
      ],
    },
  ],
} = books;

console.log("firstBook:", firstBook);
console.log("thirdBook:", thirdBook);

const {
  countries: [
    {},
    {
      authors: [
        {
          books: [{}, { title: secondKidrukBookName }],
        },
      ],
    },
  ],
} = books;

console.log("secondKidrukBookName:", secondKidrukBookName);

const {
  countries: [
    {},
    {
      authors: [
        {},
        {
          books: [{ year: yearOfPublicationKobzar }],
        },
      ],
    },
  ],
} = books;

console.log("yearOfPublicationKobzar:", yearOfPublicationKobzar);
