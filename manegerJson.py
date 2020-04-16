#!/usr/bin/env python3
# coding:utf-8

import json

with open('json/database_testes.json') as database:
    data = json.load(database)
"""
print(type(data))
novo_link = {"nome": "novo"}
data.append(novo_link)

print(type(data))

for link in data:
    print(link['nome'])

with open('json/database_testes.json', 'w') as novoJson:
    json.dump(data, novoJson, indent=2)

"""

class Link:
    def __init__(self,name,type_midia,category,url,language):
        self.name = name
        self.type_midia = type_midia
        self.category = category
        self.url = url 
        self.language = language

    def toDictionary(self):
        return { 
            "name": self.name,
            "type_midia": self.type_midia,
            "category":self.category,
            "url":self.url,
            "language":self.language
            }

    

def addLink(data):
    print("adicionando novo link")
    
    name = str(input("nome: "))
    type_midia = str(input("tipo de midia:"))
    category = str(input("categoria:"))
    url = str("url:")
    language = str("idioma:")

    link = Link(name, type_midia, category, url, language)
    data.append(link.toDictionary())
    return data

def saveLinks(data):
    print("salvando...")
    with open('json/database_testes.json', 'w') as novoJson:
        json.dump(data, novoJson, indent=2)


#++++++++++++++++++++++

saveLinks(addLink(data))
