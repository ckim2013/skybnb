class AddDistrictToLodgings < ActiveRecord::Migration[5.1]
  def change
    add_column :lodgings, :district, :string
  end
end
