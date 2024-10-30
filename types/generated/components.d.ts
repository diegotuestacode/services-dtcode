import type { Struct, Schema } from '@strapi/strapi';

export interface IconsIcons extends Struct.ComponentSchema {
  collectionName: 'components_icons_icons';
  info: {
    displayName: 'Icons';
    icon: 'alien';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'icons.icons': IconsIcons;
    }
  }
}
