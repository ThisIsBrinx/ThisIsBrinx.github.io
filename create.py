#!/usr/bin/env python

import cgi

form = cgi.FieldStorage()

typ = form.getvalue('type')
stil = form.getvalue('style')
wen = form.getvalue('who')
name = form.getvalue('name')
alter = form.getvalue('age')

output = f'Typ: {typ}<br>Stil: {stil}<br>Wen: {wen}<br>Name: {name}<br>Alter: {alter}'

print('Content-Type: text/html')
print()
print(output)