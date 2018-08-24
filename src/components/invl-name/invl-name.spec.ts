import { TestWindow } from '@stencil/core/testing';
import { MyComponent } from './invl-name';

describe('invl-name', () => {
  it('should build', () => {
    expect(new MyComponent()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMyComponentElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MyComponent],
        html: '<invl-name></invl-name>'
      });
    });

    it('should work without parameters', () => {
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
    });

    it('should work with a first name', async () => {
      element.first = 'Peter';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
    });
    
  });
});
