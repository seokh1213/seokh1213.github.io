export type SocialIcon = Record<string, string | any>;

export interface Content<T> {
  data: T
}

export interface Post {
  title: string,
  description: string,
  dateFormatted: string,
  published: boolean,
  tags: string[],
  category: string,
}