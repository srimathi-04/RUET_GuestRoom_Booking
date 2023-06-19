/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState } from 'react';
import Loader from '../../components/Loader';

const AddRoom = () => {
  const [name, setName] = useState('');
  const [rentperday, setRentperday] = useState('');
  const [maxcount, setMaxcount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [imageurl1, setImageurl1] = useState('');
  const [imageurl2, setImageurl2] = useState('');
  const [imageurl3, setImageurl3] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function addRoom() {
    const newroom = {
      name,
      rentperday,
      maxcount,
      description,
      type,
      imageurls: [imageurl1, imageurl2, imageurl3],
    };
    try {
      setLoading(true);
      const result = await axios.post('/api/rooms/addroom', newroom);
      console.log(result.data);
      window.alert('Room added successfully');
      setLoading(false);
      window.location.reload();
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
      window.alert('Something went wrong');
    }
  }

  return (
    <div className="row">
      {loading && <Loader />}
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="room name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="rent per day"
          value={rentperday}
          onChange={(e) => setRentperday(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="max count"
          value={maxcount}
          onChange={(e) => setMaxcount(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="col-md-6">
        <input
          type="text"
          className="form-control"
          placeholder="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="image url 1"
          value={imageurl1}
          onChange={(e) => setImageurl1(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="image url 2"
          value={imageurl2}
          onChange={(e) => setImageurl2(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="image url 3"
          value={imageurl3}
          onChange={(e) => setImageurl3(e.target.value)}
        />
        <div className="text-right">
          <button className="btn btn-primary mt-2" onClick={addRoom}>
            Add Room
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
