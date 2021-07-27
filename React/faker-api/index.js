const express = require('express');
const faker = require('faker');

const app = express();

class User {
    constructor() {
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}


class Company {
    constructor() {
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address={
            streetName :faker.address.streetName(),
            city : faker.address.cityName(),
            state : faker.address.state(),
            zipcode : faker.address.zipCode(),
            country : faker.address.country(),
        }
    }
}
  

app.get('/api/users/new', (req, res) => {
    let user = new User();
    res.json(user);
})

app.get('/api/companies/new', (req, res) => {
    let company = new Company();
    res.json(company);
})

app.get('/api/user/company', (req, res) => {
    let company = new Company();
    let user = new User();
    res.json({company,user});
})

app.listen(8000, () => console.log("listening on port"))