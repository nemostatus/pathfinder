class Addusersidtogames < ActiveRecord::Migration[6.0]
  def change
        remove_column :games, :user_id, :string
        remove_column :games, :items, :string 
        add_column :games, :items, :string, array: true
  end
end
