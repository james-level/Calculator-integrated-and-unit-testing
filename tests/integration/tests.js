var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('it should continually update the running total displayed on screen in response to subsequent clicks', function(){
  running_total = element(by.css('#running_total'))
  element(by.css('#number6')).click();
  element(by.css('#number1')).click();
  element(by.css('#number6')).click();
  element(by.css('#number1')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('6161')
})

// it('it should update the display with the result of the operation when clicked', function(){
//   running_total = element(by.css('#running_total'))
//   element(by.css('#number8')).click();
//   element(by.css('#operator_add')).click();
//   element(by.css('#number1')).click();
//   element(by.css('#operator_add')).click();
//   element(by.css('#operator_equals')).click();
//   expect(running_total.getAttribute('value')).to.eventually.equal('18')
// });
//
// it('it should allow for multiple operations to be chaned together', function(){
//   running_total = element(by.css('#running_total'))
//   element(by.css('#number8')).click();
//   element(by.css('#operator_add')).click();
//   element(by.css('#operator_add')).click();
//   element(by.css('#operator_add')).click();
//   element(by.css('#operator_add')).click();
//   element(by.css('#operator_equals')).click();
//   expect(running_total.getAttribute('value')).to.eventually.equal('128')
// });
//
// it('it should give expected output for a range of numbers__Very_Large', function(){
//   running_total = element(by.css('#running_total'))
//   element(by.css('#number9')).click();
//   element(by.css('#operator_multiply')).click();
//   element(by.css('#operator_multiply')).click();
//   element(by.css('#operator_multiply')).click();
//   element(by.css('#operator_multiply')).click();
//   element(by.css('#operator_multiply')).click();
//   element(by.css('#operator_multiply')).click();
//   expect(running_total.getAttribute('value')).to.eventually.equal('3.4336838202925124e+30')
// })
//
//
//   it('it should give expected output for a range of numbers__Negative', function(){
//     running_total = element(by.css('#running_total'))
//     element(by.css('#number9')).click();
//     element(by.css('#operator_subtract')).click();
//     element(by.css('#number9')).click();
//     element(by.css('#number9')).click();
//     element(by.css('#operator_equals')).click();
//     expect(running_total.getAttribute('value')).to.eventually.equal('-90')
//   })
//
//   it('it should give expected output for a range of numbers__decimals', function(){
//     running_total = element(by.css('#running_total'))
//     element(by.css('#number2')).click();
//     element(by.css('#operator_divide')).click();
//     element(by.css('#number3')).click();
//     element(by.css('#operator_equals')).click();
//     expect(running_total.getAttribute('value')).to.eventually.equal('0.6666666666666666')
//   })
//
//   it('it should give expected output for a range of numbers__decimals', function(){
//     running_total = element(by.css('#running_total'))
//     element(by.css('#number2')).click();
//     element(by.css('#operator_divide')).click();
//     element(by.css('#number0')).click();
//     element(by.css('#operator_equals')).click();
//     expect(running_total.getAttribute('value')).to.eventually.equal('NaN')
//   })

});
