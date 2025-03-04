from pydantic import BaseModel


class UserCreate(BaseModel):
    full_name: str
    email: str
    phone: str
    password: str


class UserResponse(BaseModel):
    email: str

    class Config:
        from_attributes = True
