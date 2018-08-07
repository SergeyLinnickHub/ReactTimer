var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require ("CountDown");

describe('CountDown', () => {
	it('should exist', () => {
	    expect(CountDown).toExist();
    });
    
    describe("handleSetCounDown", () =>{
        it("should set state to started and countdown", (done)=>{
            var countdown = TestUtils.renderIntoDocument(<CountDown/>);
            countdown.handleSetCounDown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe("started");

            setTimeout(()=>{
               expect(countdown.state.count).toBe(9); 
               done();
            },1001)
        });

        it("should never set count less than  0", (done)=>{
            var countdown = TestUtils.renderIntoDocument(<CountDown/>);
            countdown.handleSetCounDown(1);


            setTimeout(()=>{
               expect(countdown.state.count).toBe(0); 
               done();
            },3001)
        });
    });
});