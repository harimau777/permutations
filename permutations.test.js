// mocha unit tests
import {expect} from 'chai'
import {combinations,product,permutations} from './products'

describe('products', function () {
    describe('product', function () {
        it('should work for test data', function () {
        expect(product('me','hi'))
            .eql([["m","h"],["m","i"],["e","h"],["e","i"]])

        expect(product(['me','hi']))
            .eql([["m","h"],["m","i"],["e","h"],["e","i"]])

        expect(product({who:['me','you'],say:['hi','by']}))
            .eql([{"who":"me","say":"hi"},{"who":"me","say":"by"},{"who":"you","say":"hi"},{"who":"you","say":"by"}])

        expect(product(['me','you'],['hi','by']))
            .eql([["me","hi"],["me","by"],["you","hi"],["you","by"]])
    })



    })
    describe('combinations', function () {
        it('should work for test data', function () {
            expect(combinations([1,2,3],2)).eql([[1,1],[1,2],[1,3],[2,2],[2,3],[3,3]])
        });
    })

    describe('permutations', function () {
        it('should work for test data', function () {
            expect(permutations([1,2,3],2))
                .eql([[1,1],[1,2],[1,3],[2,1],[2,2],[2,3],[3,1],[3,2],[3,3]])
            expect(permutations('cat',2))
                .eql([["c","c"],["c","a"],["c","t"],["a","c"],["a","a"],["a","t"],["t","c"],["t","a"],["t","t"]])
        });

    })
})
