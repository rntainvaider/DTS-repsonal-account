from fastapi import FastAPI
from routers import users
from database import Base, engine
from fastapi.middleware.cors import CORSMiddleware

# Создаём приложение FastAPI.
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Разрешаем фронтенду доступ
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Создание таблиц
Base.metadata.create_all(bind=engine)

# Подключение маршрутов
app.include_router(users.router, prefix="/users", tags=["Users"])


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app=app, host="127.0.0.1", port=8000)
