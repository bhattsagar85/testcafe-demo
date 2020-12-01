import { Selector, t } from 'testcafe';

/**
 * @author Sagar
 * @version 1.0
 * @since 25/11/20
 */
export class LoginPage{

    txtBoxEmail: Selector
    txtBoxPassword: Selector;
    buttonSignIn: Selector;
    txtErrorMessage: Selector;


    constructor() {
        //Selectors
        //Except login link id & data-test are used which enables us to easily identify elements
        this.txtBoxEmail =  Selector("#email");
        this.txtBoxPassword = Selector('#passwd');
        this.buttonSignIn = Selector('#SubmitLogin');
        this.txtErrorMessage = Selector('.alert-danger');

    }
    /**
     * Login to the Automation Practice application.
     *
     * @param userName `<valid username>` for the login.
     * @param password `<valid password>` for the login.
     */
    async login(userName, password){
        await t
            .maximizeWindow()
            .typeText(this.txtBoxEmail, userName)
            .typeText(this.txtBoxPassword, password)
            .click(this.buttonSignIn);
    }

    /**
     * Invalid login check
     */

    async invalidLoginCheck(){
        await  t
            .expect(this.txtErrorMessage.exists).ok();
    }
}
