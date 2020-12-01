const args = require('minimist')(
    process.argv.slice(2), {
        string: ['against'],
        default: {
            'against': 'qa'
        }
    });


export const against: string = args['against']

const urls = {
    local:{
        appUrl: 'https://localhost:4200'
    },

    qa: {
        appUrl: 'http://automationpractice.com/'
    },
    dev: {
        appUrl: 'https://www.google.co.in',
    },
    prod: {
        appUrl: 'https://www.google.co.in'
    }
};

const validCredential = {
    local:{
        userName: 'localUser',
        password: 'Test@123',
    },
    qa: {
        userName: 'bhattsag@gmail.com',
        password: 'Test@123',

    },
    dev: {
        userName: 'devUser',
        password: 'Test2123',
    }
};
export const userName = validCredential[against].userName;
export const password = validCredential[against].password;
export const appUrl = urls[against].appUrl;
