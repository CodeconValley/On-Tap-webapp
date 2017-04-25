class Api::CommentsController < ApplicationController
  before_action :require_logged_in

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    if @comment.save
      render :show
    else
      render json: {base: ["You cannot comment on this checkin"]}
    end
  end

  def update

  end

  def show

  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show

  end

  private
  def comment_params
    params.require(:comment).permit(:user_id, :checkin_id, :comment)
  end

end
