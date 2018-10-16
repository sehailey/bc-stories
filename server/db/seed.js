const db = require('../db')
const {Story} = require('./models')

async function runSeed() {
    await db.sync({force: true})
    console.log('db synced!')
    console.log('seeding...')
    try {
        console.log(`seeded successfully`)
    } catch (err) {
        console.error(err)
        process.exitCode = 1
    } finally {
        console.log('closing db connection')
        await db.close()
        console.log('db connection closed')
    }
}

runSeed()
