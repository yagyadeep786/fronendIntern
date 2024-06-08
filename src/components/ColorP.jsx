import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialColors = [
  '#FF6633', '#FFB399', '#FF33FF', '#FFFF99',
  '#00B3E6', '#E6B333', '#3366E6', '#999966'
];

const ColorP = () => {
  const [colors, setColors] = useState(initialColors);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedColors = Array.from(colors);
    const [removed] = reorderedColors.splice(result.source.index, 1);
    reorderedColors.splice(result.destination.index, 0, removed);

    setColors(reorderedColors);
  };

  const handleColorChange = (index, newColor) => {
    const updatedColors = [...colors];
    updatedColors[index] = newColor;
    setColors(updatedColors);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="colorPalette" direction="horizontal">
        {(provided) => (
          <div
            className="color-palette"
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ display: 'flex', gap: '10px' }}
          >
            {colors.map((color, index) => (
              <Draggable key={index} draggableId={index.toString()} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      width: '50px',
                      height: '50px',
                      backgroundColor: color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column'
                    }}
                  >
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => handleColorChange(index, e.target.value)}
                      style={{ width: '100%', height: '100%', border: 'none', cursor: 'pointer' }}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default ColorP;
