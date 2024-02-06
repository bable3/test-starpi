// Interface automatically generated by schemas-to-ts

import { Media } from '../../../common/schemas-to-ts/Media';

export interface Test {
  test_image_coucou?: { data: Media[] };
  coucou?: string;
}
export interface Test_Plain {
  test_image_coucou?: Media[];
  coucou?: string;
}

export interface Test_NoRelations {
  test_image_coucou?: number[];
  coucou?: string;
}

