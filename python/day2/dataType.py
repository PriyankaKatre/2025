# substring
print('Hello'[-2])

#string
print('123'+ '456' )

#Integer-Whole Number
print(123+456)

#Large Integer
print(123_456_789)

#float
print(3.14159)

#boolean
print(True)
print(False)

print(len('1234'))


# Type of data
print(type(123.5))

#Type conversion
print(int('123'))

print(int('123') + int('564'))
int()

# print('Number of letters in your name:' + str(len(input('Enter your name'))))
print(6/3)
print(6//3)
print(2**2)


height = 1.65
weight = 84

# Write your code here.
# Calculate the bmi using weight and height.
bmi = weight/height

print(round(bmi))

print(f'your BMI is ${round(bmi, 2)}')


# expenses calculator

print('Welcome to the tip calculator');
bill = float(input('What was the total bill? $ '))
tip = int(input('How much % you would like to pay tip ? 10, 15, 18, 20 '));
people = int(input('How many people to split the bill? '))
total_amount = bill * tip/100 + bill
#total_amount = bill* (1+ tip/100 )
split_into_people = total_amount/people
print(f'Each person should pay ${split_into_people }' )

