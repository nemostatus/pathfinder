class Addleveltogames < ActiveRecord::Migration[6.0]
  def change
    add_column :games, :level, :string
  end
end
