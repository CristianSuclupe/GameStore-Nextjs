import { ENV } from "../utils";

export type PlatFormType = {
  id: string;
  attributes: {
    title: string;
    slug: string;
    icon: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
};

export class Platform {
  async getAll(): Promise<PlatFormType[]> {
    try {
      const sort = "sort=order:asc";
      const populate = "populate=icon";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORM}?${populate}&${sort}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getBySlug(slug: string) {
    try {
      const filters = `filters[slug][$eq]=${slug}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PLATFORM}?${filters}`;
      console.log(url);
      const response = await fetch(url);
      console.log(response);
      const result = await response.json();
      if (response.status !== 200) throw result;
      console.log(result);
      return result.data[0];
    } catch (error) {
      throw error;
    }
  }
}
