import { browser } from '@wdio/globals'


export default class Home {
    get startBtn () {
        return $('button#start-btn');
    }
    get resetBtn () {
        return $('button.resetButton')
    }
    get cancelBtn () {
        return $('button.cancel-btn')
    }
    get startQuizBtn () {
        return $('button.continue-btn')
    }
    get question () {
        return $('.question h2')
    }
    get title () {
        return $('//h2[contains(text(), "Quiz Info")]')
    }
    get answerBtns() {
        return [
            $('.btn:nth-child(1)'),
            $('.btn:nth-child(2)'),
            $('.btn:nth-child(3)'),
            $('.btn:nth-child(4)'),
        ];
    }
    get answerCorrect () {
        return $('.correct')
    }
    get answerWrong () {
        return $('.wrong')
    }
    get nextBtn () {
        return $('.next-btn')
    }
    get disabledBtns () {
        return $$('.disabled')
    }
    get score () {
        return $('span.score')
    }

    currentQuestion = 1;

    openURL () {
        return browser.url('https://lovemegs.github.io/Demi-Song-Quiz')
    }
}
