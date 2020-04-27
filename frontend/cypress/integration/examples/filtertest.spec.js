describe('search filter test', function () {
    it('our app runs', function () {
        cy.visit('/');
        cy.get('[data-cy=login-button]').should('be.enabled');
        
    });


    it("login", function () {
        cy.visit("/");
        cy.get('[data-cy=login-email]').type('student@hogent.be');
        cy.get('[data-cy=login-password]').type('P@ssword123');
        cy.get('[data-cy=login-button]').click();

    });
    it("filter works",function(){
        cy.get('[data-cy=filterInput]').type('sh');
        cy.get('[data-cy=filmCard]').should('have.length', 3);

    });
})

describe('hide viewed filter test', function () {
    it('our app runs', function () {
        cy.visit('/');
        cy.get('[data-cy=login-button]').should('be.enabled');
        
    });


    it("login", function () {
        cy.visit("/");
        cy.get('[data-cy=login-email]').type('student@hogent.be');
        cy.get('[data-cy=login-password]').type('P@ssword123');
        cy.get('[data-cy=login-button]').click();

    });
    it("filter works",function(){
        cy.get('[data-cy=hider').find('input').click({force:true});
        cy.get('[data-cy=filmCard]').should('have.length', 98);

    });
})