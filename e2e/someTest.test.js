import detox from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await detox.device.launchApp();
  });

  beforeEach(async () => {});

  it('dummy test example', async () => {});
});
