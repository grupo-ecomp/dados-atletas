# Projeto: Dados dos Atletas

## Descrição
Este projeto tem como objetivo desenvolver uma aplicação em **JavaScript** capaz de receber informações de um atleta, calcular seus principais parâmetros físicos e classificatórios, e exibir os resultados no console.

A aplicação utiliza **Programação Orientada a Objetos (POO)**.

---

## Estrutura da Classe `Atleta`

A classe `Atleta` concentra os atributos e métodos relacionados aos atletas.

### Atributos
- `nome`
- `idade`
- `peso`
- `altura`
- `notas` (array de notas do atleta)

### Métodos
| Método | Descrição |
|:--|:--|
| `calcularCategoria()` | Define a categoria do atleta com base na idade |
| `calcularIMC()` | Calcula o Índice de Massa Corporal (IMC) |
| `calcularMediaValida()` | Calcula a média válida das notas (descarta a maior e a menor) |
| `obtemNomeAtleta()` | Retorna o nome do atleta |
| `obtemIdadeAtleta()` | Retorna a idade |
| `obtemPesoAtleta()` | Retorna o peso |
| `obtemNotasAtleta()` | Retorna as notas originais |
| `obtemAlturaAtleta()` | Retorna a altura |
| `obtemCategoriaAtleta()` | Retorna a categoria do atleta |
| `obtemIMCAtleta()` | Retorna o IMC calculado |
| `obtemMediaValida()` | Retorna a média válida calculada |

---

## Regras de Cálculo

### Categoria
| Idade | Categoria |
|:--|:--|
| 9 a 11 | Infantil |
| 12 a 13 | Juvenil |
| 14 a 15 | Intermediário |
| 16 a 30 | Adulto |
| Demais | Sem categoria |

### IMC
IMC = peso / (altura * altura)

### 🧮 Média Válida
- Ordena as notas em ordem crescente.
- Remove a **menor** e a **maior** nota.
- Calcula a média das restantes.

---

Desenvolvido por
Pedro M. Maia