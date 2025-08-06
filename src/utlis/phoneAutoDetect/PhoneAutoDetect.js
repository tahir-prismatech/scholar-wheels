import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

import "./PhoneAutoDetect.css"
import axios from 'axios';

export default function PhoneAutoDetect() {
    const [countryCode, setCountryCode] = useState('us'); // fallback
    const [phone, setPhone] = useState('');

    useEffect(() => {
        fetch('https://api.country.is')
            .then(res => res.json())
            .then(res => {
                const country = res.country_code.toLowerCase(); // ✅ Correct
                console.log(country)
                setCountryCode(country);
            })
            .catch(err => {
                console.error("Country detect error:", err);
            });
    }, []);

    return (

        <PhoneInput
            country={countryCode}
            value={phone}
            onChange={setPhone}
            inputProps={{ name: 'phone', required: true, autoFocus: true }}
            inputClass="custom-phone-input"
        />


    );
}
