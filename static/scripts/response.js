function getBotResponse(input){

   // Rock + Paper + Scissor

    if (input == "rock" || input == "Rock"){
        return "Paper";    
    }

    else if (input == "Paper" || input == "paper"){
        return "Scissor";
    }
    
    else if (input == "scissor" || input == "Scissor"){
        return "Rock";
    }

    // Normal Chat

    if (input == "hello" || input == "hi" || input == "Hello" || input == "Hi" || input == "hey" || input == "Hey"){
        return input + ", How are you doing?";
    }

    else if (input == "I am good" || input == "I'm good" || input == "i'm good" || input == "i am good" || input == "I am fine" || input == "i am fine" || input == "i'm fine"){
        return "It's nice!"
    }

    else if (input == "say more" || input == "Say more" || input == "Say something else" || input == "say something else"){
        return "Summer is Hot, Winter is Cold & Monsoon that's I love the most!!";
    }

    else if (input == "wow" || input == "Wow"){
        return "I'm just amazing!!"
    }

    else if (input == "yeah" || input == "Yeah"){
        return "I appreciate, let's talk more!";
    }

    else if (input == "no" || input == "No"){
        return "Are you busy?"
    }

    else if (input == "yes" || input == "Yes"){
        return "Okay, I can understand. Good bye!!"
    }

    else if (input == "bye" || input == "goodbye" || input == "Bye" || input == "Good Bye" || input == "good bye"){
        return "Okay! good bye, see you soon!"
    }

    else if (input == "I am just a coder!"){
        return "It's adorable";
    }

    else {
        return "Try asking something else or else say :- Say more";
    }

}
