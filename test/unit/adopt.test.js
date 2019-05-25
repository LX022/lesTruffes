'use strict';

var expect = require('expect.js');

describe('models/adopt', function () {
    // before(function () {
    //     return require('../../models').sequelize.sync();
    // });

    beforeEach(function () {
        this.Person = require('../../models').Person;
        this.Adopt = require('../../models').Adopt;
    });

    describe('create', function () {
        it('to adopt a dog', function () {
            return this.Person.create({ username: 'johndoe' }).bind(this).then(function (user) {
                return this.Task.create({ title: 'adopt', UserId: user.id }).then(function (task) {
                    expect(task.title).to.equal('a title');
                });
            });
        });
    });
});
