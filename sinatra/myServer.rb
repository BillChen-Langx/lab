# myapp.rb
require 'sinatra'
require 'json'
require 'sinatra/reloader' if development?

set :bind, 'think'

names =[]

get '/' do
   content_type :json
   { :name => 'bill chen', :age => 22, :address=> 'Vancouver, BC', :phone => '778-838-1000'}.to_json
end

get '/people/:name' do
	content_type :json
	requestName = "#{params[:name]}"
	now = Time.now
	
	thisName =
	{  :name => requestName, 
	   :age => 22, 
	   :address => 'Vancouver, BC ' + requestName, 
	   :phone => '7777',
	   :lastModified => now,
	   :arrayNum =>names.length
	}.to_json
	
	
	names.push(thisName)
	names.to_json
	
end
	