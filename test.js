import { Selector, t } from 'testcafe';

fixture `Test structure`
  .page `https://demo-ready-alexandrite.azurewebsites.net`;

test('Test1', async t => {
  const title = Selector('a').withText('ALEXANDRITE');
  await t.expect(title.exists).ok();
});