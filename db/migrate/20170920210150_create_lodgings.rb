class CreateLodgings < ActiveRecord::Migration[5.1]
  def change
    create_table :lodgings do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false
      t.string :street, null: false
      t.string :city, null: false
      t.string :country, null: false
      t.string :image_url, null: false
      t.integer :rate, null: false
      t.string :room_type, null: false
      t.integer :beds, null: false
      t.integer :bedrooms, null: false
      t.integer :bathrooms, null: false
      t.integer :guests, null: false
      t.string :check_in, null: false
      t.string :amenities, array: true, default: []
      t.text :bio
      t.timestamps
    end
    add_index :lodgings, :city
    add_index :lodgings, :country
    add_index :lodgings, %i{street city country}, unique: true
  end
end
