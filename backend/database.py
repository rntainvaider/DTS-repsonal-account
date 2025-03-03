from typing import Any, Generator
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm.session import Session
from config import DATABASE_URL

# Создаём движок для работы с PostgreSQL.
engine = create_engine(DATABASE_URL, echo=True)
# Создаём фабрику сессий для взаимодействия с БД.
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
# Создаём базовый класс для моделей — все таблицы будут наследоваться от него.
Base = declarative_base()


def get_db() -> Generator[Session, Any, None]:
    """
    Функция для получения сессии БД
    Открывает сессию базы данных.
    Передаёт её в качестве зависимости в роуты.
    Закрывает соединение после завершения запроса.

        Yields:
            Generator[Session, Any, None]: _description_
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
