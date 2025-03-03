from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from models import User
from database import get_db
from CRUD import get_user_by_email, create_user
from schemas import UserCreate, UserResponse

# Создаём роутер
router = APIRouter()


@router.post("/register", response_model=UserResponse)
def register(user: UserCreate, db: Session = Depends(get_db)) -> User:
    """
    Создаём нового пользователя и возвращаем его.

    Args:
        user (UserCreate): _description_
        db (Session, optional): _description_. Defaults to Depends(get_db).

    Raises:
        HTTPException: _description_

    Returns:
        User: _description_
    """
    if get_user_by_email(db, user.email):
        raise HTTPException(status_code=400, detail="Email уже зарегистрирован")
    return create_user(db, user)
