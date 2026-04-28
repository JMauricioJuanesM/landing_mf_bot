import sqlite3


def leer_prospectos():
    conn = sqlite3.connect("masfast_leads.db")
    cursor = conn.cursor()

    cursor.execute("SELECT * FROM prospectos")
    filas = cursor.fetchall()

    print(f"{'ID':<3} | {'Restaurante':<20} | {'WhatsApp':<15} | {'Problema':<15}")
    print("-" * 60)

    for fila in filas:
        print(f"{fila[0]:<3} | {fila[1]:<20} | {fila[2]:<15} | {fila[4]:<15}")

    conn.close()


if __name__ == "__main__":
    leer_prospectos()