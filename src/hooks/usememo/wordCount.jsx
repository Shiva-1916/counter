import { useState, useMemo } from 'react';

function WordCount() {
  const [text, setText] = useState('');
  const wordCount = useMemo(() => text.length, [text]);
  
  return (
    <div style={{marginTop:"10px",textAlign:"center"}}>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
      <p>Word count: {wordCount}</p>
    </div>
  );
}
export default WordCount
