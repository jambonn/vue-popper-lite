import type {
  Options,
  Placement,
  PositioningStrategy,
  Instance,
} from '@popperjs/core';
export { Options, Instance };
export interface Props {
  trigger?: 'clickToOpen' | 'click' | 'clickToToggle' | 'hover' | 'focus';
  placement?: Placement;
  delayOnMouseOver?: number;
  delayOnMouseOut?: number;
  disabled?: boolean;
  content?: string;
  transition?: string;
  enterActiveClass?: string;
  leaveActiveClass?: string;
  forceShow?: boolean;
  appendToBody?: boolean;
  visibleArrow?: boolean;
  arrowPadding?: number;
  enableFlip?: boolean;
  offsetSkidding?: number;
  offsetDistance?: number;
  stopPropagation?: boolean;
  preventDefault?: boolean;
  strategy?: PositioningStrategy;
  contentClass?: string;
}
