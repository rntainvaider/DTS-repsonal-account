from passlib.context import CryptContext

# Инициализация CryptContext для использования bcrypt
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str) -> str:
    """Захешировать пароль"""
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Проверить, соответствует ли введённый пароль захешированному"""
    return pwd_context.verify(plain_password, hashed_password)
