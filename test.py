import request
apikey='d86b4d5161c743c7829762825c846cea'
meal="pasta"
url='https://api.spoonacular.com/recipes/complexSearch?query=${meal}&number=1&apiKey=${apiKey}'
response=request.get('url')
print(response.text)