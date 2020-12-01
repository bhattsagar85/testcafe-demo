import { Selector, t} from "testcafe";

/**
 * @author Sagar
 * @version 1.0
 * @since 26/11/20
 */
export class CommonHeaderSection{
    txtBoxSearch: Selector;
    btnSearch: Selector;

    constructor() {
        this.txtBoxSearch = Selector('#search_query_top');
        this.btnSearch = Selector('button').withAttribute('name', 'submit_search');
    }

    /**
     *
     * @param item to be searched
     */
    async searchItems(item){
        await t
            .typeText(this.txtBoxSearch, item)
            .click(this.btnSearch);
    }
}
