describe('web: Kater component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=kater--primary&args=title;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Kater!');
    });
});
