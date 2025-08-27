import { useState, useCallback } from 'react';

function ColorPicker() {
  const [selectedColor, setSelectedColor] = useState('');

  const handleChangeColor = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(e.target.value);
  }, []);

  return (
    <div>
      <label>Màu người dùng chọn:</label>
      <br />
      <input type="color" onChange={handleChangeColor} />
      <br /><br />

      <p>Màu hiển thị:</p>
      <div
        style={{
          width: '200px',
          height: '60px',
          backgroundColor: selectedColor,
          border: '1px solid #ccc',
        }}
      />
    </div>
  );
}

export default ColorPicker;
