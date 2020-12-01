import { Selector, t} from "testcafe";

/**
 * @author Sagar
 * @version 1.0
 * @since 25/11/20
 */
export class MyAccount{
    lblMyAccount: Selector;
    lstMenuOrderHistory: Selector;

    constructor() {
        this.lblMyAccount = Selector('.page-heading');
        this.lstMenuOrderHistory = Selector('a').withText('Order history and details');

    }

    /**
     * Verify successful login
     */

    async verifyLogin(){
        await t
            .expect(this.lblMyAccount.exists).ok();
    }
}
