import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'invl-name',
  styleUrl: 'invl-name.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;

  render() {
    return (
      <div>
        Hello, World! I'm {this.first}
      </div>
    );
  }
}
