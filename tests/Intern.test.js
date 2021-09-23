const { it, expect } = require('@jest/globals');
const Engineer = require("../lib/Engineer.js")

describe("Engineer Tests", () => {
    describe("test name", () => {
        it('name', () => {
            const engineer = new Engineer('William');
            expect(engineer.name).toEqual('William');
        })
        it('id', () => {
            const engineer = new Engineer('Alex', '1');
            expect(engineer.id).toEqual('1');
        })
        it('email', () => {
            const engineer = new Engineer('John', '2', 'myaddress@gmail.com');
            expect(engineer.email).toEqual('myaddress@gmail.com');
        })
    })
})

describe("Employee Method Test", () => {
    describe("get name", () => {
        it('getName', () => {
            const engineer = new Engineer('William');
            expect(engineer.getName).toEqual('William');
        })
        it('getId', () => {
            const engineer = new Engineer('Alex', '1');
            expect(engineer.GetId).toEqual('1');
        })
        it('geteEmail', () => {
            const engineer = new engineer('John', '2', 'myaddress@gmail.com');
            expect(engineer.GetEmail).toEqual('myaddress@gmail.com');
        })
    })

    it('getGitHub', () => {
        const engineer = new Engineer('Veronica', '3', 'veronica@aol.com', 'tacocat');
        expect(engineer.getGitHub()).toEqual('harpo');
    })
    it('getRole', () => {
        const engineer = new Engineer('Bob');
        expect(engineer.getRole()).toEqual('Engineer');
    })
})