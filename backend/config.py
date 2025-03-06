from dotenv import load_dotenv
import os

_ = load_dotenv()

username = os.getenv("USERNAME_DB")
password = os.getenv("PASSWORD_DB")
localhost = os.getenv("LOCALHOST_DB")
port = os.getenv("PORT_DB")
dbname = os.getenv("DBNAME_DB")

POSTGRESQL_DATABASE_URL = (
    f"postgresql://{username}:{password}@{localhost}:{port}/{dbname}"
)
