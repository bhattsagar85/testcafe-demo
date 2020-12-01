import {Role} from 'testcafe'
import {appUrl, password, userName} from "../automation-practice-app/config";
import {LoginPage} from "../automation-practice-app/page/login-page";
import {MyStore} from "../automation-practice-app/page/my-store";

    const loginPage = new LoginPage();
    const myStorePage = new MyStore();

    //This will open "https://www.automationpractice.com" & do login
    export const endUser = Role(`${appUrl}`, async t=>{
        await myStorePage.navigateToLoginPage();
        await loginPage.login(userName, password);
    }, {preserveUrl: true});
