import { ModelType } from "@/decarations"

interface P {
    [key:string]:ModelType
}



export const eventMap:P = {"01234":{
    "name":"Web3 Builders Night",
    "event_span":"Multiple days",
    "start_time":"10:00PM (WAT)",
    "number_of_days":2,
    "setup_status":"ready",
    "event_status":"not yet started",
    "start_date":1719662341400,
    "image":"https://images.lumacdn.com/event-covers/xa/38034827-b3cd-44f2-af18-ea4a03455185",
    "welcome_message":"hello and welcome to the best event of your life"    
    "days":[
        {
            "sessions":[
                {
                    "topic":"Love in blockchain",
                    "banner":"",
                    "speakers":[{
                        "name":"julia",
                        "title":"ceo of denonymous",
                        "socials":{
                            "twitter":"https://x.com/random"
                        }
                    }]
                }
            ]
        }
    ]
}}