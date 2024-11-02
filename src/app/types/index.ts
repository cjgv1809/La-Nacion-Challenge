export interface Article {
  _id: string;
  display_date: Date;
  headlines: Headlines;
  promo_items?: PromoItems;
  subtype: string;
  taxonomy: Taxonomy;
  website_url: string;
}

export interface Headlines {
  basic: string;
}

export interface PromoItems {
  basic: Basic;
}

export interface Basic {
  resized_urls?: ResizedURL[];
  subtitle?: string;
  type: Type;
  url?: string;
}

export interface ResizedURL {
  option: Option;
  resizedUrl: string;
}

export interface Option {
  media: Media;
}

export type Media =
  | "(min-width: 64em)"
  | "(min-width: 48em)"
  | "(min-width: 20em)";

export type Type = "image" | "video";

export interface Taxonomy {
  tags: Tag[];
}

export interface Tag {
  slug: string;
  text: string;
  count: number;
}
