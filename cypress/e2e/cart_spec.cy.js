describe("Cart Test", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
  });

  it("Should add a product to the cart", () => {
    cy.get(".inventory_item").first().find(".btn_inventory").click();
    cy.get(".shopping_cart_badge").should("have.text", "1");
  });

  it("Should remove product from the cart", () => {
    cy.get(".inventory_item").first().find(".btn_inventory").click();
    cy.get(".shopping_cart_badge").should("have.text", "1");
    cy.get(".inventory_item").first().find(".btn_secondary").click();
    cy.get(".shopping_cart_badge").should("not.exist");
  });

  it("Should sort products by price low to high", () => {
    cy.get(".product_sort_container").select("lohi");
    cy.get(".inventory_item_price").then((prices) => {
      const priceTexts = [...prices].map((el) =>
        parseFloat(el.innerText.replace("$", ""))
      );
      const sortedPrices = [...priceTexts].sort((a, b) => a - b);
      expect(priceTexts).to.deep.equal(sortedPrices);
    });
  });

  it("Should complete checkout step one and reach step two", () => {
    cy.get(".inventory_item").first().find(".btn_inventory").click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type("John");
    cy.get('[data-test="lastName"]').type("Doe");
    cy.get('[data-test="postalCode"]').type("12345");
    cy.get('[data-test="continue"]').click();

    cy.url().should("include", "/checkout-step-two.html");
  });
});
