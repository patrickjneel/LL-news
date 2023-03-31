export interface News {
  title: string;
  description: string;
  content: string;
  urlToImage: string;
}

export interface CardContainerProps {
  country: string;
  newsData: News[];
  selectArticle: any;
}

export interface SearchArticleProps {
  country: string;
  newsData: News[];
  searchArticles: (searchTerm: string) => void;
  searchTerm: string;
  selectArticle: any;
  setSelectedRoute: (index: number) => void;
}

export interface CategoryProps {
  country: string;
  newsData: News[];
  selectCategories: (category: string) => void;
  category: string;
  selectArticle: any;
  setSelectedRoute: (index: number) => void;
}

export interface NewsRouteProps {
  country: string;
  data: News[];
  selectArticle: any;
  selectedArticle: News;
  selectCategories: (category: string) => void;
  category: string;
  searchArticles: (searchTerm: string) => void;
  searchTerm: string;
  setSelectedRoute: (index: number) => void;
}

export interface HeaderProps {
  country: string;
  selectCountry: (countryName: string) => void;
  selectedRoute: number;
  setSelectedRoute: (index: number) => void;
  searchArticles: (searchTerm: string) => void;
  selectCategories: (category: string) => void;
}

export interface CardData {
  newsData: News[];
  selectArticle: any;
}

export interface SelectedArticleProps {
  selectedArticle: News;
  searchArticles: (searchTerm: string) => void;
  selectCategories: (category: string) => void;
  setSelectedRoute: (index: number) => void;
}
