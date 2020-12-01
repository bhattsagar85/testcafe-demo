
import {annotateTestOutput} from "../../helper/helper-functions";
import {CommonHeaderSection} from "../page/common-header-section";
import {endUser} from "../../helper/user-login";


/**
 * @author Sagar
 * @version 1.0
 * @since 26/11/20
 */

const commonHeader = new CommonHeaderSection();

fixture `My cart`
    .before(async ()=>{
        annotateTestOutput(` As an end user, I want to search item from store & add it to my cart`);
        annotateTestOutput(` Given user already has account & logged in to his/her account `);
    });
test(`Search item from the store, add to cart & verify it`, async t=>{
    await t.useRole(endUser);
    await commonHeader.searchItems("dress");
});
