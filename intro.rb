# p 3 + 5
# p 5 % 10
# p 5 * 3
# p 6 ** 4
# p 3.5 / 2
# p (0.15 + 0.3).round(2)


# p 5 == 5
# p 5 == 6
# p 5 != 12

# p 5 < 9
# p 5 > 9
# p 5 >= 2
# p 5 <= 5

# #logical opertators
# p 8 >= 2 && 15 <=13
# p 8 >= 2 || 15 <= 13

# #strings

# p 'hello'
# p "hello"
# p "Hello it's good to be here"

# #built in methods

# p "hello".upcase
# p 'hello'.upcase
# p 'HELLO'.downcase
# p 'hello'.capitalize
# p 'hello'.reverse
# p 'hello' * 4

# p 'hello'.reverse.upcase
# p 'this is a sentance'.capitalize

# #for a symbol youy will need to use a : and it will always have the same id

# p 'a string'.object_id
# p 'a string'.object_id
# p 'a string'.object_id

# p :a_symbol.object_id
# p :a_symbol.object_id
# p :a_symbol.object_id

# #variable is always snake_case
# # once value is assigned that you can recall it using the object_id

# p fisrt_string = "my string"
# p fisrt_string.object_id


# #string interpolation
# # to add code/ var to string

# num1 = 4 
# num2 = 5

# p "The number #{num1} is less than #{num1 + num2}" 

# #Array and Methods

# num = [8, 9, 10, 11, 12, 13]
# # p num.reverse
# # p num.length
# # #retun a number from array
# # p num[3]
# # p num.first
# # p num.last

# # p num[4]

# #Assign a value to an index

# # num[2] = 100

# # to append or ad to the the end of the array use shovel operator <<

# p num << 50

# #you can also permantantly mutate the var/array by adding the bang operator affter the method. .reverse!
# # num.reverse!

# # p num

# puts "hello word"

# puts [4, 5, 6, 7, 8]

# #method gets asks users for input. 

# puts "Enter your name"
# name = gets

# # p name.chomp

# #to remove /n "new line" use .chomp 

# puts "Hello #{name} how are you todat?"




########CHALLANGES#######

# p 1 + 5
# p 5 - 2
# p 10 / 5
# p 0.5 + 1.5
# p 100 / 0.7
# p 7 % 3
# p 7 / 0
# p 0 / 0

##variable challanges

### first im going to set you a variable names my_favorite_number that will equel 22
## divide 22 by 2
## set up anothe var called someones_favorite equal to 13
##chanage the value of someones_favorite to 7
## subtract my_favorite_number from someones_favorite 
##chanfe the value of my_favorite_number to be 26 times current value. 

my_favorite_number = 22

p my_favorite_number / 2

someones_favorite = 13

p someones_favorite

someones_favorite = 7

p  someones_favorite

p my_favorite_number - someones_favorite

p (my_favorite_number - someones_favorite) * 26


# create  a var and return string iterpolation 

first_choise = 'fun day'

p first_choise.upcase
p first_choise.reverse
# p first_choise.include?
p first_choise.capitalize

##### array challanges  ####
tv_shows = ["sg1", "community", "itcrowd", "broad city", "loki", "footy"]

puts tv_shows

p tv_shows.length

p tv_shows[0, 3]

p tv_shows.reverse

p tv_shows[]








