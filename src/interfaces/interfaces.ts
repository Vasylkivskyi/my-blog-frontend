export interface MatchInterface {
  path: string;
  url: string;
  params: { post: string };
}

export interface MatchIncludedInterface {
  match: MatchInterface;
}

export interface WithRouterInterface {
  location: any;
}
