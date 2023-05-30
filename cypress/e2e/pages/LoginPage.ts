class LoginPage {
    private readonly usernameInput = "input[name = 'username']";
    private readonly passwordInput = "input[name = 'password']";
    private readonly loginButton = "button[type = 'submit']";

    public visit(): void {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    public enterUsername(username: string): void {
        cy.get(this.usernameInput).type(username);
    }

    public enterPassword(password: string): void {
        cy.get(this.passwordInput).type(password);
    }

    public clickLoginButton(): void {
        cy.get(this.loginButton).click();
    }
}

export default new LoginPage();


