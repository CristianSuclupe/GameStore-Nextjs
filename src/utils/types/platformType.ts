export interface PlatFormData {
  data: Data;
  meta: PlatFormMeta;
}

export interface Data {
  id: number;
  attributes: PlatFormAttributes;
}

export interface PlatFormAttributes {
  title: string;
  slug: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  icon: Icon;
}

export interface Icon {
  data: IconData;
}

export interface IconData {
  id: number;
  attributes: IconAttributes;
}

export interface IconAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

export interface PlatFormMeta {
  pagination: PlatFormPagination;
}

export interface PlatFormPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
