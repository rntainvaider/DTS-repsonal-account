from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Настройка подключения к базе данных
SQLALCHEMY_DATABASE_URL = (
    "postgresql://postgres:123@localhost:5432/final_project"  # Замените на свои данные
)

# Создаём движок SQLAlchemy
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Создаём сессию
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Базовый класс для моделей
Base = declarative_base()
