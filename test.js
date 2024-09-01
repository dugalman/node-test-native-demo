import test from 'node:test'
import assert from 'node:assert'

test("example test", t => {
    // console.log(t)
    assert.equal(1, 1)
})

test("example object test", () => {
    assert.deepEqual({ a: 1 }, { a: "1" })
})


test("example object test", () => {
    assert.deepStrictEqual({ a: 1 }, { a: 1 }, 'lo objectos no son iguales')
})

test('async test', async t => {

    const number = await Promise.resolve(3)
    assert.equal(number, 3)
})


test("fetch test", async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    const json = await response.json()
    assert.equal(json.name, 'bulbasaur')
})


test("fetch to must be fail", async () => {
    const tryFetch = async () => {
        try{
        const response = await fetch('aaaaa')
        const json = await response.json()
        return json
        }catch{
            throw new SyntaxError('cualquiercosa')
        }
    }

    assert.rejects(tryFetch,'/^SyntaxError: cualquiercosa/^')
})

