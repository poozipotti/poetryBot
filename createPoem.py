#!/usr/bin/env python
# coding: utf-8

# In[1]:


import markovify,json

with open('model_json.txt') as f:
    model_json3 = json.load(f)
with open('model_json2.json') as f:
    model_json2 = json.load(f)
    

order3Model = markovify.Text.from_json(model_json3)
order2Model  = markovify.Text.from_json(model_json2)


import random as r
for x in range(1,1000):
	with open("poems.txt", "a") as poemFile:
		for i in range(r.randint(2,7)):
			poemFile.write(order2Model.make_short_sentence(r.randint(40,80),tries=100)+"\n")
	
		poemFile.write("%---------------------------------%\n");
    




