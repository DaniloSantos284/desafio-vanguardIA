










import React from "react";
import { useState } from "react";
import { useFormValidation } from "./validation";



export default function Form() {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [city, setCity] = React.useState<string>('');
   const [errors, setErrors] = React.useState<{ name?: string; email?: string; address?: string }>({});
  const [successMessage, setSuccessMessage] = React.useState<string>('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log({ name, email, city });
      }}
    >
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          placeholder='Digite seu nome'
          type="text"
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          placeholder='Digite seu email'
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="city">Cidade:</label>
        <input
          placeholder='Digite sua cidade'
          type="text"
          id="city"
          name="city"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}



