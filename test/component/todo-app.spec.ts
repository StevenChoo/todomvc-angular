import { Selector } from 'testcafe';

fixture`Todo app - `
    .page('http://localhost:4200')
    .requestHooks()
    .beforeEach(async () => {
    });

test.requestHooks()(`Test the app shows`, async t => {
    await t.debug();
});

test.requestHooks()(`Test adding a todo will result in a new todo`, async t => {
  await t.debug();
});

test.requestHooks()(`Test removing a todo will result in a empty todo list`, async t => {
  await t.debug();
});

test.requestHooks()(`Test marking a todo complete will show the todo completed`, async t => {
  await t.debug();
});
