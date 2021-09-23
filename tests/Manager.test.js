const { it, expect } = require('@jest/globals');

const Manager = require('../lib/Manager.js');

describe("Manager Tests", () => {
    describe("test name", () => {
        it('name', () => {
            const manager = new Manager('William');
            expect(manager.name).toEqual('William');
        })
        it('id', () => {
            const manager = new Manager('Alex', '1');
            expect(manager.id).toEqual('1');
        })
        it('email', () => {
            const manager = new Manager('John', '2', 'myaddress@gmail.com');
            expect(manager.email).toEqual('myaddress@gmail.com');
        })
    })
})

describe("Manager Method Test", () => {
    describe("get name", () => {
        it('getName', () => {
            const manager = new Manager('William');
            expect(manager.getName()).toEqual('William');
        })
        it('getId', () => {
            const manager = new Manager('Alex', '1');
            expect(manager.getId()).toEqual('1');
        })
        it('geteEmail', () => {
            const manager = new Manager('John', '2', 'myaddress@gmail.com');
            expect(manager.getEmail()).toEqual('myaddress@gmail.com');
        })
    })

    it('getOfficeNumber', () => {
        const manager = new Manager('Veronica', '3', 'veronica@aol.com', '555-682-4358');
        expect(manager.getOfficeNumber()).toEqual('555-682-4358');
    })
    it('getRole', () => {
        const manager = new Manager('Bob');
        expect(manager.getRole()).toEqual('Manager');
    })
})