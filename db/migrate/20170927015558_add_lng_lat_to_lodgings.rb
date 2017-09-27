class AddLngLatToLodgings < ActiveRecord::Migration[5.1]
  def change
    add_column :lodgings, :lng, :float
    add_column :lodgings, :lat, :float
  end
end
