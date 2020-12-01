import { Selector, t } from 'testcafe';
/**
 * @author Sagar
 * @version 1.0
 * @since 25/09/20
 */
export class HomePage{
    tabTaskList: Selector;

    constructor() {
        //Selectors
        //If HTML page has id or data-test attributes for below fields then we can avoid complicated Selectors
        this.tabTaskList = Selector("button").withText("Task List");
    }

    /**
     * Verify whether login has been successfull or not.
     */
    async verifySuccessfulLogin(){
        await t
            .expect(this.tabTaskList.exists).ok();
    }

    /**
     * Navigate to Task List page from homepage.
     */
    async navigateToTaskList(){
        await t.click(this.tabTaskList);
    }

}
