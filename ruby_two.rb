
#conditionals 
#if/else/end

# my_num = 11

# if my_num == 10
#     puts "Your number is 10!"
# else 
#     puts "Your number is not 10"
# end

#if/elsif/else/end

# my_new_num = 2

# if my_new_num == 10
#     puts "Your number is 10!"
# elsif my_new_num < 10
#     puts "your number is lesst then 10"
# elsif my_new_num > 10
#     puts "your number is grater then 10"
# else
#     puts "something went wrong"
# end


#unless (if not)

# this_num = 23

# unless this_num > 20
#     puts "#{this_num} is not greater then 20"
# else
#     puts "#{this_num} is greater then 20"
# end    

# this_num = 10

# unless this_num > 20
#     puts "#{this_num} is not greater then 20"
# else
#     puts "#{this_num} is greater then 20"
# end    

puts "Player 1 please choose Rock, Paper, or Scissors"

choice1 = gets.chomp

puts "Player 2 please choose Rock, Paper, or Scissors"

choice2 = gets.chomp

if choice1 == choice2
    puts "this is a tie!"
elsif choice1 == "Rock" && choice2 == "Scissors" || choice1 == "rock" && choice2 == "scissors"
    puts "Rock always beats Scissors Player 1 wins!"
elsif choice1 == "Rock" && choice2 == "Paper" || choice1 == "rock" && choice2 == "paper"
    puts "Paper beats Rock Player 2 wins!"
elsif choice1 == "Paper" && choice2 == "Rock" || choice1 == "paper" && choice2 == "rock"
    puts "Paper beats Rock Player 1 wins!"
elsif choice1 == "Paper" && choice2 == "Scissors" || choice1 == "paper" && choice2 == "scissors"
    puts "Scissors cut Player 2 wins!"
elsif choice1 == "Scissors" && choice2 == "Rock" || choice1 == "scissors" && choice2 == "rock"
    puts "Rock beats Scissors Player 2 wins!"
elsif choice1 == "Scissors" && choice2 == "Paper" || choice1 == "scissors" && choice2 == "paper"
    puts "Scissors cuts Paper Player 2 wins!"
else 
end




