from sqlalchemy.orm import Session
from models import User
from schemas import UserCreate
from passlib.context import CryptContext

# Создаём объект для хеширования паролей с алгоритмом bcrypt.
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def get_user_by_email(db: Session, email: str) -> User | None:
    """
    Поиск пользователя по email в БД.

    Args:
        db (Session): _description_
        email (str): _description_

    Returns:
        User | None: _description_
    """
    return db.query(User).filter(User.email == email).first()


def create_user(db: Session, user: UserCreate) -> User:
    """
    Хешируем пароль перед сохранением.
    Создаём нового пользователя и сохраняем в базе.

    Args:
        db (Session): _description_
        user (UserCreate): _description_

    Returns:
        User: _description_
    """
    hashed_password = pwd_context.hash(user.password)
    db_user = User(
        full_name=user.full_name,
        email=user.email,
        phone=user.phone,
        hashed_password=hashed_password,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
