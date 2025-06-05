type sample = {
  name: string,
  src: string
}

const samples: sample[] = [
  {
    name: "Introduction",
    src: `
print("Hejo! Jestem", end=" ")
print("Ka", "mil!", sep='')

def zapytaj():
    print("")
    print(f"Miło cię poznać {input("A ty jak masz na imię?")}")
zapytaj()

def sporty(pierwszy='basen', /, *jakie, ulubiony):
    print("Lubię sporty takie jak:", pierwszy)
    print(*jakie)
    print("A mój ulubiony to", ulubiony)
sporty(ulubiony='taniec')
print("Pomyliłem się!")
sporty("boks", "narty", ulubiony="football")
`
  },
  {
    name: "Variables",
    src: `
a = 155
b = 3

a, b = b, a

c = a * b
d = c / (b * 6)

print(a)
print(b)
print(c)
print(d)

a = 11
a = -a
b = +a
c = ~a

boo = True
nboo = not boo

print(a, b, c)
print(boo, nboo)

i = 10
j = 5
while i > 0:
    print(i)
    i = i - 1
    test = 3434

test = 56

def fact(n):
    return 1 if n == 0 else n * fact(n - 1)
print(fact(10))
`/*

class Foo:
    def __init__(self):
        self.cls_var = 45
        localvar = 56
  },
  {
    name: "Classes",
    src: `
class Foo:
    class Bar:
        def __init__(self):
            print("__init__ from Bar")
    
    def __init__(self):
        print("__init__ from Foo")
        Foo.Bar()

Foo()
Foo.Bar()
`
  },
  {
    name: "Ultimate classes getters",
    src: `
class a():
    def __call__(self):
        print('called', self)
        return 1
    
class b():
    def __get__(*args):
        print("Get", args)
        return a()
        
class c():
    __call__ = b()
    
class dg():
    def __call__(*args):
        print("Get call", args)
        return c()
        
class dh(dg):
    pass
    
class d():
    __get__ = dh()

class de(d):
    pass 

class e():
    __call__ = de()
    __len__ = de()

print("Len")
len(e())

print("\nInstance")
e().__call__()
e()()
print("\nType")
e.__call__()
e()
e.__dict__['__call__']()
`
*/
/*
Len
Get call (<__main__.dh object at 0x7eb2806e9cd0>, <__main__.de object at 0x7eb2806e9dc0>, <__main__.e object at 0x7eb2806e9e80>, <class '__main__.e'>)
Get (<__main__.b object at 0x7eb2806e9c70>, <__main__.c object at 0x7eb2806e9e50>, <class '__main__.c'>)
called <__main__.a object at 0x7eb2806e9eb0>

Instance
Get call (<__main__.dh object at 0x7eb2806e9cd0>, <__main__.de object at 0x7eb2806e9d90>, <__main__.e object at 0x7eb2806e9e80>, <class '__main__.e'>)
Get (<__main__.b object at 0x7eb2806e9c70>, <__main__.c object at 0x7eb2806e9e50>, <class '__main__.c'>)
called <__main__.a object at 0x7eb2806e9e80>
Get call (<__main__.dh object at 0x7eb2806e9cd0>, <__main__.de object at 0x7eb2806e9d90>, <__main__.e object at 0x7eb2806e9e50>, <class '__main__.e'>)
Get (<__main__.b object at 0x7eb2806e9c70>, <__main__.c object at 0x7eb2806e9e80>, <class '__main__.c'>)
called <__main__.a object at 0x7eb2806e9eb0>

Type
Get call (<__main__.dh object at 0x7eb2806e9cd0>, <__main__.de object at 0x7eb2806e9d90>, None, <class '__main__.e'>)
Get (<__main__.b object at 0x7eb2806e9c70>, <__main__.c object at 0x7eb2806e9e50>, <class '__main__.c'>)
called <__main__.a object at 0x7eb2806e9e80>
ERROR!
Traceback (most recent call last):
  File "<main.py>", line 43, in <module>
TypeError: 'de' object is not callable
*/
  },
  {
    name: "Pythonese Brainrot",
    src: `
try:
    x ,= (f"a" f"b",)
except:
    print("Niet")
print(r'''\\'''Yes''')
print(u"Maybe")

def test(f):
    def wrap(*a): print(":D"); f(*a)
    f(0)
    return wrap

@(another := test,)[0]
def omg(a, /, *, b = None):
  print(rf'\\"\\n {a=!a} {a=:{a}.{a}f}')

omg(1)
a = abc(5)

def a():
    x = 5
    y = 4
    def b():
        y = 3
        def c():
            nonlocal x
            nonlocal y
            print(x, y)
        c()
    b()
a()
`
/*

@another
class abc(str):
  pr = 12
  def __init__(self, eee):
      print(eee)

# Easy one
def right(eeee):
    x = yield 5
    print(eeee, x)
    return 8

u = right(1) # ?
print(u)
try:
    u.send(2)
    print(":)")
except:
    ...
u.send(None)
u.send(6) 
*/
  },
  {
    name: "Errors",
    src: `
try:
    def test():
        raise "Fatal error"
    test()
except:
    print("Hooo")
finally:
    print("Closing too!!!")

try:
    raise "Sample error"
except:
    print("Hiaa")
    raise "Bla"
finally:
    print("Closing :)")
`
  },
  {
    name: "Tic Tac Toe",
    src: `
# Pam Qian 2016 Fall CS 112 Python Midterm Project II
# Tic Tack Toe 

def main():
# The main function
    introduction = intro()
    board = create_grid()
    pretty = printPretty(board)
    symbol_1, symbol_2 = sym()
    full = isFull(board, symbol_1, symbol_2) # The function that starts the game is also in here.
    

    


def intro():
# This function introduces the rules of the game Tic Tac Toe
    print("Hello! Welcome to Pam's Tic Tac Toe game!")
    print("\\n")
    print("Rules: Player 1 and player 2, represented by X and O, take turns "
          "marking the spaces in a 3*3 grid. The player who succeeds in placing "
          "three of their marks in a horizontal, vertical, or diagonal row wins.")
    print("\\n")
    input("Press enter to continue.")
    print("\\n")



def create_grid():
# This function creates a blank playboard
    print("Here is the playboard: ")
    board = [[" ", " ", " "],
             [" ", " ", " "],
             [" ", " ", " "]]        
    return board



def sym():
# This function decides the players' symbols
    symbol_1 = input("Player 1, do you want to be X or O? ")
    if symbol_1 == "X":
        symbol_2 = "O"
        print("Player 2, you are O. ")
    else:
        symbol_2 = "X"
        print("Player 2, you are X. ")
    input("Press enter to continue.")
    print("\\n")
    return (symbol_1, symbol_2)



def startGamming(board, symbol_1, symbol_2, count):
# This function starts the game.

    # Decides the turn
    if count % 2 == 0:
        player = symbol_1
    elif count % 2 == 1:
        player = symbol_2
    print("Player "+ player + ", it is your turn. ")
    row = int(input("Pick a row:"
                    "[upper row: enter 0, middle row: enter 1, bottom row: enter 2]:"))
    column = int(input("Pick a column:"
                       "[left column: enter 0, middle column: enter 1, right column enter 2]"))


    # Check if players' selection is out of range
    while (row > 2 or row < 0) or (column > 2 or column < 0):
        outOfBoard(row, column)
        row = int(input("Pick a row[upper row:"
                        "[enter 0, middle row: enter 1, bottom row: enter 2]:"))
        column = int(input("Pick a column:"
                           "[left column: enter 0, middle column: enter 1, right column enter 2]"))

        # Check if the square is already filled
    while (board[row][column] == symbol_1) or (board[row][column] == symbol_2):
        filled = illegal(board, symbol_1, symbol_2, row, column)
        row = int(input("Pick a row[upper row:"
                        "[enter 0, middle row: enter 1, bottom row: enter 2]:"))
        column = int(input("Pick a column:"
                            "[left column: enter 0, middle column: enter 1, right column enter 2]"))    
        
    # Locates player's symbol on the board
    if player == symbol_1:
        board[row][column] = symbol_1
            
    else:
        board[row][column] = symbol_2
    
    return (board)



def isFull(board, symbol_1, symbol_2):
    count = 1
    winner = True
# This function check if the board is full
    while count < 10 and winner == True:
        gaming = startGamming(board, symbol_1, symbol_2, count)
        pretty = printPretty(board)
        
        if count == 9:
            print("The board is full. Game over.")
            if winner == True:
                print("There is a tie. ")

        # Check if here is a winner
        winner = isWinner(board, symbol_1, symbol_2, count)
        count += 1
    if winner == False:
        print("Game over.")
        
    # This is function gives a report 
    report(count, winner, symbol_1, symbol_2)



def outOfBoard(row, column):
# This function tells the players that their selection is out of range
    print("Out of boarder. Pick another one. ")
    
    

def printPretty(board):
# This function prints the board nice!
    rows = len(board)
    cols = len(board)
    print("---+---+---")
    for r in range(rows):
        print(board[r][0], " |", board[r][1], "|", board[r][2])
        print("---+---+---")
    return board



def isWinner(board, symbol_1, symbol_2, count):
# This function checks if any winner is winning
    winner = True
    # Check the rows
    for row in range (0, 3):
        if (board[row][0] == board[row][1] == board[row][2] == symbol_1):
            winner = False
            print("Player " + symbol_1 + ", you won!")
   
        elif (board[row][0] == board[row][1] == board[row][2] == symbol_2):
            winner = False
            print("Player " + symbol_2 + ", you won!")
            
            
    # Check the columns
    for col in range (0, 3):
        if (board[0][col] == board[1][col] == board[2][col] == symbol_1):
            winner = False
            print("Player " + symbol_1 + ", you won!")
        elif (board[0][col] == board[1][col] == board[2][col] == symbol_2):
            winner = False
            print("Player " + symbol_2 + ", you won!")

    # Check the diagnoals
    if board[0][0] == board[1][1] == board[2][2] == symbol_1:
        winner = False 
        print("Player " + symbol_1 + ", you won!")

    elif board[0][0] == board[1][1] == board[2][2] == symbol_2:
        winner = False
        print("Player " + symbol_2 + ", you won!")

    elif board[0][2] == board[1][1] == board[2][0] == symbol_1:
        winner = False
        print("Player " + symbol_1 + ", you won!")

    elif board[0][2] == board[1][1] == board[2][0] == symbol_2:
        winner = False
        print("Player " + symbol_2 + ", you won!")

    return winner
    


def illegal(board, symbol_1, symbol_2, row, column):
    print("The square you picked is already filled. Pick another one.")

    
def report(count, winner, symbol_1, symbol_2):
    print("\\n")
    input("Press enter to see the game summary. ")
    if (winner == False) and (count % 2 == 1 ):
        print("Winner : Player " + symbol_1 + ".")
    elif (winner == False) and (count % 2 == 0 ):
        print("Winner : Player " + symbol_2 + ".")
    else:
        print("There is a tie. ")

# Call Main
main()
`
  }
]
export default samples