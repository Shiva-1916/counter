import { useCallback } from "react";

const FormComponent = () => {
    const handleSubmit = useCallback((e) => {
      e.preventDefault();
      console.log('Form submitted');
    }, []);
    
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  };
export default FormComponent 