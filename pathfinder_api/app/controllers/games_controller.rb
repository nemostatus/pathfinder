class GamesController < ApplicationController
  

  # GET /games
  def index
    @user = User.find(params[:user_id])
    @games = @user.games

    render json: @games
  end

  # GET /games/1
  def show
    @user = User.find(params[:user_id])
    @game = @user.games.find(params[:id])

    render json: @game
  end

  # POST /games
  def create
       @user = User.find(params[:user_id])
    @game = @user.games.build(game_params)

    if @game.save
       render json: @game #status: :created, location: @game
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT users/user_id/games/id
  def update
    @user = User.find(params[:user_id])
    @game = @user.games.find(params[:id])

    if @game.update(game_params)
      render json: @game
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  # DELETE /games/1
  def destroy
    @user = User.find(params[:user_id])
    @game = @user.games.find(params[:id])
    @game.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    

    # Only allow a trusted parameter "white list" through.
    def game_params
      params.require(:game).permit(:hearts, :choice1, :choice2, :prompt, :user_id, :level)
    end
end
