import { useState, useCallback } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = useCallback(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div>
      <label>Email</label>
      <br />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <br /><br />
      <label>Password</label>
      <br />
      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      <br /><br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default LoginForm;
