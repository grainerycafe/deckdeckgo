/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface DeckgoSlideTitle {
    'afterSwipe': () => Promise<void>;
    'beforeSwipe': (enter: boolean, reveal: boolean) => Promise<boolean>;
    'customActions': boolean;
    'customBackground': boolean;
    'hideContent': () => Promise<void>;
    'lazyLoadContent': () => Promise<void>;
    'revealContent': () => Promise<void>;
  }
}

declare global {


  interface HTMLDeckgoSlideTitleElement extends Components.DeckgoSlideTitle, HTMLStencilElement {}
  var HTMLDeckgoSlideTitleElement: {
    prototype: HTMLDeckgoSlideTitleElement;
    new (): HTMLDeckgoSlideTitleElement;
  };
  interface HTMLElementTagNameMap {
    'deckgo-slide-title': HTMLDeckgoSlideTitleElement;
  }
}

declare namespace LocalJSX {
  interface DeckgoSlideTitle extends JSXBase.HTMLAttributes<HTMLDeckgoSlideTitleElement> {
    'customActions'?: boolean;
    'customBackground'?: boolean;
    'onSlideDidLoad'?: (event: CustomEvent<void>) => void;
  }

  interface IntrinsicElements {
    'deckgo-slide-title': DeckgoSlideTitle;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

