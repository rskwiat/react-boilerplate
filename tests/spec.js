import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import jasmineReact from 'jasmine-react-helpers';

import Home from '../src/components/home';

describe('The Header module', function(){
  var component;

  beforeEach(function(){
    component = ReactTestUtils.renderIntoDocument(<Home name='Test Passed' />);
  });

  it('The textContent of the module should have my name', function(){
    expect(ReactDOM.findDOMNode(component).textContent).toMatch(/Test Passed/);
  });

});