import { ENV } from "../utils";

export class Game {
  async getLastGamePublished() {
    try {
      const sort = "sort=publishedAt:desc";
      const pagination = "pagination[limit]=1";
      const populate = "populate=*";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${sort}&${pagination}&${populate}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getLatestPublished({ limit = 9, platformId = 0 }) {
    try {
      const filterPlatform =
        platformId && `filters[platform][id][$eq]=${platformId}`;
      const paginationLimit = `pagination[limit]=${limit}`;
      const sort = `sort[1]=publishedAt:desc`;
      const populate = `populate=*`;
      const urlParams = `${sort}&${paginationLimit}&${filterPlatform}&${populate}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${urlParams}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getGameByPlatformSlug(platform: string, page: number) {
    try {
      const filters = `filters[platform][slug][$eq]=${platform}`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
      const populate = "populate=*";
      const urlParams = `${filters}&${pagination}&${populate}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${urlParams}`;
      const response = await fetch(url, { cache: "no-store" });
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async searchGames(filter: string, page: number) {
    try {
      const filters = `filters[title][$contains]=${filter}`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
      const populate = "populate=*";
      const urlParams = `${filters}&${pagination}&${populate}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${urlParams}`;
      const response = await fetch(url, { cache: "no-store" });
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }

  async getGameBySlug(slug: string) {
    try {
      const filters = `filters[slug][$eq]=${slug}`;
      const populateGame =
        "populate[0]=wallpaper&populate[1]=cover&populate[2]=screenshots&populate[3]=platform";
      const populatePlatform = "populate[4]=platform.icon";
      const populates = `${populateGame}&${populatePlatform}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}?${filters}&${populates}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result.data[0];
    } catch (error) {
      throw error;
    }
  }

  async getGameById(id: number) {
    try {
      const populate = "populate[0]=cover&populate[1]=platform";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GAME}/${id}?${populate}`;
      const response = await fetch(url);
      const result = await response.json();
      if (response.status !== 200) throw result;
      return result;
    } catch (error) {
      throw error;
    }
  }
}
