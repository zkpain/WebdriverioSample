const Page = require('./page');

class DemoQaPage extends Page {



    async clickOptionButton(buttonName) {
        let button;
        switch (buttonName) {
            case "New Tab":
                button = await $('#tabButton')
                break;
            case "New Window":
                button = await $('#windowButton')
                break;
            case "New Window Message":
                button = await $('#messageWindowButton')
                break;
            default:
                console.log('No element was found')
                break;
        }
        await button.click()
    }
    
    async clickStartButton(){
        await $('#startStopButton').click();
    }

    async waitUntilProgressBarIsComplete() {
        const element = $('#progressBar');
        await element.waitUntil(
            async function () {
                return (await this.getText() == '100%')
            }, {
            timeout: 20000,
            timeoutMsg: "Text was not displayed"
        }
        )
    }
}

module.exports = new DemoQaPage();
