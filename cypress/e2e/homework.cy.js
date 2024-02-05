let testData = [{
  fieldSelector: '#exampleInputEmail1',
  inputValue: "viktoriya.matvienko86@gmail.com",
  fieldSelector1: '#exampleInputPassword1',
  inputValue1: "123456789",
},
  {
    fieldSelector: '#exampleInputEmail1',
    inputValue: "viktoriya@gmail.com",
    fieldSelector1: '#exampleInputPassword1',
    inputValue1: "0987654321",

  }]

testData.forEach(testData => {
  it(`Field ${testData.fieldSelector} is required: ${testData}`, () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[alt="Material Dark Theme"]').click();
    cy.get('a[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
    cy.get(testData.fieldSelector).type(`${testData.inputValue}`);
    cy.get(testData.fieldSelector1).type(`${testData.inputValue1}`);
    cy.get('nb-card:contains("Basic form") .custom-checkbox').click();
    cy.get('nb-card:contains("Basic form") button').click();
  })
})


