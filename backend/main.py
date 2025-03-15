from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from schemas.schemas import UserCreate, UserResponse
from database.database import get_db
from models.models import User
from crud import crud
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Разрешаем React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/registration/", response_model=UserResponse)
async def register_user(user: UserCreate, db: Session = Depends(get_db)) -> User:
    db_user = crud.get_user_by_email(db, user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Пользователь с таким email существует")
    return crud.create_user(db, user.full_name, user.email, user.phone, user.password)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app=app, host="127.0.0.1", port=8000)
