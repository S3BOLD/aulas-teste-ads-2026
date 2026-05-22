# base-aulas-testes

## Rotas disponíveis

### Somar
```bash
curl -X POST http://localhost:3000/api/somar \
  -H "Content-Type: application/json" \
  -d '{"num1": 10, "num2": 5}'
```

### Subtrair
```bash
curl -X POST http://localhost:3000/api/subtrair \
  -H "Content-Type: application/json" \
  -d '{"num1": 10, "num2": 5}'
```

### Multiplicar
```bash
curl -X POST http://localhost:3000/api/multiplicar \
  -H "Content-Type: application/json" \
  -d '{"num1": 10, "num2": 5}'
```

### Dividir
```bash
curl -X POST http://localhost:3000/api/dividir \
  -H "Content-Type: application/json" \
  -d '{"num1": 10, "num2": 5}'
```
