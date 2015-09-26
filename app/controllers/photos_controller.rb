class PhotosController < ApplicationController

  def index
    client = Instagram.client(:access_token => session[:access_token])
    @photos = client.tag_recent_media('foodie')


  end


end