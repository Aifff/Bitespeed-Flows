import React from 'react';

export default () => {
  const onDragStart = (event, nodeType,label) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };
  
  return (
    <aside>
      <div className="description">You can drag these nodes to the pane on the right.</div>
      <div className="dndnode output" onDragStart={(event) => onDragStart(event, 'Text')} draggable>
        Text Node
      </div>
    </aside>
  );
};