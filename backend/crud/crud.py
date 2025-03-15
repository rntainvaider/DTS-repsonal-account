from sqlalchemy.orm import Session
from models.models import User
import bcrypt

def get_user_by_email(db: Session, email: str) -> User | None:
    return db.query(User).filter(User.email == email).first()


def create_user(db: Session, full_name: str, email: str, phone: str, password: str) -> User:
    hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    user = User(full_name=full_name, email=email, phone=phone, hashed_password=hashed_password)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user
