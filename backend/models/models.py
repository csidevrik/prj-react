from pydantic import BaseModel

class Partida(BaseModel):
    codigo: str
    nombre: str
    valor_total: float

class CentroCosto(BaseModel):
    partida_id: str
    numero: int
    nombre: str
    valor: float
