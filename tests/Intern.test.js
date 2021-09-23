const { it, expect } = require('@jest/globals');

const Intern = require('../lib/Intern.js');

describe("Intern Tests", () => {
    describe("test name", () => {
        it('name', () => {
            const intern = new Intern('William');
            expect(intern.name).toEqual('William');
        })
        it('id', () => {
            const intern = new Intern('Alex', '1');
            expect(intern.id).toEqual('1');
        })
        it('email', () => {
            const intern = new Intern('John', '2', 'myaddress@gmail.com');
            expect(intern.email).toEqual('myaddress@gmail.com');
        })
    })
})

describe("Intern Method Test", () => {
    describe("get name", () => {
        it('getName', () => {
            const intern = new Intern('William');
            expect(intern.getName()).toEqual('William');
        })
        it('getId', () => {
            const intern = new Intern('Alex', '1');
            expect(intern.getId()).toEqual('1');
        })
        it('geteEmail', () => {
            const intern = new Intern('John', '2', 'myaddress@gmail.com');
            expect(intern.getEmail()).toEqual('myaddress@gmail.com');
        })
    })

    it('getSchool', () => {
        const intern = new Intern('Veronica', '3', 'veronica@aol.com', 'UW');
        expect(intern.getSchool()).toEqual('UW');
    })
    it('getRole', () => {
        const intern = new Intern('Bob');
        expect(intern.getRole()).toEqual('Intern');
    })
})