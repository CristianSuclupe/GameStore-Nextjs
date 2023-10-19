import { PlatFormData } from "./platformType";
export interface GameData {
  data: GameDatum;
  meta: Meta;
}

export interface GameDatum {
  id: number;
  attributes: GameAttributes;
}

export interface GameAttributes {
  title: string;
  price: number;
  discount: number;
  slug: string;
  summary: string;
  video: string;
  releaseDate: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  platform: PlatFormData;
  cover: Cover;
  wallpaper: Wallpaper;
  screenshots: Screenshots;
}

export interface Cover {
  data: CoverData;
}

export interface CoverData {
  id: number;
  attributes: CoverAttributes;
}

export interface CoverAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: PurpleFormats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

export enum EXT {
  JPEG = ".jpeg",
  Jpg = ".jpg",
}

export interface PurpleFormats {
  thumbnail: Small;
  small: Small;
}

export interface Small {
  name: string;
  hash: string;
  ext: EXT;
  mime: MIME;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export enum MIME {
  ImageJPEG = "image/jpeg",
}

export interface Screenshots {
  data: DAT[];
}

export interface DAT {
  id: number;
  attributes: ScreenshotsAttributes;
}

export interface ScreenshotsAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: FluffyFormats;
  hash: string;
  ext: EXT;
  mime: MIME;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

export interface FluffyFormats {
  thumbnail: Small;
  small: Small;
  medium: Small;
  large: Small;
}

export interface Wallpaper {
  data: DAT;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  start: number;
  limit: number;
  total: number;
}
