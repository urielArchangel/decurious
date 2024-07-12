import { Schema, model, models } from "mongoose";

const EventAdminSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },

  eventsKey:[String]

});


const EventAdmin = models.event_admin || model("event_admin",EventAdminSchema)

export default EventAdmin