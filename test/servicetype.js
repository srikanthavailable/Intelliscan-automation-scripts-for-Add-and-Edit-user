
describe('IntelliscanAdmin', function () {

  before(function (browser, done) {
    // runs before all tests in this block
    done();
  });

  beforeEach(function (browser, done) {
    // runs before each test in this block
    done();
  });

  it('TC-1=>To check if the Intelliscan admin can log in:', function (browser, done) {
    browser.pause(1000);
    browser.init();
    browser.expect.element('.login-form-section').to.be.visible;
    browser.expect.element('.float-input:nth-child(1)').to.be.visible;
    browser.setValue('.float-input:nth-child(1)', ['asif@divami.com', browser.Keys.TAB]);
    browser.expect.element('.form-group:nth-child(2) .float-input').to.be.visible;
    browser.setValue('.form-group:nth-child(2) .float-input', 'Divami@123');
    browser.expect.element('.login-button').to.be.visible;
    browser.click('.login-button');
    browser.pause(1000);
    browser.expect.element('.dashboard-container').to.be.visible;
    browser.pause(10000);
  });

  it('TC-2=> check if all users are displayed', function (browser, done) {
    browser.expect.element('.customer-icon').to.be.visible;
    browser.click('.customer-icon');
    browser.pause(1000);
  });

  it('TC=3> Check add user', function (browser, done) {
    browser.expect.element('.add-customer-img').to.be.visible;
    browser.click('.add-customer-img');
    browser.pause(1000);
    
    browser.expect.element('p-dialog app-add-user form input[formcontrolname="firstName"]').to.be.visible;
    browser.setValue('p-dialog app-add-user form input[formcontrolname="firstName"]', 'avinash');
    browser.pause(1000);

    browser.expect.element('p-dialog app-add-user form input[formcontrolname="lastName"]').to.be.visible;
    browser.setValue('p-dialog app-add-user form input[formcontrolname="lastName"]', 'kumar');
    browser.pause(1000);


    browser.expect.element('p-dialog app-add-user form input[formcontrolname="email"]').to.be.visible;
    browser.setValue('p-dialog app-add-user form input[formcontrolname="email"]', 'avinash24552@divami.com');
    browser.pause(1000);


    browser.expect.element('p-dialog app-add-user form input[formcontrolname="mobile"]').to.be.visible;
    browser.setValue('p-dialog app-add-user form input[formcontrolname="mobile"]', '7569275693');
    browser.pause(1000);

    browser.expect.element('p-dialog app-add-user form p-calendar span input').to.be.visible;
    // console.log("prev value", browser.getValue('p-dialog app-add-user form p-calendar span input'));
    browser.setValue('p-dialog app-add-user form p-calendar span input', 'Mar 6 2019');
    browser.pause(1000);

    browser.expect.element('p-dialog app-add-user form p-calendar span div table tbody tr td').to.be.visible;
    browser.click('p-dialog app-add-user form p-calendar span div table tbody tr:nth-child(4) td:nth-child(4)');
    // console.log("post value", browser.getValue('p-dialog app-add-user form p-calendar span input'));
    // browser.setValue('p-dialog app-add-user form input[formcontrolname="mobile"]','7569275693');
    browser.pause(10000);

    browser.expect.element('.create-button').to.be.visible;
    browser.click('.create-button');
    browser.pause(10000);
    

  })

  it('TC-2=> Edit user:', function (browser) {


    browser.expect.element('.customer-icon').to.be.visible;
    browser.click('.customer-icon');
    browser.pause(100);
    browser.expect.element('tr.cursor-pointer').to.be.visible;
    browser.click('tr.cursor-pointer');
    browser.pause(100);
    browser.expect.element('.edit-icon').to.be.visible;
    browser.click('.edit-icon');
    browser.pause(100);

    browser.expect.element('app-user-details p-dialog input[formcontrolname="firstName"]').to.be.visible;
    browser.pause(1000);
    browser.clearValue('app-user-details p-dialog input[formcontrolname="firstName"]');
    browser.pause(1000);
    browser.setValue('app-user-details p-dialog input[formcontrolname="firstName"]', "srikanth");
    browser.pause(100);

    browser.expect.element('app-user-details p-dialog input[formcontrolname="lastName"]').to.be.visible;
    browser.pause(100);
    browser.clearValue('app-user-details p-dialog input[formcontrolname="lastName"]');
    browser.pause(100);
    browser.setValue('app-user-details p-dialog input[formcontrolname="lastName"]', "jakkula");
    browser.pause(1000);

    browser.expect.element('app-user-details p-dialog #mobileno').to.be.visible;
    browser.pause(100);
    browser.clearValue('app-user-details p-dialog #mobileno');
    browser.pause(100);
    browser.setValue('app-user-details p-dialog #mobileno', "9985481106");
    browser.pause(100);

    browser.expect.element('app-user-details p-dialog input[formcontrolname="email"]').to.be.visible;
    browser.pause(100);
    browser.clearValue('app-user-details p-dialog input[formcontrolname="email"]');
    browser.pause(100);
    browser.setValue('app-user-details p-dialog input[formcontrolname="email"]', "srikanthmaci787@gmail.com");
    browser.pause(100);

    browser.expect.element(' app-user-details p-dialog p-calendar span input').to.be.visible;
    browser.setValue('app-user-details p-dialog p-calendar span input', 'Mar 18,2019');

    browser.pause(10000);

    browser.expect.element(' app-user-details p-dialog  p-calendar span div table tbody tr td').to.be.visible;
    browser.click(' app-user-details p-dialog p-calendar span div table tbody tr:nth-child(4) td:nth-child(4)');
    browser.pause(100);

    browser.expect.element('app-user-details p-dialog .create-button').to.be.visible;
    browser.click('app-user-details p-dialog .create-button');
    browser.pause(10000);
  });
});








