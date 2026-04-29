from fastapi import FastAPI, Form, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
import shutil
import os

app = FastAPI()

# Permitir que tu Landing Page hable con este servidor
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Crear la base de datos y la tabla si no existen
def init_db():
    conn = sqlite3.connect("masfast_leads.db")
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS prospectos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            restaurante TEXT,
            whatsapp TEXT,
            email TEXT,
            problema TEXT,
            menu_path TEXT
        )
    ''')
    conn.commit()
    conn.close()

init_db()

@app.post("/registro")
async def registro(
    f_rest: str = Form(...),
    f_wa: str = Form(...),
    f_email: str = Form(...),
    f_problema: str = Form(...),
    f_menu: UploadFile = File(None)
):
    # Guardar el archivo si existe y tiene nombre
    menu_path = ""
    if f_menu and f_menu.filename:
        os.makedirs("uploads", exist_ok=True)
        filename = os.path.basename(f_menu.filename)
        menu_path = f"uploads/{filename}"
        with open(menu_path, "wb") as buffer:
            shutil.copyfileobj(f_menu.file, buffer)
        print(f"Archivo guardado: {menu_path}")

    # Guardar en SQLite
    conn = sqlite3.connect("masfast_leads.db")
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO prospectos (restaurante, whatsapp, email, problema, menu_path) VALUES (?, ?, ?, ?, ?)",
        (f_rest, f_wa, f_email, f_problema, menu_path)
    )
    conn.commit()
    conn.close()

    return {"status": "success", "message": "Datos guardados en MasFast DB"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)