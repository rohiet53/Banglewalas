import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './uploadForm.css'; 
import { fetchPropertyURL } from '../../constants';

const UploadForm = () => {
  const [formData, setFormData] = useState({
    cover: '',
    name: '',
    location: '',
    category: '',
    price: '',
    type: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(fetchPropertyURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to create property');
      }

      navigate('/blogs'); // Redirect after success
    } catch (error) {
      setError('❌ ' + error.message);
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Create New Property</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="cover"
          placeholder="Cover Image URL"
          value={formData.cover}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="form-input"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="form-input"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="form-input"
          required
        >
          <option value="">Select Category</option>
          <option value="For Rent">For Rent</option>
          <option value="For Sale">For Sale</option>
        </select>
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="form-input"
          required
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="form-input"
          required
        >
          <option value="">Select Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Condos">Condos</option>
          <option value="Offices">Offices</option>
          <option value="Homes & Villas">Homes & Villas</option>
          <option value="Commercial">Commercial</option>
        </select>
        <button type="submit" className="form-button">
          Create Property
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default UploadForm;
