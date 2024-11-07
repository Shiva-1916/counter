import React, { useState } from 'react';

const FormBuilder = () => {
  const [fields, setFields] = useState([]);

  // Function to add a new field
  const addField = (type) => {
    const newField = {
      id: Date.now(), // unique id for each field
      type,
      label: '',
      value: ''
    };
    setFields([...fields, newField]);
  };

  // Function to remove a field
  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  // Function to reorder fields (up or down)
  const moveField = (index, direction) => {
    const newFields = [...fields];
    const fieldToMove = newFields[index];
    
    // Calculate the new index
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    
    // Ensure newIndex is within bounds
    if (newIndex >= 0 && newIndex < fields.length) {
      newFields.splice(index, 1); // remove field from current position
      newFields.splice(newIndex, 0, fieldToMove); // add it to new position
      setFields(newFields);
    }
  };

  // Function to handle label/value changes
  const handleChange = (id, e) => {
    const updatedFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, [e.target.name]: e.target.value };
      }
      return field;
    });
    setFields(updatedFields);
  };

  return (
    <div>
      <h2>Form Builder</h2>
      {/* Buttons to add fields */}
      <div>
        <button onClick={() => addField('text')}>Add Text</button>
        <button onClick={() => addField('checkbox')}>Add Checkbox</button>
        <button onClick={() => addField('radio')}>Add Radio Button</button>
      </div>

      {/* Render form fields */}
      <ul>
        {fields.map((field, index) => (
          <li key={field.id} style={{ marginBottom: '10px' }}>
            <input
              type="text"
              name="label"
              placeholder="Label"
              value={field.label}
              onChange={(e) => handleChange(field.id, e)}
              style={{ marginRight: '10px' }}
            />
            {field.type === 'text' && (
              <input
                type="text"
                name="value"
                placeholder="Text Input"
                value={field.value}
                onChange={(e) => handleChange(field.id, e)}
              />
            )}
            {field.type === 'checkbox' && (
              <input
                type="checkbox"
                checked={field.value === 'true'}
                onChange={(e) =>
                  handleChange(field.id, {
                    target: { name: 'value', value: e.target.checked.toString() }
                  })
                }
              />
            )}
            {field.type === 'radio' && (
              <input
                type="radio"
                checked={field.value === 'true'}
                onChange={(e) =>
                  handleChange(field.id, {
                    target: { name: 'value', value: 'true' }
                  })
                }
              />
            )}
            {/* Buttons to reorder fields */}
            <button onClick={() => moveField(index, 'up')}>Up</button>
            <button onClick={() => moveField(index, 'down')}>Down</button>
            {/* Button to remove field */}
            <button onClick={() => removeField(field.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormBuilder;
