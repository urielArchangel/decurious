import { Schema, models, model } from "mongoose";

const EventsSchema = new Schema({


event: {
    name: String,
    event_span: String,
    start_time: String,
    setup_status: String,
    number_of_days: Number,
    event_status: String,
    start_date: Number,
    image: String,
    welcome_message: String,
    link: String,
    days: [
      {
        sessions: [
          {
            topic: String,
            banner: String,
            id: String,
            start_time: Number,
            status: String,
            setup_status: String,
            speakers: [
              {
                name: String,
                title: String,
                setup_status: String,
                socials: {
                  twitter: String,
                  linkedin: String,
                  facebook: String,
                },
                additional_info: String,
              },
            ],
          },
        ],
      },
    ],
  },

})

const Events=models.events || model("events",EventsSchema)

export default Events