describe('Film list test, correct', function () {
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
    it('mock films get', function () {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Films/GetNextFilms?skip=0',
            status: 200,
            response: 'fixture:films.json'
        });

        cy.get('[data-cy=filmCard]').should('have.length', 4);
    });

})


describe('Film list test on api error', function () {
    it('our app runs', function () {
        cy.visit('/');
        cy.get('[data-cy=login-button]').should('be.enabled');
    });
    it("login", function () {
        cy.visit("/");
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Films/GetNextFilms?skip=0',
            status: 500,
            response: 'ERROR'
        });
        cy.get('[data-cy=login-email]').type('student@hogent.be');
        cy.get('[data-cy=login-password]').type('P@ssword123');
        cy.get('[data-cy=login-button]').click();

    });
    it('on error should show error message', function () {
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Films/GetNextFilms?skip=0',
            status: 500,
            response: 'ERROR'
        });

        cy.get('[data-cy=appError]').should('be.visible');
    });
})
describe('Favourites list test on api succes', () => {
    it('our app runs', function () {
        cy.visit('/');
        cy.get('[data-cy=login-button]').should('be.enabled');
    });
    it("login & test favourites list", function () {
        cy.visit("/film/favo");
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Films/GetFavourites',
            status: 200,
            response: 'fixture:favourites.json'
        });
        cy.get('[data-cy=login-email]').type('student@hogent.be');
        cy.get('[data-cy=login-password]').type('P@ssword123');
        cy.get('[data-cy=login-button]').click();
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Films/GetFavourites',
            status: 200,
            response: 'fixture:favourites.json'
        });


        cy.get('[data-cy=filmCard]').should('have.length', 2);
    });
    
})

describe('Favourites list test on api error', () => {
    it('our app runs', function () {
        cy.visit('/');
        cy.get('[data-cy=login-button]').should('be.enabled');
    });
    it("login & test favourites list", function () {
        cy.visit("/film/favo");
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Films/GetFavourites',
            status: 500,
            response: 'ERROR'
        });
        cy.get('[data-cy=login-email]').type('student@hogent.be');
        cy.get('[data-cy=login-password]').type('P@ssword123');
        cy.get('[data-cy=login-button]').click();
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Films/GetFavourites',
            status: 500,
            response: 'ERROR'
        });


        cy.get('[data-cy=appError]').should('be.visible');
    });
    
})
describe('Recommendations list test on api succes', () => {
    it('our app runs', function () {
        cy.visit('/');
        cy.get('[data-cy=login-button]').should('be.enabled');
    });
    it("login & test favourites list", function () {
        cy.visit("/film/reco");
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Films/GetRecommendBasedOnFavourites',
            status: 200,
            response: 'fixture:recommendations.json'
        });
        cy.get('[data-cy=login-email]').type('student@hogent.be');
        cy.get('[data-cy=login-password]').type('P@ssword123');
        cy.get('[data-cy=login-button]').click();
        cy.server();
        cy.route({
            method: 'GET',
            url: '/api/Films/GetRecommendBasedOnFavourites',
            status: 200,
            response: 'fixture:recommendations.json'
        });


        cy.get('[data-cy=filmCard]').should('have.length', 2);
    });
    
})