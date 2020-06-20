declare type DivWithPointers = HTMLDivElement & {
  pointers: {
    [key: string]: HTMLDivElement;
  };
};

declare type SvgWithPointers = SVGElement & {
  pointers: {
    [key: string]: SVGRectElement;
  };
};

declare type ICurrentTime = {
  hours: number;
  minutes: number;
  seconds: number;
};
