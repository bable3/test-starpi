// Interface automatically generated by schemas-to-ts

import { Media } from '../../../common/schemas-to-ts/Media';

export interface SplittedSection {
  image?: { data: Media };
  reversed?: boolean;
  text?: any;
}
export interface SplittedSection_Plain {
  image?: Media;
  reversed?: boolean;
  text?: any;
}

export interface SplittedSection_NoRelations {
  image?: number;
  reversed?: boolean;
  text?: any;
}

