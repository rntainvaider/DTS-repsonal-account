import os
from dotenv import load_dotenv


_ = load_dotenv()

USER = os.getenv("USER")
PASSWORD = os.getenv("PASSWORD")
LOCALHOST = os.getenv("LOCALHOST")
PORT = os.getenv("PORT")
DBNAME = os.getenv("DBNAME")

DATABASE_URL = f"postgresql://{USER}:{PASSWORD}@{LOCALHOST}:{PORT}/{DBNAME}"
