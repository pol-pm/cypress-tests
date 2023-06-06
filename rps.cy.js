describe("RPS game tests", () => {
  // Open the URL before each test
  beforeEach(() => {
    cy.visit("https://cs.pol.pm/RPS/");
  });

  // Play the game with the 'Rock' option and checks the result
  it("play the game with rock option and checks the result", () => {
    // Click the 'Rock' button that should exist
    cy.get('[data-cy="rock"]').should("exist").click();

    // Check that the user option is set to 'Rock'
    cy.get('[data-cy="user-option"]').should("have.text", "Rock");

    // Check the computer option
    cy.get('[data-cy="computer-option"]').then((option) => {
      // If the computer option is set to 'Rock'
      if (option.text().includes("Rock")) {
        cy.get('[data-cy="result"]').contains("It is a tie!"); // The result is a tie
      }
      // If the computer option is set to 'Paper'
      else if (option.text().includes("Paper")) {
        cy.get('[data-cy="result"]').contains("You lose!"); // The result is a computer win
      }
      // If the computer option is set to 'Scissors'
      else {
        cy.get('[data-cy="result"]').contains("You win!"); // The result is a user win
      }
    });
  });

  // Play the game with the 'Paper' option and checks the result
  it("play the game with paper option and checks the result", () => {
    // Click the 'Paper' button that should exist
    cy.get('[data-cy="paper"]').should("exist").click();

    // Check that the user option is set to 'Paper'
    cy.get('[data-cy="user-option"]').should("have.text", "Paper");

    // Check the computer option
    cy.get('[data-cy="computer-option"]').then((option) => {
      // If the computer option is set to 'Rock'
      if (option.text().includes("Rock")) {
        cy.get('[data-cy="result"]').contains("You win!"); // The result is a user win
      }
      // If the computer option is set to 'Paper'
      else if (option.text().includes("Paper")) {
        cy.get('[data-cy="result"]').contains("It is a tie!"); // The result is a tie
      }
      // If the computer option is set to 'Scissors'
      else {
        cy.get('[data-cy="result"]').contains("You lose!"); // The result is a computer win
      }
    });
  });

  // Play the game with the 'Scissors' option and checks the result
  it("play the game with scissors option and checks the result", () => {
    // Click the 'Scissors' button that should exist
    cy.get('[data-cy="scissors"]').should("exist").click();

    // Check that the user option is set to 'Scissors'
    cy.get('[data-cy="user-option"]').should("have.text", "Scissors");

    // Check the computer option
    cy.get('[data-cy="computer-option"]').then((option) => {
      // If the computer option is set to 'Rock'
      if (option.text().includes("Rock")) {
        cy.get('[data-cy="result"]').contains("You lose!"); // The result is a computer win
      }
      // If the computer option is set to 'Paper'
      else if (option.text().includes("Paper")) {
        cy.get('[data-cy="result"]').contains("You win!"); // The result is a user win
      }
      // If the computer option is set to 'Scissors'
      else {
        cy.get('[data-cy="result"]').contains("It is a tie!"); // The result is a tie
      }
    });
  });
});