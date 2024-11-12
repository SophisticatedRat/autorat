import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.site()

        await LoginPage.login('standard_user', 'secret_sauce')
    })
})
describe('False Login application', () => {
    it('should not login with valid credentials', async () => {
        await LoginPage.site()

        await LoginPage.login('standard_user', 'secret_source')
    })
})
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.site()

        await LoginPage.login('locked_out_user', 'secret_sauce')
    })
})
describe('False Login application', () => {
    it('should not login with valid credentials', async () => {
        await LoginPage.site()

        await LoginPage.login('locked_out_user', 'secret_source')
    })
})
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.site()

        await LoginPage.login('problem_user', 'secret_sauce')
    })
})
describe('False Login application', () => {
    it('should not login with valid credentials', async () => {
        await LoginPage.site()

        await LoginPage.login('problem_user', 'secret_source')
    })
})
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.site()

        await LoginPage.login('performance_glitch_user', 'secret_sauce')
    })
})
describe('False Login application', () => {
    it('should not login with valid credentials', async () => {
        await LoginPage.site()

        await LoginPage.login('performance_glitch_user', 'secret_source')
    })
})
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.site()

        await LoginPage.login('error_user', 'secret_sauce')
    })
})
describe('False Login application', () => {
    it('should not login with valid credentials', async () => {
        await LoginPage.site()

        await LoginPage.login('error_user', 'secret_source')
    })
})
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.site()

        await LoginPage.login('visual_user', 'secret_sauce')
    })
})
describe('False Login application', () => {
    it('should not login with valid credentials', async () => {
        await LoginPage.site()

        await LoginPage.login('visual_user', 'secret_source')
    })
})