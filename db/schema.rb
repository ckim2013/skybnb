# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170928035634) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.integer "lodging_id", null: false
    t.integer "booker_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lodgings", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "title", null: false
    t.string "street", null: false
    t.string "city", null: false
    t.string "country", null: false
    t.string "image_url", null: false
    t.integer "rate", null: false
    t.string "room_type", null: false
    t.integer "beds", null: false
    t.integer "bedrooms", null: false
    t.integer "bathrooms", null: false
    t.integer "guests", null: false
    t.string "check_in", null: false
    t.string "amenities", default: [], array: true
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "lng"
    t.float "lat"
    t.string "district"
    t.index ["city"], name: "index_lodgings_on_city"
    t.index ["country"], name: "index_lodgings_on_country"
    t.index ["street", "city", "country"], name: "index_lodgings_on_street_and_city_and_country", unique: true
  end

  create_table "reviews", force: :cascade do |t|
    t.string "title", null: false
    t.text "body", null: false
    t.integer "rating", null: false
    t.integer "lodging_id", null: false
    t.integer "author_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_reviews_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "image_url"
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

end
