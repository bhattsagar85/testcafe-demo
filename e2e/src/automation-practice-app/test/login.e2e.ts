import {annotateTestOutput, randomString} from './../../helper/helper-functions';
import {LoginPage} from "../page/login-page";
import {password, userName} from "../config";
import {MyAccount} from "../page/my-account";
import {MyStore} from "../page/my-store";

/** Create task test
 * @author Sagar
 * @version 1.0
 * @since 26/09/20
 */

const taskData = require('./../../testdata/testdata.json')
const loginPage = new LoginPage();
const myAccountPage = new MyAccount();
const myStorePage = new MyStore();
// Get random name for the task
// let taskName = randomString(10);
let taskName = "my new task";

fixture `Verify Login Scenarios`
    .page `http://automationpractice.com/`
    .before(async ()=>{
        annotateTestOutput(` As an end user, I want to login to the practise account`);
        annotateTestOutput(` Given user navigates to My Store page `);
    });
test(`Valid Login`, async t=>{
    await myStorePage.navigateToLoginPage();
    await loginPage.login(userName, password);
    await myAccountPage.verifyLogin();
});

test(`Invalid Login`, async t=>{
    await myStorePage.navigateToLoginPage();
    await loginPage.login("bhattsag@gmail.com", 'test123');
    await loginPage.invalidLoginCheck();
});
