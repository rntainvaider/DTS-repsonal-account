from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    """
    UserCreate (для входных данных)
    email должен быть валидным EmailStr
    password — просто строка
    phone - просто строка

        Args:
            BaseModel (_type_): _description_
    """

    full_name: str
    email: EmailStr
    password: str
    phone: str


class UserResponse(BaseModel):
    """
    id и email отправляются клиенту
    from_attributes = True позволяет Pydantic работать с SQLAlchemy-моделями

    Args:
        BaseModel (_type_): _description_
    """

    id: int
    email: EmailStr

    class Config:
        from_attributes = True
