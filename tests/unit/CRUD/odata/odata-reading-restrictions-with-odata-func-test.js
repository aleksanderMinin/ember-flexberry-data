import executeTest from './execute-odata-test';
import readingRestrictionsOdataFunctions from '../base/base-reading-restrictions-with-odata-func-test';

executeTest('reading | restrictions | odata functions', (store, assert) => {
  readingRestrictionsOdataFunctions(store, assert);
});
