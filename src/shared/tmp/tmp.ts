import axios from "axios";

// Создание экземпляра axios с токеном в заголовках
export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000", // ваш сервер
  headers: {
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
});

// Пример использования с запросом
axiosInstance
  .get("/protected-data")
  .then((response) => console.log(response))
  .catch((error) => console.error("Error", error));
