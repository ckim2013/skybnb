class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.integer :lodging_id, null: false
      t.integer :author_id, null: false
      t.timestamps
    end
    add_index :reviews, :title
  end
end
