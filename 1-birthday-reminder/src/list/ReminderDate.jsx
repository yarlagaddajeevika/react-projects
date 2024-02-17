import React, { useState } from 'react';

const BirthdayReminder = () => {
  const [birthdays, setBirthdays] = useState([]);
  const [newBirthday, setNewBirthday] = useState({ name: '', date: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBirthday({
      ...newBirthday,
      [name]: value
    });
  };

  const addBirthday = () => {
    if (newBirthday.name && newBirthday.date) {
      setBirthdays([...birthdays, { ...newBirthday }]);
      setNewBirthday({ name: '', date: '' });
    }
  };

  const removeBirthday = (index) => {
    const updatedBirthdays = [...birthdays];
    updatedBirthdays.splice(index, 1);
    setBirthdays(updatedBirthdays);
  };

  return (
    <div>
      <h2>Birthday Reminder</h2>

      {birthdays.length === 0 ? (
        <p>No birthdays to display. Add one!</p>
      ) : (
        <ul>
          {birthdays.map((birthday, index) => (
            <li key={index}>
              {birthday.name} - {birthday.date}
              <button onClick={() => removeBirthday(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

      <form onSubmit={(e) => { e.preventDefault(); addBirthday(); }}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={newBirthday.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={newBirthday.date} onChange={handleInputChange} required />
        </div>
        <button type="submit">Add Birthday</button>
      </form>
    </div>
  );
};

export default BirthdayReminder;
