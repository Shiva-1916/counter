// src/App.js
import React, { useState, useRef } from 'react';

// Define available input types
const inputTypes = ['text', 'number', 'email', 'password', 'date'];

const Reorder = () => {
  // State to manage form fields
  const [fields, setFields] = useState([]);
  
  // State to toggle add options visibility
  const [showAddOptions, setShowAddOptions] = useState(false);
  
  // State to store the selected type for the new field
  const [newFieldType, setNewFieldType] = useState(inputTypes[0]);
  
  // State to keep track of the currently focused field
  const [activeFieldId, setActiveFieldId] = useState(null);

  // Ref to manage input focus (optional, can be used for advanced focus handling)
  const inputRefs = useRef({});

  // Handler for Add button click
  const handleAddClick = () => {
    setShowAddOptions(!showAddOptions);
  };

  // Handler to add a new field
  const handleAddField = () => {
    const newField = {
      id: Date.now().toString(), // Unique ID based on timestamp
      type: newFieldType,
      value: '',
    };
    setFields([...fields, newField]);
    setShowAddOptions(false);
  };

  // Handler for Remove button click
  const handleRemoveClick = () => {
    if (activeFieldId) {
      setFields((prevFields) =>
        prevFields.map((field) =>
          field.id === activeFieldId ? { ...field, value: '' } : field
        )
      );
    }
  };

  // Handler for Reorder button click (reverses the fields array)
  const handleReorderClick = () => {
    setFields((prevFields) => [...prevFields].reverse());
  };

  // Handler for input field changes
  const handleFieldChange = (id, value) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id === id ? { ...field, value } : field
      )
    );
  };

  // Handler to set the active field when an input gains focus
  const handleFieldFocus = (id) => {
    setActiveFieldId(id);
  };

  return (
    <div style={styles.container}>
      <h2>Dynamic Form Builder</h2>

      {/* Control Buttons */}
      <div style={styles.buttonContainer}>
        <button onClick={handleAddClick} style={styles.button}>
          Add
        </button>
        <button onClick={handleRemoveClick} style={styles.button}>
          Remove
        </button>
        <button onClick={handleReorderClick} style={styles.button}>
          Reorder
        </button>
      </div>

      {/* Add Options Section */}
      {showAddOptions && (
        <div style={styles.addOptions}>
          <select
            value={newFieldType}
            onChange={(e) => setNewFieldType(e.target.value)}
            style={styles.select}
          >
            {inputTypes.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
          <button onClick={handleAddField} style={styles.confirmButton}>
            Confirm Add
          </button>
        </div>
      )}

      {/* Render Form Fields */}
      <div style={styles.formContainer}>
        {fields.map((field, index) => (
          <div key={field.id} style={styles.fieldWrapper}>
            <label style={styles.label}>
              {field.type.charAt(0).toUpperCase() + field.type.slice(1)}:
            </label>
            <input
              ref={(el) => (inputRefs.current[field.id] = el)}
              type={field.type}
              value={field.value}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
              onFocus={() => handleFieldFocus(field.id)}
              style={styles.input}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 16px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  addOptions: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  select: {
    padding: '8px',
    fontSize: '16px',
  },
  confirmButton: {
    padding: '8px 12px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  fieldWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
};

export default Reorder;
