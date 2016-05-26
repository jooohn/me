module.exports = {
  path: 'timecard',
  getComponent(nextState, callback) {
    require.ensure([], (require) => callback(null, require('./containers/TimeCard')));
  }
};
