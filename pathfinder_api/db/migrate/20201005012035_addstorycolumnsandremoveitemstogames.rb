class Addstorycolumnsandremoveitemstogames < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :choice1, :string
    add_column :games, :choice2, :string
    add_column :games, :prompt, :string
    remove_column :games, :items, :string
  end
end
