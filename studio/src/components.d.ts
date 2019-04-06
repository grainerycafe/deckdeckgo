/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@ionic/core';
import 'ionicons';
import 'deckdeckgo';
import 'deckdeckgo-inline-editor';
import {
  EventEmitter,
} from '@stencil/core';


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppAvatar {
    'src': string;
  }
  interface AppAvatarAttributes extends StencilHTMLAttributes {
    'src'?: string;
  }

  interface AppFooter {}
  interface AppFooterAttributes extends StencilHTMLAttributes {}

  interface AppLogo {}
  interface AppLogoAttributes extends StencilHTMLAttributes {}

  interface AppMenuUser {}
  interface AppMenuUserAttributes extends StencilHTMLAttributes {}

  interface AppNavigationActions {
    'presentation': boolean;
    'publish': boolean;
    'signIn': boolean;
  }
  interface AppNavigationActionsAttributes extends StencilHTMLAttributes {
    'onActionPublish'?: (event: CustomEvent<void>) => void;
    'presentation'?: boolean;
    'publish'?: boolean;
    'signIn'?: boolean;
  }

  interface AppNavigation {
    'logo': boolean;
    'menuToggle': boolean;
    'presentation': boolean;
    'publish': boolean;
    'user': boolean;
  }
  interface AppNavigationAttributes extends StencilHTMLAttributes {
    'logo'?: boolean;
    'menuToggle'?: boolean;
    'presentation'?: boolean;
    'publish'?: boolean;
    'user'?: boolean;
  }

  interface AppAddSlideAction {}
  interface AppAddSlideActionAttributes extends StencilHTMLAttributes {
    'onActionOpenSlideAdd'?: (event: CustomEvent<UIEvent>) => void;
  }

  interface AppEditorToolbar {
    'blurSelectedElement': () => Promise<void>;
    'hideToolbar': () => Promise<void>;
    'touch': (element: HTMLElement) => Promise<void>;
    'unSelect': () => Promise<void>;
  }
  interface AppEditorToolbarAttributes extends StencilHTMLAttributes {
    'onBlockSlide'?: (event: CustomEvent<boolean>) => void;
    'onSlideDelete'?: (event: CustomEvent<HTMLElement>) => void;
    'onSlideDidChange'?: (event: CustomEvent<HTMLElement>) => void;
  }

  interface AppDemo {}
  interface AppDemoAttributes extends StencilHTMLAttributes {}

  interface AppFeed {}
  interface AppFeedAttributes extends StencilHTMLAttributes {}

  interface AppPopular {}
  interface AppPopularAttributes extends StencilHTMLAttributes {}

  interface AppFeedCardContent {
    'author': string;
    'caption': string;
    'description': string;
    'editable': boolean;
    'firstCard': boolean;
    'publication': Date;
  }
  interface AppFeedCardContentAttributes extends StencilHTMLAttributes {
    'author'?: string;
    'caption'?: string;
    'description'?: string;
    'editable'?: boolean;
    'firstCard'?: boolean;
    'publication'?: Date;
  }

  interface AppFeedCard {
    'author': string;
    'caption': string;
    'description': string;
    'editable': boolean;
    'publication': Date;
  }
  interface AppFeedCardAttributes extends StencilHTMLAttributes {
    'author'?: string;
    'caption'?: string;
    'description'?: string;
    'editable'?: boolean;
    'publication'?: Date;
  }

  interface AppGif {}
  interface AppGifAttributes extends StencilHTMLAttributes {}

  interface AppPublish {
    'caption': string;
    'description': string;
  }
  interface AppPublishAttributes extends StencilHTMLAttributes {
    'caption'?: string;
    'description'?: string;
  }

  interface AppSlideNavigate {
    'slides': string[];
  }
  interface AppSlideNavigateAttributes extends StencilHTMLAttributes {
    'slides'?: string[];
  }

  interface AppAbout {}
  interface AppAboutAttributes extends StencilHTMLAttributes {}

  interface AppContact {}
  interface AppContactAttributes extends StencilHTMLAttributes {}

  interface AppOpensource {}
  interface AppOpensourceAttributes extends StencilHTMLAttributes {}

  interface AppPrivacy {}
  interface AppPrivacyAttributes extends StencilHTMLAttributes {}

  interface AppTeam {}
  interface AppTeamAttributes extends StencilHTMLAttributes {}

  interface AppTerms {}
  interface AppTermsAttributes extends StencilHTMLAttributes {}

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppSignin {
    'redirect': string;
  }
  interface AppSigninAttributes extends StencilHTMLAttributes {
    'redirect'?: string;
  }

  interface AppEditor {
    'deckId': string;
  }
  interface AppEditorAttributes extends StencilHTMLAttributes {
    'deckId'?: string;
  }

  interface AppUserMenu {}
  interface AppUserMenuAttributes extends StencilHTMLAttributes {}

  interface AppDeckOrSlide {}
  interface AppDeckOrSlideAttributes extends StencilHTMLAttributes {}

  interface AppSlideType {}
  interface AppSlideTypeAttributes extends StencilHTMLAttributes {}

  interface AppSlotType {
    'selectedElement': HTMLElement;
  }
  interface AppSlotTypeAttributes extends StencilHTMLAttributes {
    'selectedElement'?: HTMLElement;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'AppAvatar': Components.AppAvatar;
    'AppFooter': Components.AppFooter;
    'AppLogo': Components.AppLogo;
    'AppMenuUser': Components.AppMenuUser;
    'AppNavigationActions': Components.AppNavigationActions;
    'AppNavigation': Components.AppNavigation;
    'AppAddSlideAction': Components.AppAddSlideAction;
    'AppEditorToolbar': Components.AppEditorToolbar;
    'AppDemo': Components.AppDemo;
    'AppFeed': Components.AppFeed;
    'AppPopular': Components.AppPopular;
    'AppFeedCardContent': Components.AppFeedCardContent;
    'AppFeedCard': Components.AppFeedCard;
    'AppGif': Components.AppGif;
    'AppPublish': Components.AppPublish;
    'AppSlideNavigate': Components.AppSlideNavigate;
    'AppAbout': Components.AppAbout;
    'AppContact': Components.AppContact;
    'AppOpensource': Components.AppOpensource;
    'AppPrivacy': Components.AppPrivacy;
    'AppTeam': Components.AppTeam;
    'AppTerms': Components.AppTerms;
    'AppHome': Components.AppHome;
    'AppSignin': Components.AppSignin;
    'AppEditor': Components.AppEditor;
    'AppUserMenu': Components.AppUserMenu;
    'AppDeckOrSlide': Components.AppDeckOrSlide;
    'AppSlideType': Components.AppSlideType;
    'AppSlotType': Components.AppSlotType;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'app-avatar': Components.AppAvatarAttributes;
    'app-footer': Components.AppFooterAttributes;
    'app-logo': Components.AppLogoAttributes;
    'app-menu-user': Components.AppMenuUserAttributes;
    'app-navigation-actions': Components.AppNavigationActionsAttributes;
    'app-navigation': Components.AppNavigationAttributes;
    'app-add-slide-action': Components.AppAddSlideActionAttributes;
    'app-editor-toolbar': Components.AppEditorToolbarAttributes;
    'app-demo': Components.AppDemoAttributes;
    'app-feed': Components.AppFeedAttributes;
    'app-popular': Components.AppPopularAttributes;
    'app-feed-card-content': Components.AppFeedCardContentAttributes;
    'app-feed-card': Components.AppFeedCardAttributes;
    'app-gif': Components.AppGifAttributes;
    'app-publish': Components.AppPublishAttributes;
    'app-slide-navigate': Components.AppSlideNavigateAttributes;
    'app-about': Components.AppAboutAttributes;
    'app-contact': Components.AppContactAttributes;
    'app-opensource': Components.AppOpensourceAttributes;
    'app-privacy': Components.AppPrivacyAttributes;
    'app-team': Components.AppTeamAttributes;
    'app-terms': Components.AppTermsAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-signin': Components.AppSigninAttributes;
    'app-editor': Components.AppEditorAttributes;
    'app-user-menu': Components.AppUserMenuAttributes;
    'app-deck-or-slide': Components.AppDeckOrSlideAttributes;
    'app-slide-type': Components.AppSlideTypeAttributes;
    'app-slot-type': Components.AppSlotTypeAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppAvatarElement extends Components.AppAvatar, HTMLStencilElement {}
  var HTMLAppAvatarElement: {
    prototype: HTMLAppAvatarElement;
    new (): HTMLAppAvatarElement;
  };

  interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {}
  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };

  interface HTMLAppLogoElement extends Components.AppLogo, HTMLStencilElement {}
  var HTMLAppLogoElement: {
    prototype: HTMLAppLogoElement;
    new (): HTMLAppLogoElement;
  };

  interface HTMLAppMenuUserElement extends Components.AppMenuUser, HTMLStencilElement {}
  var HTMLAppMenuUserElement: {
    prototype: HTMLAppMenuUserElement;
    new (): HTMLAppMenuUserElement;
  };

  interface HTMLAppNavigationActionsElement extends Components.AppNavigationActions, HTMLStencilElement {}
  var HTMLAppNavigationActionsElement: {
    prototype: HTMLAppNavigationActionsElement;
    new (): HTMLAppNavigationActionsElement;
  };

  interface HTMLAppNavigationElement extends Components.AppNavigation, HTMLStencilElement {}
  var HTMLAppNavigationElement: {
    prototype: HTMLAppNavigationElement;
    new (): HTMLAppNavigationElement;
  };

  interface HTMLAppAddSlideActionElement extends Components.AppAddSlideAction, HTMLStencilElement {}
  var HTMLAppAddSlideActionElement: {
    prototype: HTMLAppAddSlideActionElement;
    new (): HTMLAppAddSlideActionElement;
  };

  interface HTMLAppEditorToolbarElement extends Components.AppEditorToolbar, HTMLStencilElement {}
  var HTMLAppEditorToolbarElement: {
    prototype: HTMLAppEditorToolbarElement;
    new (): HTMLAppEditorToolbarElement;
  };

  interface HTMLAppDemoElement extends Components.AppDemo, HTMLStencilElement {}
  var HTMLAppDemoElement: {
    prototype: HTMLAppDemoElement;
    new (): HTMLAppDemoElement;
  };

  interface HTMLAppFeedElement extends Components.AppFeed, HTMLStencilElement {}
  var HTMLAppFeedElement: {
    prototype: HTMLAppFeedElement;
    new (): HTMLAppFeedElement;
  };

  interface HTMLAppPopularElement extends Components.AppPopular, HTMLStencilElement {}
  var HTMLAppPopularElement: {
    prototype: HTMLAppPopularElement;
    new (): HTMLAppPopularElement;
  };

  interface HTMLAppFeedCardContentElement extends Components.AppFeedCardContent, HTMLStencilElement {}
  var HTMLAppFeedCardContentElement: {
    prototype: HTMLAppFeedCardContentElement;
    new (): HTMLAppFeedCardContentElement;
  };

  interface HTMLAppFeedCardElement extends Components.AppFeedCard, HTMLStencilElement {}
  var HTMLAppFeedCardElement: {
    prototype: HTMLAppFeedCardElement;
    new (): HTMLAppFeedCardElement;
  };

  interface HTMLAppGifElement extends Components.AppGif, HTMLStencilElement {}
  var HTMLAppGifElement: {
    prototype: HTMLAppGifElement;
    new (): HTMLAppGifElement;
  };

  interface HTMLAppPublishElement extends Components.AppPublish, HTMLStencilElement {}
  var HTMLAppPublishElement: {
    prototype: HTMLAppPublishElement;
    new (): HTMLAppPublishElement;
  };

  interface HTMLAppSlideNavigateElement extends Components.AppSlideNavigate, HTMLStencilElement {}
  var HTMLAppSlideNavigateElement: {
    prototype: HTMLAppSlideNavigateElement;
    new (): HTMLAppSlideNavigateElement;
  };

  interface HTMLAppAboutElement extends Components.AppAbout, HTMLStencilElement {}
  var HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };

  interface HTMLAppContactElement extends Components.AppContact, HTMLStencilElement {}
  var HTMLAppContactElement: {
    prototype: HTMLAppContactElement;
    new (): HTMLAppContactElement;
  };

  interface HTMLAppOpensourceElement extends Components.AppOpensource, HTMLStencilElement {}
  var HTMLAppOpensourceElement: {
    prototype: HTMLAppOpensourceElement;
    new (): HTMLAppOpensourceElement;
  };

  interface HTMLAppPrivacyElement extends Components.AppPrivacy, HTMLStencilElement {}
  var HTMLAppPrivacyElement: {
    prototype: HTMLAppPrivacyElement;
    new (): HTMLAppPrivacyElement;
  };

  interface HTMLAppTeamElement extends Components.AppTeam, HTMLStencilElement {}
  var HTMLAppTeamElement: {
    prototype: HTMLAppTeamElement;
    new (): HTMLAppTeamElement;
  };

  interface HTMLAppTermsElement extends Components.AppTerms, HTMLStencilElement {}
  var HTMLAppTermsElement: {
    prototype: HTMLAppTermsElement;
    new (): HTMLAppTermsElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppSigninElement extends Components.AppSignin, HTMLStencilElement {}
  var HTMLAppSigninElement: {
    prototype: HTMLAppSigninElement;
    new (): HTMLAppSigninElement;
  };

  interface HTMLAppEditorElement extends Components.AppEditor, HTMLStencilElement {}
  var HTMLAppEditorElement: {
    prototype: HTMLAppEditorElement;
    new (): HTMLAppEditorElement;
  };

  interface HTMLAppUserMenuElement extends Components.AppUserMenu, HTMLStencilElement {}
  var HTMLAppUserMenuElement: {
    prototype: HTMLAppUserMenuElement;
    new (): HTMLAppUserMenuElement;
  };

  interface HTMLAppDeckOrSlideElement extends Components.AppDeckOrSlide, HTMLStencilElement {}
  var HTMLAppDeckOrSlideElement: {
    prototype: HTMLAppDeckOrSlideElement;
    new (): HTMLAppDeckOrSlideElement;
  };

  interface HTMLAppSlideTypeElement extends Components.AppSlideType, HTMLStencilElement {}
  var HTMLAppSlideTypeElement: {
    prototype: HTMLAppSlideTypeElement;
    new (): HTMLAppSlideTypeElement;
  };

  interface HTMLAppSlotTypeElement extends Components.AppSlotType, HTMLStencilElement {}
  var HTMLAppSlotTypeElement: {
    prototype: HTMLAppSlotTypeElement;
    new (): HTMLAppSlotTypeElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'app-avatar': HTMLAppAvatarElement
    'app-footer': HTMLAppFooterElement
    'app-logo': HTMLAppLogoElement
    'app-menu-user': HTMLAppMenuUserElement
    'app-navigation-actions': HTMLAppNavigationActionsElement
    'app-navigation': HTMLAppNavigationElement
    'app-add-slide-action': HTMLAppAddSlideActionElement
    'app-editor-toolbar': HTMLAppEditorToolbarElement
    'app-demo': HTMLAppDemoElement
    'app-feed': HTMLAppFeedElement
    'app-popular': HTMLAppPopularElement
    'app-feed-card-content': HTMLAppFeedCardContentElement
    'app-feed-card': HTMLAppFeedCardElement
    'app-gif': HTMLAppGifElement
    'app-publish': HTMLAppPublishElement
    'app-slide-navigate': HTMLAppSlideNavigateElement
    'app-about': HTMLAppAboutElement
    'app-contact': HTMLAppContactElement
    'app-opensource': HTMLAppOpensourceElement
    'app-privacy': HTMLAppPrivacyElement
    'app-team': HTMLAppTeamElement
    'app-terms': HTMLAppTermsElement
    'app-home': HTMLAppHomeElement
    'app-signin': HTMLAppSigninElement
    'app-editor': HTMLAppEditorElement
    'app-user-menu': HTMLAppUserMenuElement
    'app-deck-or-slide': HTMLAppDeckOrSlideElement
    'app-slide-type': HTMLAppSlideTypeElement
    'app-slot-type': HTMLAppSlotTypeElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'app-avatar': HTMLAppAvatarElement;
    'app-footer': HTMLAppFooterElement;
    'app-logo': HTMLAppLogoElement;
    'app-menu-user': HTMLAppMenuUserElement;
    'app-navigation-actions': HTMLAppNavigationActionsElement;
    'app-navigation': HTMLAppNavigationElement;
    'app-add-slide-action': HTMLAppAddSlideActionElement;
    'app-editor-toolbar': HTMLAppEditorToolbarElement;
    'app-demo': HTMLAppDemoElement;
    'app-feed': HTMLAppFeedElement;
    'app-popular': HTMLAppPopularElement;
    'app-feed-card-content': HTMLAppFeedCardContentElement;
    'app-feed-card': HTMLAppFeedCardElement;
    'app-gif': HTMLAppGifElement;
    'app-publish': HTMLAppPublishElement;
    'app-slide-navigate': HTMLAppSlideNavigateElement;
    'app-about': HTMLAppAboutElement;
    'app-contact': HTMLAppContactElement;
    'app-opensource': HTMLAppOpensourceElement;
    'app-privacy': HTMLAppPrivacyElement;
    'app-team': HTMLAppTeamElement;
    'app-terms': HTMLAppTermsElement;
    'app-home': HTMLAppHomeElement;
    'app-signin': HTMLAppSigninElement;
    'app-editor': HTMLAppEditorElement;
    'app-user-menu': HTMLAppUserMenuElement;
    'app-deck-or-slide': HTMLAppDeckOrSlideElement;
    'app-slide-type': HTMLAppSlideTypeElement;
    'app-slot-type': HTMLAppSlotTypeElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
