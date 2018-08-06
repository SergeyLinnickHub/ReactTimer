var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDownForm = require ("CountDownForm");

describe("CountDownForm", ()=>{
    it("should exist", ()=>{
        expect(CountDownForm).toExist();
    });

    it("should call onSetCounDown if valid seconds entered", ()=>{
       var spy = expect.createSpy();
       var countdownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCounDown={spy}/>)
       var $el= $(ReactDOM.findDOMNode(countdownForm));

       countdownForm.refs.seconds.value = "109";
       TestUtils.Simulate.submit($el.find("form")[0]);

       expect(spy).toHaveBeenCalledWith(109);
    });

    it("should NOT call onSetCounDown if invalid seconds entered", ()=>{
       var spy = expect.createSpy();
       var countdownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCounDown={spy}/>)
       var $el= $(ReactDOM.findDOMNode(countdownForm));

       countdownForm.refs.seconds.value = " ";
       TestUtils.Simulate.submit($el.find("form")[0]);

       expect(spy).toNotHaveBeenCalled();
    });
});