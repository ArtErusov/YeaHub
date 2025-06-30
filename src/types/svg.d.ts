declare module '*.svg' {
  import { ComponentType, SVGProps } from 'react';
  const SVG: ComponentType<SVGProps<SVGSVGElement>>;
  export default SVG;
}

// Если нужны оба варианта импорта (компонент и URL)
declare module '*.svg?react' {
  import { ComponentType, SVGProps } from 'react';
  const SVG: ComponentType<SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.svg?url' {
  const value: string;
  export default value;
}