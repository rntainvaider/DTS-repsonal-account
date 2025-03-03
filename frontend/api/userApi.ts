import axios from "axios";

const API_URL = "http://127.0.0.1:8000/users";

export const registerUser = async (fullName: string, email: string, phone:string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { fullName, email, phone, password });
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.detail || "Ошибка при регистрации";
    }
};

// Что делает этот код?
// Отправляет POST-запрос на /users/register.
// Если ошибка — возвращает сообщение с бэкенда.
