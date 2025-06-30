export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
  src:string;
}

export interface BuildOptions {
  mode: 'development' | 'production';
  isDev: boolean;
  port: number;
  paths: BuildPaths;
}
