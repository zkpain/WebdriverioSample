

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get dashboardTitle() { return $('.title'); }

    get errorMessage() { return $('.error-message-container.error'); }
}

module.exports = new SecurePage();
