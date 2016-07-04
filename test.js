require ('./emulateDom');
var expect = require('unexpected')
  .clone()
  .use(require('unexpected-react'));
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var Thing = require('./Thing');

describe('test', function () {
  it('renders errors weird', function () {
    var renderer = TestUtils.createRenderer();
    renderer.render(<Thing/>);
    expect(renderer, 'to have rendered', <button>Label</button>)
  })
});
