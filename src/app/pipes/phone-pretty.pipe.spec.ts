import { PhonePrettyPipe } from './phone-pretty.pipe';

describe('PhonePrettyPipe', () => {
  it('create an instance', () => {
    const pipe = new PhonePrettyPipe();
    expect(pipe).toBeTruthy();
  });
});
