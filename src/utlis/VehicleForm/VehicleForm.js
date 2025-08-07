import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import PhoneAutoDetect from '../phoneAutoDetect/PhoneAutoDetect';
import DatePicker from 'react-datepicker';

export default function VehicleForm({
  className = 'col-md-4 mb-3',
  fields = [
    { type: 'text', label: 'Vehicle Number', placeholder: '' },
    { type: 'select', label: 'Vehicle Type', options: ['Car', 'Bus'] },
    { type: 'phone', label: 'Owner Phone' },
  ]
}) {


  const [selected, setSelected] = useState(null);

  return (
    <form className="container-fluid">
      <div className="row mt-2">
        {fields.map((field, index) => {
          const { type, label, placeholder, options = [] } = field;

          return (
            <div key={index} className={className}>
              {label && <label className="form-label">{label}</label>}

              {type === 'text' && (
                <input
                  type="text"
                  className="form-control"
                  placeholder={placeholder || ''}
                />
              )}

              {type === 'select' && (
                <select className="form-select">
                  {options.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
              )}

              {type === 'phone' && <PhoneAutoDetect />}

              {type === 'date' && (
                <div className="w-100">
                  <DatePicker
                    className="form-control w-100"
                    placeholderText="DD/MM/YY"
                    format="dd/MM/yyyy"
                    selected={selected}
                    onChange={(date) => setSelected(date)}
                    wrapperClassName="w-100"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </form>
  );
}
