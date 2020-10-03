class Addusersidtogamesfix < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :user_id, :string
    remove_column :games, :level, :string
  end
end
