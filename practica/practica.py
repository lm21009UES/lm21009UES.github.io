import matplotlib.pyplot as plt

def producto(num1):
    return num1**3
pasar = True
while pasar:
    try:
        print("inserte un numero entero")
        numero = int(input())
    except Exception:
        print('Ha ocurrido un problema, vuelva a intentarlo')
    else:
        print('Todo bien')
        pasar = False
print('Saliendo del While')
print('Imprimiendo el resultado:', producto(numero))