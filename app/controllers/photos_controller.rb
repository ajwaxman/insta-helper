class PhotosController < ApplicationController

  def index
    client = Instagram.client(:access_token => session[:access_token])
    @photos = client.tag_recent_media('foodie')
  end

  def follow_user
    id = params[:id]
    Instagram.client(:access_token => session[:access_token]).follow_user(id)    

    respond_to do |format|
      format.json { render :json => {} }
    end
  end


end