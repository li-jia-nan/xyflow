import { memo } from 'react';
import cc from 'classcat';

import type { MiniMapNodeProps } from './types';

function MiniMapNode({
  id,
  x,
  y,
  width,
  height,
  style,
  color,
  strokeColor,
  strokeWidth,
  className,
  borderRadius,
  shapeRendering,
  onClick,
}: MiniMapNodeProps) {
  const { background, backgroundColor } = style || {};
  const fill = (color || background || backgroundColor) as string;

  return (
    <rect
      className={cc(['react-flow__minimap-node', className])}
      x={x}
      y={y}
      rx={borderRadius}
      ry={borderRadius}
      width={width}
      height={height}
      fill={fill}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      shapeRendering={shapeRendering}
      onClick={onClick ? (event) => onClick(event, id) : undefined}
    />
  );
}

export default memo(MiniMapNode);
