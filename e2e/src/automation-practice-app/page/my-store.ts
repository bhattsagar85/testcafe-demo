import { Selector, t} from "testcafe";
/**
 * @author Sagar
 * @version 1.0
 * @since 26/11/20
 */
export class MyStore{
    linkLogin: Selector;

    constructor() {
        this.linkLogin = Selector('a').withAttribute('href', 'http://automationpractice.com/index.php?controller=my-account');
    }

    /**
     * Navigate to Login page from Home page
     */

    async navigateToLoginPage(){
        await t.click(this.linkLogin);
    }
}
