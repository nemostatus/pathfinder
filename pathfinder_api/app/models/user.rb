class User < ApplicationRecord
    has_secure_password
    has_many :games
    validates_uniqueness_of :username
    
   
end
