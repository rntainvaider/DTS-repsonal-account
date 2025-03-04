from fastapi import FastAPI, HTTPException, Depends
from schemas import UserCreate, UserResponse
from fastapi.middleware.cors import CORSMiddleware
from database import SessionLocal, engine
from models import User, Base
from sqlalchemy.orm import Session
from utils import hash_password

# Создаём таблицы в базе данных
Base.metadata.create_all(bind=engine)

app = FastAPI()


# Получение базы данных
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# Разрешаем запросы с localhost:3000 (порт React)
origins = [
    "http://localhost:3000",  # React-приложение
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Разрешаем доступ только с указанных адресов
    allow_credentials=True,
    allow_methods=["*"],  # Разрешаем все HTTP методы (GET, POST и т.д.)
    allow_headers=["*"],  # Разрешаем все заголовки
)


@app.post("/registration", response_model=UserResponse)
async def registration_user(user: UserCreate, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()
    if db_user:
        raise HTTPException(
            status_code=400, detail="Пользователь с таким email уже есть"
        )

    db_user = User(
        email=user.email,
        full_name=user.full_name,
        phone=user.phone,
        password=hash_password(user.password),
    )  # Тут лучше захешировать пароль
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return UserResponse(email=db_user.email)


@app.get("/users/{email}", response_model=UserResponse)
async def get_user(email: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return UserResponse(email=user.email)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app=app, host="127.0.0.1", port=8000)
