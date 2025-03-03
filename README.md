[Запуск проекта](#запуск-проекта)

## Запуск проекта
- Запуск frontend

```
cd frontend
npm install
npm start
```

- Запуск backend

```
python -m venv venv
pip install -r requirements.txt
.env # создать данный файл с переменными
# USER=
# PASSWORD=
# LOCALHOST=
# PORT=
# DBNAME=
cd backend
uvicorn main:app --reload
```
