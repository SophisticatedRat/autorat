import { $ } from '@wdio/globals'
import Page from './sitenav.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get userInput () {
        return $('#user-name');
    }

    get passInput () {
        return $('input[type="password"]');
    }

    get loginBtn () {
        return $('#login-button');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.userInput.setValue(username);
        await this.passInput.setValue(password);
        await this.loginBtn.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    site () {
        return super.site('');
    }
}

export default new LoginPage();