import React from 'react';

const SettingsPanel = ({ selectedNode, updateNode }) => {
  if (!selectedNode) {
    return <div className="settings-panel">No node selected</div>;
  }

  const handleChange = (event) => {
    const newText = event.target.value;
    updateNode(selectedNode.id, newText);
  };

  return (
    <div className="settings-panel">
      <h3>Settings</h3>
      <input type="text" value={selectedNode.data.label} onChange={handleChange} />
    </div>
  );
};

export default SettingsPanel;
