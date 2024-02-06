import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductSection extends Schema.Component {
  collectionName: 'components_product_sections';
  info: {
    displayName: 'section';
    icon: 'clock';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface ProductTest extends Schema.Component {
  collectionName: 'components_product_tests';
  info: {
    displayName: 'test';
    icon: 'bold';
  };
  attributes: {
    test_image: Attribute.Media;
  };
}

export interface SectionsCenteredSection extends Schema.Component {
  collectionName: 'components_sections_centered_sections';
  info: {
    displayName: 'Centered section';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SectionsSliderSection extends Schema.Component {
  collectionName: 'components_sections_slider_sections';
  info: {
    displayName: 'Slider section';
    icon: 'play';
  };
  attributes: {
    title: Attribute.String;
    carousel: Attribute.Media;
  };
}

export interface SectionsSplittedSection extends Schema.Component {
  collectionName: 'components_sections_splitted_sections';
  info: {
    displayName: 'Splitted section';
    icon: 'grid';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    reversed: Attribute.Boolean;
    text: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.section': ProductSection;
      'product.test': ProductTest;
      'sections.centered-section': SectionsCenteredSection;
      'sections.slider-section': SectionsSliderSection;
      'sections.splitted-section': SectionsSplittedSection;
    }
  }
}
