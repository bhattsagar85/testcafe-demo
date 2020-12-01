import { t } from 'testcafe';

    /**
     * @author Sagar
     * @version 1.0
     * @since 26/09/20
     */

/** Print custom message in the console
 *
 * @param message `<custom message to be printed in the console>`
 */
export const annotateTestOutput = function (message: string) {
        /* tslint:disable-next-line:no-console */
        console.log(`${message}`);
    };

/** Clear text field
 *
 * @param txtBox `<textbox selector>` from which data needs to be cleared
 */
export const clearTextField = async (txtBox: Selector) => {
        await t
            .click(txtBox)
            .pressKey('ctrl+a delete');
    }

/** Create random string
 *
 * @param length <length> of String size to be required
 */
export const randomString = function (length: number): string {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return `${text}`;
};


