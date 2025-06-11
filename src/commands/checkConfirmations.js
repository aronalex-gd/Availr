import fs from 'fs'
import chalk from 'chalk'

export const checkConfirmations = async () => {
    const confirmations = JSON.parse(fs.readFileSync('confirmations.json'));
    const emails = JSON.parse(fs.readFileSync('emails.json'));


    //console.log(`Email sent to :\n ${emails}`)
    // console.log(`Confirmations sent to :\n ${confirmations}`)

    console.log(`\n Emails Sent To:\n`);
    emails.forEach((user, index) => {
        console.log(`${index + 1}. ${user.Name || "Unnamed"} `,chalk.green(`<${user.Email}>`));
    });

    console.log(`\n Confirmations Sent To:\n`);
    confirmations.forEach((user, index) => {
        console.log(`${index + 1}. ${user.name || "Unnamed"} `,chalk.green(`<${user.email}>`));
    });
    
};