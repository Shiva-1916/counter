// src/FormBuilder.jsx
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Define available input types
const inputTypes = [
  { value: 'text', label: 'Text' },
  { value: 'password', label: 'Password' },
  { value: 'email', label: 'Email' },
  { value: 'checkbox', label: 'Checkbox' },
  { value: 'radio', label: 'Radio Button' },
  // Add more types as needed
];

const DragBuilder = () => {
  const [fields, setFields] = useState([]);
  const [showAddOptions, setShowAddOptions] = useState(false);
  const [newFieldType, setNewFieldType] = useState(inputTypes[0].value);

  // Function to add a new field
  const addField = () => {
    const newField = {
      id: `field-${Date.now()}`, // unique id
      type: newFieldType,
      label: '',
      value: newFieldType === 'checkbox' || newFieldType === 'radio' ? false : '',
    };
    setFields([...fields, newField]);
    setShowAddOptions(false);
  };

  // Function to delete a field
  const deleteField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  // Function to handle label changes
  const handleLabelChange = (id, e) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, label: e.target.value } : field
    );
    setFields(updatedFields);
  };

  // Function to handle value changes
  const handleValueChange = (id, e) => {
    const updatedFields = fields.map((field) =>
      field.id === id
        ? {
            ...field,
            value:
              field.type === 'checkbox' || field.type === 'radio'
                ? e.target.checked
                : e.target.value,
          }
        : field
    );
    setFields(updatedFields);
  };

  // Function to handle drag end
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedFields = Array.from(fields);
    const [movedField] = reorderedFields.splice(result.source.index, 1);
    reorderedFields.splice(result.destination.index, 0, movedField);

    setFields(reorderedFields);
  };

  return (
    <div style={styles.container}>
      <h2>Dynamic Form Builder</h2>

      {/* Add Field Section */}
      <div style={styles.addSection}>
        <button onClick={() => setShowAddOptions(!showAddOptions)} style={styles.addButton}>
          Add Field
        </button>

        {showAddOptions && (
          <div style={styles.addOptions}>
            <select
              value={newFieldType}
              onChange={(e) => setNewFieldType(e.target.value)}
              style={styles.select}
            >
              {inputTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            <button onClick={addField} style={styles.confirmButton}>
              Add
            </button>
          </div>
        )}
      </div>

      {/* Form Fields with Drag and Drop */}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="fields">
          {(provided) => (
            <ul
              style={styles.fieldList}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {fields.map((field, index) => (
                <Draggable key={field.id} draggableId={field.id} index={index}>
                  {(provided) => (
                    <li
                      style={styles.fieldItem}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {/* Field Label */}
                      <input
                        type="text"
                        placeholder="Label"
                        value={field.label}
                        onChange={(e) => handleLabelChange(field.id, e)}
                        style={styles.labelInput}
                      />

                      {/* Field Input */}
                      {field.type === 'text' && (
                        <input
                          type="text"
                          placeholder="Enter text"
                          value={field.value}
                          onChange={(e) => handleValueChange(field.id, e)}
                          style={styles.input}
                        />
                      )}

                      {field.type === 'password' && (
                        <input
                          type="password"
                          placeholder="Enter password"
                          value={field.value}
                          onChange={(e) => handleValueChange(field.id, e)}
                          style={styles.input}
                        />
                      )}

                      {field.type === 'email' && (
                        <input
                          type="email"
                          placeholder="Enter email"
                          value={field.value}
                          onChange={(e) => handleValueChange(field.id, e)}
                          style={styles.input}
                        />
                      )}

                      {field.type === 'checkbox' && (
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={(e) => handleValueChange(field.id, e)}
                          style={styles.checkbox}
                        />
                      )}

                      {field.type === 'radio' && (
                        <input
                          type="radio"
                          checked={field.value}
                          onChange={(e) => handleValueChange(field.id, e)}
                          style={styles.radio}
                        />
                      )}

                      {/* Delete Button */}
                      <button onClick={() => deleteField(field.id)} style={styles.deleteButton}>
                        Delete
                      </button>
                    </li>
                  )}
                </Draggable>
              ))}

              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>

      {/* Optional: Preview the Form */}
      <div style={styles.preview}>
        <h3>Form Preview</h3>
        <form>
          {fields.map((field) => (
            <div key={field.id} style={styles.previewField}>
              <label style={styles.previewLabel}>{field.label}</label>
              {field.type === 'text' && (
                <input type="text" value={field.value} readOnly style={styles.previewInput} />
              )}
              {field.type === 'password' && (
                <input type="password" value={field.value} readOnly style={styles.previewInput} />
              )}
              {field.type === 'email' && (
                <input type="email" value={field.value} readOnly style={styles.previewInput} />
              )}
              {field.type === 'checkbox' && (
                <input type="checkbox" checked={field.value} readOnly />
              )}
              {field.type === 'radio' && <input type="radio" checked={field.value} readOnly />}
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

// Basic styling
const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  addSection: {
    marginBottom: '20px',
  },
  addButton: {
    padding: '10px 20px',
    fontSize: '16px',
  },
  addOptions: {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  select: {
    padding: '8px',
    fontSize: '16px',
    marginRight: '10px',
  },
  confirmButton: {
    padding: '8px 16px',
    fontSize: '16px',
  },
  fieldList: {
    listStyle: 'none',
    padding: 0,
  },
  fieldItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '8px',
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  labelInput: {
    flex: '1',
    padding: '8px',
    marginRight: '10px',
  },
  input: {
    flex: '2',
    padding: '8px',
    marginRight: '10px',
  },
  checkbox: {
    marginRight: '10px',
  },
  radio: {
    marginRight: '10px',
  },
  deleteButton: {
    padding: '6px 12px',
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  preview: {
    marginTop: '40px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#fdfdfd',
  },
  previewField: {
    marginBottom: '15px',
  },
  previewLabel: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  previewInput: {
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
  },
};

export default DragBuilder;
