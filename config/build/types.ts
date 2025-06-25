export interface BuildPaths {
  entry: string;
  html: string;
  output: string;
}

export interface BuildOptions {
  mode: 'development' | 'production';
  isDev: boolean;
  port: number;
  paths: BuildPaths;
}
