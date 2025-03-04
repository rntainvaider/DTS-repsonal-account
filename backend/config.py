from dotenv import load_dotenv
import os

_ = load_dotenv()

username = os.getenv("USERNAME")
password = os.getenv("PASSWORD")
localhost = os.getenv("LOCALHOSTDB")
port = os.getenv("PORTDB")
dbname = os.getenv("DBNAME")

POSTGRESQL_DATABASE_URL = (
    f"postgresql://{username}:{password}@{localhost}:{port}/{dbname}"
)
