import React, { useState } from 'react'

const Registration = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Собираем данные из формы
        const user = {
          email: email,
          full_name: fullName,
          phone: phone,
          password: password,
        };

        try {
          // Отправляем запрос на сервер FastAPI
          const response = await fetch("http://127.0.0.1:8000/registration", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          });

          // Если запрос успешен, показываем сообщение
          if (response.ok) {
            const result = await response.json();
            setSuccessMessage(`Пользователь с email ${result.email} зарегистрирован!`);
            setError(""); // очищаем ошибки
          } else {
            const result = await response.json();
            setError(result.detail); // Показываем ошибку, если что-то не так
            setSuccessMessage(""); // очищаем успешное сообщение
          }
        } catch (err) {
          setError("Ошибка подключения к серверу");
          setSuccessMessage(""); // очищаем успешное сообщение
        }
      };

  return (
    <div>
        <h2>Форма регистрации</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name">ФИО</label>
          <input
            type="text"
            id="full_name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Телефон</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Зарегистрироваться</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
    </div>
  )
}

export default Registration
