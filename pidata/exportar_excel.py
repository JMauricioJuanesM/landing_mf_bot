import sqlite3
import pandas as pd


def generar_excel():
    try:
        # Conectamos a la base de datos
        conn = sqlite3.connect("masfast_leads.db")

        # Leemos la tabla completa con Pandas
        df = pd.read_sql_query("SELECT * FROM prospectos", conn)

        # Guardamos en un archivo Excel
        nombre_archivo = "Leads_MasFast_DemoDay.xlsx"
        df.to_excel(nombre_archivo, index=False)

        print(f"✅ ¡Éxito! Se ha generado el archivo: {nombre_archivo}")
        conn.close()
    except Exception as e:
        print(f"❌ Error al exportar: {e}")


if __name__ == "__main__":
    generar_excel()