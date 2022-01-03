 let consumer_key = os.environ.get("CONSUMER_KEY")
let consumer_secret = os.environ.get("CONSUMER_SECRET")

// if using api, have array of words to search for
// after sending to api, remove word from array
// add logic to not send tweet if array is empty


let id = "tweet-id-to-delete"

let payload = {"text": "Hello world!"}


let request_token_url = "https://api.twitter.com/oauth/request_token"



let response = oauth.delete("https://api.twitter.com/2/tweets/{}".format(id))
let response = oauth.post(
    "https://api.twitter.com/2/tweets",
    json=payload,
)

if(response.status_code !== 200 || response.status_code !== 201){

    console.log(
        "Request returned an error: {} {}".format(response.status_code, response.text)
    )
    }


json_response = response.json()
print(json_response)
print(json.dumps(json_response, indent=4, sort_keys=True))