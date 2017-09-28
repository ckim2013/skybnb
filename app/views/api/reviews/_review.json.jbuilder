author = review.author

json.extract! review, :id, :title, :body, :rating, :creation_date

json.author do
  json.extract! author, :first_name, :last_name, :image_url
end
